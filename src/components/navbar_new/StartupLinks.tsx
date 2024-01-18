import NavbarData from '@/components/navbar_new/data'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import { StartupData } from '@/types/invest'

type Props = {
  path: string
  linkStyle: string
  user: StartupData
  role: 'startup'
}

export default function StartupLinks({ path, linkStyle, user }: Props) {
  return (
    <>
      <div className={'grow'} />
      {NavbarData.non_public.main.map(
        (link, index) =>
          link.roles.includes('startup') && (
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
          ),
      )}
      <div className={'sm:grow'} />
    </>
  )
}
