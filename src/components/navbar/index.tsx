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
    <div className="fixed flex px-8 items-center left-0 right-0  h-[4.5rem] z-[999] bg-white shadow-[0px_1px_0px_0px_#E5E9F2]">
      <Link
        href={'/'}
        className={type === 'unauthenticated' ? 'flex-grow' : ''}
      >
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
            ? 'flex gap-12 items-center h-full'
            : 'w-full h-full flex items-center'
        }
      >
        {type !== 'unauthenticated' && <div className={'grow'} />}
        <NavLink type={type} />
        {type !== 'unauthenticated' && <div className={'grow'} />}

        {type === 'unauthenticated' ? (
          <div className="hidden h-full lg:flex justify-center items-center gap-2">
            <Link
              href={'/login'}
              className="p-[0.625rem_1.25rem] cursor-pointer bg-light-shadow outline-none border-0 text-primary rounded-lg"
            >
              Login
            </Link>
            <Link
              href={'/get-started'}
              className="p-[0.625rem_1.25rem] cursor-pointer text-center text-md outline-none border-0 !bg-primary rounded-lg text-white"
            >
              Get Started
            </Link>
          </div>
        ) : (
          <div className={'hidden lg:flex gap-8 justify-center items-center'}>
            <Link
              href={'/refer-earn'}
              className="p-[0.625rem_1.25rem] cursor-pointer outline outline-primary outline-[0.022rem]  border-0 text-primary rounded-lg"
            >
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
