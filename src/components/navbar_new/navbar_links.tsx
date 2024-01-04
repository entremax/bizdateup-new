'use client'
import React, { useEffect, useRef } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { DataInner } from '@/types'
import useCookieLocal from '@/lib/useCookieLocal'
import InvestorLinks from '@/components/navbar_new/InvestorLinks'
import { StartupData } from '@/types/invest'
import StartupLinks from '@/components/navbar_new/StartupLinks'
import PublicLinks from '@/components/navbar_new/PublicLinks'

interface BaseUser {
  user: StartupData | DataInner | null
  role?: 'investor' | 'startup'
  authenticated: boolean
}

interface UserInvestor extends BaseUser {
  user: DataInner | null
  role?: 'investor'
  authenticated: boolean
}

interface UserStartup extends BaseUser {
  user: StartupData | null
  role: 'startup'
  authenticated: boolean
}

type Props = UserInvestor | UserStartup

export default function NavbarLinks({ user, role, authenticated }: Props) {
  const renderCount = useRef(0)
  const router = useRouter()
  const logged_in = useCookieLocal('logged-in')
  const path = usePathname()
  const linkStyle =
    'flex gap-2 items-center text-gray-400 font-medium text-sm md:text-lg px-4 group-hover:text-primary h-full'
  useEffect(() => {
    if (renderCount.current < 2) {
      return router.refresh()
    }
    renderCount.current += 1
  }, [router, logged_in])

  return (
    <>
      <div className={'grow'} />

      {user && authenticated && logged_in && role === 'investor' && (
        <div className="hidden md:flex md:h-full md:w-full">
          <InvestorLinks
            path={path}
            linkStyle={linkStyle}
            role={'investor'}
            user={user}
          />
        </div>
      )}
      {user && authenticated && logged_in && role === 'startup' && (
        <div className="hidden md:flex md:h-full md:w-full">
          <StartupLinks
            path={path}
            linkStyle={linkStyle}
            role={'startup'}
            user={user}
          />
        </div>
      )}
      {!user && (!authenticated || !logged_in) && (
        <div className={'hidden items-center gap-8 sm:flex'}>
          <PublicLinks path={path} linkStyle={linkStyle} />
        </div>
      )}
      {authenticated && logged_in && <div className="grow" />}
    </>
  )
}
