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
        <InvestorLinks
          path={path}
          linkStyle={linkStyle}
          role={'investor'}
          user={user}
        />
      )}
      {user && authenticated && logged_in && role === 'startup' && (
        <StartupLinks
          path={path}
          linkStyle={linkStyle}
          role={'startup'}
          user={user}
        />
      )}
      {!user && (!authenticated || !logged_in) && (
        <PublicLinks path={path} linkStyle={linkStyle} />
      )}
      {authenticated && logged_in && <div className="grow" />}
    </>
  )
}
