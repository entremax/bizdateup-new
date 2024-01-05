'use client'
import React, { useState } from 'react'
import { Icons } from '@/icons/icon'
import Link from 'next/link'
import Button from '@/components/LinkButton'
import { DownOutlined, UpOutlined } from '@ant-design/icons'

const Sidebar = () => {
  const [dropDown, setDropDown] = useState(true)
  const [show, setShow] = useState<boolean>(false)
  const sidebarData = [
    {
      id: 1,
      name: 'Invest',
      to: '/invest',
    },
    {
      id: 2,
      name: 'Raise Funds',
      to: '/raise',
    },
    {
      id: 3,
      name: 'Dashboard',
      to: '/dashboard',
    },
    {
      id: 4,
      name: 'Learn',
      to: '/learn',
      submenu: true,
    },
    {
      id: 5,
      type: 'button',
      name: 'Get Started',
      bgColor: 'bg-white font-medium !text-primary',
      to: '/signup',
    },
    {
      id: 6,
      type: 'button',
      name: 'Login',
      bgColor:
        '!bg-transparent font-medium text-white !border-[0.02rem] border-solid !border-white',
      to: '/login',
    },
  ]
  const submenuItems = [
    {
      id: 4.1,
      name: 'Tutorials',
      to: '/learn',
    },
    {
      id: 4.2,
      name: 'FAQs',
      to: '/faq',
    },
    {
      id: 4.3,
      name: 'About Company',
      to: '/about-us',
    },
    {
      id: 4.4,
      name: 'Blogs',
      to: '/blogs',
    },
  ]
  const linkClass = 'text-xl text-white font-bold py-4'
  return (
    <>
      {!show && (
        <Icons.BurgerMenu
          height={28}
          width={28}
          alt="Menu"
          onClick={() => setShow(true)}
        />
      )}
      {show && (
        <div className="delay-600 fixed right-0 top-0 z-20 h-full w-10/12 bg-[#8686F5] p-4 text-white sm:max-w-[40vw] xl:hidden">
          <div className="flex">
            <div className="grow"></div>
            <Icons.Close
              height={32}
              width={32}
              alt="Closed"
              onClick={() => setShow(false)}
            />
          </div>
          <div className="flex flex-col px-6">
            {sidebarData.map(({ to, submenu, name, id, type, bgColor }) =>
              submenu ? (
                <>
                  <Link
                    key={id}
                    tabIndex={-1}
                    href={'/learn'}
                    onClick={() => setDropDown(!dropDown)}
                    className={linkClass + ' flex items-center gap-3'}>
                    <span className="">{name}</span>
                    {dropDown ? (
                      <UpOutlined style={{ fontSize: '12px' }} />
                    ) : (
                      <DownOutlined style={{ fontSize: '12px' }} />
                    )}
                  </Link>
                  {dropDown && (
                    <div className="flex flex-col gap-2 p-2 px-6 py-0 transition-all delay-300">
                      {submenuItems.map(({ id, name, to }) => (
                        <Link
                          onClick={() => setShow(!show)}
                          key={id}
                          href={to}
                          className={
                            linkClass +
                            ' py-1 text-sm font-semibold text-opacity-50'
                          }>
                          {name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : type === 'button' ? (
                <Button
                  onClick={() => setShow(!show)}
                  href={to}
                  className={bgColor + ' my-4 '}>
                  {name}
                </Button>
              ) : (
                <Link
                  onClick={() => setShow(!show)}
                  key={id}
                  className={linkClass}
                  href={to}>
                  {name}
                </Link>
              ),
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default Sidebar
