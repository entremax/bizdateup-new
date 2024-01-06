import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import UserMenu from '@/components/navbar_new/navbar_usermenu'
import Sidebar from '@/components/navbar_new/Sidebar'
import NavbarLinks from '@/components/navbar_new/navbar_links'
import getUserDetails from '@/action/user'
import { cookies } from 'next/headers'
import { StartupData } from '@/types/invest'
import { DataInner } from '@/types'

export default async function NavbarNew() {
  const { user, role } = await getUserDetails()

  const token = cookies()?.get('token')?.value
  const authenticated = !!token

  const userData:
    | {
        user: DataInner | null
        role: 'investor'
      }
    | {
        user: StartupData | null
        role: 'startup'
      } =
    role === 'investor' ? { user, role: 'investor' } : { user, role: 'startup' }

  return (
    <>
      {/*<NewInSite />*/}
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
          {role !== 'investor' ? (
            <NavbarLinks
              role={'startup'}
              user={user}
              authenticated={authenticated}
            />
          ) : (
            (!role || role === 'investor') && (
              <NavbarLinks
                role={'investor'}
                user={user}
                authenticated={authenticated}
              />
            )
          )}
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
    </>
  )
}
