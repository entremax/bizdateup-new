import NavbarData from './data'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import { DataInner } from '@/types'

type Props = {
  path: string
  linkStyle: string
  user: DataInner
  role: 'investor'
}

export default function InvestorLinks({ path, linkStyle, user }: Props) {
  return (
    <>
      {(user.isAccelerator
        ? [...NavbarData.non_public.main, NavbarData.accelerator]
        : NavbarData.non_public.main
      ).map((link, index) => (
        <Link
          key={link.name}
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
      ))}
    </>
  )
}
