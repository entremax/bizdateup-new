'use client';
import React, {useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icons } from '@/icons';
import { cn } from '@/lib/utils';

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
  normal: ['/login', '/signup'],
  dashboard: ['/dashboard', '/invest'],
};

const Links = ({ type }: { type: string }) => {
  const path = usePathname();

  useEffect(() => {
    if (!pathType.normal.includes(path)) {
      console.log(path);
    }
  }, []);
  return (
    <div className='hidden h-full md:flex gap-4'>
      {(type !== 'normal' ? headerType.dashboard : headerType.normal).main.map(
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
    </div>
  );
};
export default Links;
