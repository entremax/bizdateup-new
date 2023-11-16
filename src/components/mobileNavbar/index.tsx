'use client'
import React from 'react';
import { usePathname } from "next/navigation";
import { Icons } from "@/icons";
import Link from "next/link";
import { cn } from "@/lib/utils";

const MobileNavbar = () => {
  const path = usePathname()
  
  const mobileNavMenu = [
    {
      name: "Dashboard",
      icon: Icons.Dashboard,
      link: "/dashboard"
    },
    {
      name: 'Invest',
      icon: Icons.InvestMobile,
      link: '/invest'
    },
    {
      name: 'Portfolio',
      icon: Icons.PortfolioMobile,
      link: '/portfolio'
    },
    {
      name: 'Profile',
      icon: Icons.Profile,
      link: '/profile'
    }
  ]
  const linkStyle = 'grid justify-center items-center gap-2 text-gray-400 font-medium text-xs group-hover:text-primary';
  const groupStyle = "group grid justify-center items-center h-full"

  return (
    <nav className={'fixed md:hidden bottom-0 left-0 right-0 h-16 z-[999] bg-white border_gray border-0 border-t-2 shadow-lg grid grid-cols-4 gap-8'}>
      {mobileNavMenu.map((item, key) => (
        <div className={cn(item.link === path
          ? groupStyle + " border-solid border-0 border-t-2 border-primary" : groupStyle)} key={key}>
          <Link className={cn(
            item.link === path
              ? linkStyle +
              ' text-primary font-bold'
              : linkStyle
          )} href={item.link}>
            <item.icon
              className={cn(item.link === '/dashboard' ? 'fill-current stroke-current group-hover:fill-primary justify-self-center shrink' : 'stroke-current group-hover:fill-primary justify-self-center shrink')}
              width='1rem'
              height='1rem'
            />
            <span className={"shrink text-xs font-light"}>{item.name}</span>
          </Link>
        </div>
      ))}
    </nav>
  )
}

export default MobileNavbar