'use client';
import { Icons } from '@/icons';
import { cn } from '@/lib/utils';
import { DownOutlined, EditTwoTone, InfoCircleTwoTone, ProfileTwoTone, UpOutlined, VideoCameraTwoTone } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { ReactElement, useState } from 'react';


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

const MenuItem = (key: number, label: string, href: string, description: string, iconComponent: ReactElement) => ({
  key,
  label: (
    <Link href={href} className='text-xl font-semibold'>
      {label}
      <br />
      <span className='text-gray-500 text-sm font-normal'>{description}</span>
    </Link>
  ),
  icon: React.cloneElement(iconComponent, {
    style: {
      fontSize: 20,
      backgroundColor: '#f3f3fe',
      padding: '15px',
      marginRight: '20px',
      borderRadius: '10px',
    }
  })
})

const items: MenuProps['items'] = [
  MenuItem(1, 'Tutorials', '/tutorial', 'Grow your start up investment knowledge here', <VideoCameraTwoTone />),
  MenuItem(2, 'Frequently asked questions', '/faq', 'All your questions answered in one place', <InfoCircleTwoTone />),
  MenuItem(3, 'About the company', '/about', 'Everything about company and people behind the scenes', <ProfileTwoTone />),
  MenuItem(4, 'Blogs', '/blog', 'Everything about company and people behind the scenes', <EditTwoTone />),
]

const Links = ({ type }: { type: 'unauthenticated' | 'authenticated' }) => {
  const path = usePathname();
  const linkStyle =
    'flex gap-2 items-center text-gray-400 font-medium text-sm md:text-md lg:text-lg px-4 group-hover:text-primary h-full';

  const [isArrow, setIsArrow] = useState<boolean>(false);

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
                  'text-primary h-[98%] border-solid border-0 border-b-2 border-primary'
                  : linkStyle
              )}
            >
              {link.name === 'Learn' ?
                <div onMouseEnter={() => setIsArrow(true)} onMouseLeave={() => setIsArrow(false)}>
                  <Dropdown menu={{ items }} placement="bottom" arrow={{ pointAtCenter: true }}>
                    <a onClick={(e) => e.preventDefault()}>
                      <Space>
                        Learn
                        {!isArrow ? <DownOutlined className='text-sm' /> : <UpOutlined className='text-sm' />}
                      </Space>
                    </a>
                  </Dropdown>
                </div>
                : <p>{link.name}</p>}

              {link.icon ? (
                <link.icon
                  className='fill-current group-hover:fill-blue-500'
                  width='1rem'
                  height='1rem'
                />
              ) : null}
            </Link>
          </div>
        )
      )}
    </>
  );
};
export default Links;