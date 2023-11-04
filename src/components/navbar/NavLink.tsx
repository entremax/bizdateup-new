'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname} from 'next/navigation';
import { Icons } from '@/icons';
import { cn } from '@/lib/utils';


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

const Links = ({ type }: { type: 'unauthenticated'|'authenticated' }) => {
  const path = usePathname();
  const linkStyle =
    'flex gap-2 items-center text-gray-400 font-medium text-sm md:text-md lg:text-lg px-4 group-hover:text-primary h-full';
  
  return (
    <>
      {(type !== 'unauthenticated' ? headerType.dashboard : headerType.normal).main.map(
        (link, index) => (
          <div
            key={index}
            className={'group h-full hidden lg:inline'}
          >
            <Link href={link.to}
                className={cn(
                  path.startsWith(link.to)
                    ? linkStyle +
                    ' text-primary h-[98%] border-solid border-0 border-b-2 border-primary'
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