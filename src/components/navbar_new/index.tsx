import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import UserMenu from '@/components/navbar_new/navbar_usermenu'
import Sidebar from '@/components/navbar_new/Sidebar'
import NavbarLinks from '@/components/navbar_new/navbar_links'
import getUserDetails from '@/action/user'
import { cookies } from 'next/headers'
import { InvestorUserData, StartupUserData } from '@/types'

interface ExtendedStartupData extends StartupUserData {
  local_user?: boolean
}

interface ExtendedInvestorData extends InvestorUserData {
  local_user?: false
}

export default async function NavbarNew() {
  const { user, role } = await getUserDetails()

  const token = cookies()?.get('token')?.value
  const local_user = Boolean(cookies()?.get('local-user')?.value)
  const authenticated = !!token

  const userData:
    | Pick<ExtendedInvestorData, 'user' | 'role' | 'local_user'>
    | Pick<ExtendedStartupData, 'user' | 'role' | 'local_user'> =
    role === 'investor'
      ? { user, role: 'investor', local_user: false }
      : { user, role: 'startup', local_user }
  const navLinkProps={...userData,authenticated}
  return (
    <div className="fixed left-0 right-0 z-[999] flex h-[4.5rem]  items-center bg-white shadow-[0px_1px_0px_0px_#E5E9F2] lg:px-8">
      <Link href={'/'} className={!authenticated ? 'flex-grow' : ''}>
        <Image
          priority
          className=""
          src={'/logo_full.svg'}
          height={80}
          width={176}
          alt="app logo"
        />
      </Link>

      <div
        className={
          !authenticated
            ? 'flex h-full items-center xl:gap-12'
            : 'flex h-full w-full items-center'
        }>
        {!local_user?<NavbarLinks {...navLinkProps} />:<div className="grow"/>}
        
        {authenticated && (
          <div className={' flex items-center justify-center gap-4'}>
            <UserMenu {...userData} />
          </div>
        )}
        {!authenticated && (
          <div className="mx-4 md:hidden">
            <Sidebar />
          </div>
        )}
      </div>
    </div>
  )
}
