import Image from 'next/image'
import Link from 'next/link'
import { Icons } from '@/icons'
import React from 'react'
import NavLink from '@/components/navbar/NavLink'
import UserMenu from './userMenu'
import ReduxProvider from '@/store/Provider'
import { cookies } from 'next/headers'

const Navbar: React.FC = () => {
  const cookieStore = cookies()
  const token = cookieStore.get('token')

  const type = token ? 'authenticated' : 'unauthenticated'

  return (
    <div className="fixed left-0 right-0 z-[999] flex h-[4.5rem]  items-center bg-white px-8 shadow-[0px_1px_0px_0px_#E5E9F2]">
      <Link
        href={'/'}
        className={type === 'unauthenticated' ? 'flex-grow' : ''}>
        <Image
          className="md:pl-8"
          src={'/logo_full.svg'}
          height={80}
          width={176}
          alt="app logo"
        />
      </Link>
      <div
        className={
          type === 'unauthenticated'
            ? 'flex h-full items-center gap-12'
            : 'flex h-full w-full items-center'
        }>
        {type !== 'unauthenticated' && <div className={'grow'} />}
        <NavLink type={type} />
        {type !== 'unauthenticated' && <div className={'grow'} />}

        {type === 'unauthenticated' ? (
          <div className="hidden h-full items-center justify-center gap-2 lg:flex">
            <Link
              href={'/login'}
              className="cursor-pointer rounded-lg border-0 bg-light-shadow p-[0.625rem_1.25rem] text-primary outline-none">
              Login
            </Link>
            <Link
              href={'/get-started'}
              className="text-md cursor-pointer rounded-lg border-0 !bg-primary p-[0.625rem_1.25rem] text-center text-white outline-none">
              Get Started
            </Link>
          </div>
        ) : (
          <div className={'hidden items-center justify-center gap-8 lg:flex'}>
            <Link
              href={'/refer-earn'}
              className="cursor-pointer rounded-lg border-0 p-[0.625rem_1.25rem] text-primary  outline outline-[0.022rem] outline-primary">
              Refer & Earn
            </Link>
            <ReduxProvider>
              <UserMenu token={token} />
            </ReduxProvider>
          </div>
        )}
        <div className="flex-shrink md:hidden">
          <Icons.BurgerMenu height={28} width={28} alt="Menu" />
        </div>
      </div>
    </div>
  )
}

export default Navbar
