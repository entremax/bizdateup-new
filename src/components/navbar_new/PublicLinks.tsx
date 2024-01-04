import NavbarData from '@/components/navbar_new/data'
import { Dropdown } from 'antd'
import LearnDropDown from '@/components/navbar_new/LearnDropDown'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { DownOutlined } from '@ant-design/icons'
import React from 'react'

type Props = {
  path: string
  linkStyle: string
}

export default function PublicLinks({ path, linkStyle }: Props) {
  return (
    <>
      {NavbarData.public.main.map((link, index) => (
        <div key={link.name + index} className="group hidden h-full md:inline">
          {link.name === 'Learn' ? (
            <Dropdown
              dropdownRender={() => <LearnDropDown />}
              trigger={['click', 'hover']}>
              <Link
                href={''}
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
              <span className="">{link.name}</span>
            </Link>
          )}
        </div>
      ))}
      <div className={'grow'} />
      <div className="hidden h-full items-center justify-center gap-2 md:flex">
        <Link
          href={'/login'}
          className="cursor-pointer rounded-lg border-0 bg-light-shadow p-[0.625rem_1.25rem] text-primary outline-none">
          Login
        </Link>
        <Link
          href={'/signup'}
          className="text-md cursor-pointer rounded-lg border-0 !bg-primary p-[0.625rem_1.25rem] text-center text-white outline-none">
          Get Started
        </Link>
      </div>
    </>
  )
}
