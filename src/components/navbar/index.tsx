import Image from 'next/image';
import Link from 'next/link';
import { Icons } from '@/icons';
import React from 'react';
import NavLink from '@/components/navbar/NavLink';
import UserMenu from './userMenu';
import ReduxProvider from '@/store/Provider';

export const headerType = {
  dashboard: {
    main: [
      {
        name: 'Dashboard',
        icon: Icons.Dashboard,
        to: '/dashboard',
      },
      {
        name: 'Invest',
        icon: Icons.Invest,
        to: '/invest',
      },
      {
        name: 'Portfolio',
        icon: Icons.Portfolio,
        to: '/portfolio',
      },
    ],
    userMenu: [
      {
        name: 'Refer & Earn',
      },
    ],
  },
  normal: {
    main: [
      {
        name: 'Invest',
        icon: null,
        to: '/invest',
      },
      {
        name: 'Raise Funds',
        icon: null,
        to: '/raise',
      },
      {
        name: 'Dashboard',
        icon: null,
        to: '/dashboard',
      },
      {
        name: 'Learn',
        icon: null,
        to: '/learn',
      },
    ],
  },
};

export const pathType = {
  normal: ['/login', '/signup'],
  dashboard: ['/dashboard', '/invest'],
};

type NavbarProps = {
  type: 'dashboard' | 'normal'; // Specify the valid types for 'type'
};

const Navbar: React.FC<NavbarProps> = ({ type }) => {
  return (
    <div className='fixed flex px-8 items-center left-0 right-0  h-[4.5rem] z-[999] bg-white shadow-[0px_1px_0px_0px_#E5E9F2]'>
      <Link
        href={'/'}
        className={type === 'normal' ? 'flex-grow' : ''}
      >
        <Image
          className='md:pl-8'
          src={'/logo_full.svg'}
          height={80}
          width={176}
          alt='app logo'
        />
      </Link>
      <div
        className={
          type === 'normal'
            ? 'flex gap-12 items-center h-full'
            : 'w-full h-full flex items-center'
        }
      >
        {type !== 'normal' && <div className={'grow'} />}
        <NavLink type={type} />
        {type !== 'normal' && <div className={'grow'} />}
        {type === 'normal' ? (
          <div className='hidden h-full md:flex gap-2'>
            <Link
              href={'/login'}
              className='p-[0.625rem_1.25rem] cursor-pointer bg-light-shadow outline-none border-0 text-primary rounded-lg'
            >
              Login
            </Link>
            <Link
              href={'/get-started'}
              className='p-[0.625rem_1.25rem] cursor-pointer items-center text-md outline-none border-0 !bg-primary rounded-lg text-white'
            >
              Get Started
            </Link>
          </div>
        ) : (
            <div className={'hidden md:flex gap-8 justify-center items-center'}>
              <Link
                href={'/refer-earn'}
                className='p-[0.625rem_1.25rem] cursor-pointer outline outline-primary outline-[0.022rem]  border-0 text-primary rounded-lg'
              >
                {headerType.dashboard.userMenu[0].name}
              </Link>
              <ReduxProvider>
                <UserMenu />
              </ReduxProvider>
            </div>
        )}
        <div className='flex-shrink md:hidden'>
          <Icons.BurgerMenu
            height={28}
            width={28}
            alt='Menu'
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
