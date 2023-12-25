'use client'

import useCookieLocal from '@/lib/useCookieLocal'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import data from './data'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Dropdown } from 'antd'
import LearnDropDown from '@/components/navbar_new/LearnDropDown'
import { DownOutlined } from '@ant-design/icons'
import UserMenu from '@/components/navbar/navbar_usermenu'
import NewInSite from '@/components/navbar_new/newInSite'

export default function NavbarNew() {
  const path = usePathname()
  const { NavbarData } = data
  const logged_in = useCookieLocal('logged-in')
  const [authenticated, setAuthenticated] = useState(
    !!(logged_in && logged_in === 'true'),
  )
  const [show, setShow] = useState(true)
  const innerHeight = window.innerHeight // Adjust this value to set the scrolling threshold
  const handleScroll = () => {
    const scrollY = window.scrollY

    setShow(scrollY >= innerHeight)
  }

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [innerHeight])

  useEffect(() => {
    setAuthenticated(!!(logged_in && logged_in === 'true'))
  }, [logged_in])

  const linkStyle =
    'flex gap-2 items-center text-gray-400 font-medium text-sm md:text-lg px-4 group-hover:text-primary h-full'

  return (
    <>
      <NewInSite />
      <div className="fixed left-0 right-0 z-[999] flex h-[4.5rem]  items-center bg-white shadow-[0px_1px_0px_0px_#E5E9F2] lg:px-8">
        <Link href={'/'} className={!authenticated ? 'flex-grow' : ''}>
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
            !authenticated
              ? 'flex h-full items-center gap-12'
              : 'flex h-full w-full items-center'
          }>
          {authenticated && <div className={'grow'} />}
          {(authenticated ? NavbarData.non_public : NavbarData.public).main.map(
            (link, index) => (
              <div key={link.name} className="group hidden h-full lg:inline">
                {link.name === 'Learn' ? (
                  <Dropdown
                    dropdownRender={() => <LearnDropDown />}
                    trigger={['click', 'hover']}>
                    <Link
                      href={link.to}
                      className={cn(
                        path.startsWith(link.to)
                          ? linkStyle +
                              ' h-[98%] border-0 border-b-2 border-solid border-primary text-primary'
                          : linkStyle,
                      )}>
                      <span className="">{link.name}</span>
                      <DownOutlined style={{ fontSize: '12px' }} />
                    </Link>
                  </Dropdown>
                ) : (
                  <Link
                    href={link.to}
                    className={cn(
                      path.startsWith(link.to)
                        ? linkStyle +
                            ' h-[98%] border-0 border-b-2 border-solid border-primary text-primary'
                        : linkStyle,
                    )}>
                    {link.icon ? (
                      <link.icon
                        className="fill-current group-hover:fill-primary"
                        width="1rem"
                        height="1rem"
                      />
                    ) : null}
                    <span className="">{link.name}</span>
                  </Link>
                )}
              </div>
            ),
          )}
          {authenticated && <div className={'grow'} />}
          {!authenticated && (
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
          )}
          {authenticated && (
            <div className={' flex items-center justify-center gap-4 lg:gap-8'}>
              <UserMenu />
            </div>
          )}
        </div>
      </div>
    </>
  )
}
