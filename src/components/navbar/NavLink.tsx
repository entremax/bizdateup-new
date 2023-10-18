'use client';
import React, {useEffect } from 'react';
import Link from 'next/link';
import {redirect, usePathname} from 'next/navigation';
import { Icons } from '@/icons';
import { cn } from '@/lib/utils';
import {useAppSelector} from "@/store/hooks";

const linkStyle =
  'flex gap-2 items-center text-gray-400 font-medium text-md px-4 group-hover:text-primary h-full';

const headerType = {
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

const pathType = {
  unAuthenticated: [/\/login/, /\/signup/,/\/otp/],
  authenticated: [/\/dashboard/, /\/invest/,/\/profile/],
};

const Links = ({ type }: { type: 'unauthenticated'|'authenticated' }) => {
  const path = usePathname();
  const {token}=useAppSelector(({authUser})=>authUser)
  
  const matchPath = (pathList: RegExp[]) => {
    return pathList.some((pattern) => pattern.test(path));
  }
  
  useEffect(() => {
    if (token && matchPath(pathType.unAuthenticated)) {
      redirect('/dashboard')
    }
  }, [path]);

  return (
    <>
      {(type !== 'unauthenticated' ? headerType.dashboard : headerType.normal).main.map(
        (link, index) => (
          <div
            key={index}
            className={'group h-full'}
          >
            <Link
              href={link.to}
              className={cn(
                link.to === path
                  ? linkStyle +
                      ' text-primary h-[98%]  border-solid border-0 border-b-2 border-primary'
                  : linkStyle
              )}
            >
              {link.icon ? (
                <link.icon
                  className='fill-current group-hover:fill-blue-500'
                  width='1rem'
                  height='1rem'
                />
              ) : null}
              <p>{link.name}</p>
            </Link>
          </div>
        )
      )}
    </>
  );
};
export default Links;
