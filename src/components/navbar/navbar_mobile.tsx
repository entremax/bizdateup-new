'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import { Icons } from '@/components/icons/icon'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const MobileNavbar = () => {
  const path = usePathname()
  const mobileNavMenu = [
    {
      name: 'Dashboard',
      icon: Icons.Dashboard,
      link: '/dashboard',
    },
    {
      name: 'Invest',
      icon: Icons.InvestMobile,
      link: '/invest',
    },
    {
      name: 'Portfolio',
      icon: Icons.PortfolioMobile,
      link: '/portfolio',
    },
    {
      name: 'Profile',
      icon: Icons.Profile,
      link: '/profile',
    },
  ]
  const linkStyle =
    'grid justify-center items-center gap-2 text-gray-400 font-medium text-xs group-hover:text-primary'
  const groupStyle = 'group grid justify-center items-center h-full'
  return (
    <nav
      className={
        'border_gray fixed bottom-0 left-0 right-0 z-[999] grid h-16 grid-cols-4 gap-8 border-0 border-t-2 bg-white shadow-lg md:hidden'
      }>
      {mobileNavMenu.map((item, key) => (
        <div
          className={cn(
            path.startsWith(item.link)
              ? groupStyle + ' border-0 border-t-2 border-solid border-primary'
              : groupStyle,
          )}
          key={key}>
          <Link
            className={cn(
              path.startsWith(item.link)
                ? linkStyle + ' font-bold text-primary'
                : linkStyle,
            )}
            href={item.link}>
            <item.icon
              className={cn(
                item.link === '/dashboard'
                  ? 'shrink justify-self-center fill-current stroke-current group-hover:fill-primary'
                  : 'shrink justify-self-center stroke-current group-hover:fill-primary',
              )}
              width="1rem"
              height="1rem"
            />
            <span className={'shrink text-xs font-light'}>{item.name}</span>
          </Link>
        </div>
      ))}
    </nav>
  )
}

export default MobileNavbar
