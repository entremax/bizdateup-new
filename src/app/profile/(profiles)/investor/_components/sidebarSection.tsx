'use client'
import TicketStar from '@/icons/TicketStar'
import Profile from '@/icons/Profile'
import { Icons } from '@/icon'
import MoreSquare from '@/icons/MoreSquare'
import Work from '@/icons/Work'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import { cn } from '@/lib/utils'

export default function SectionBar() {
  const routeSegment = useSelectedLayoutSegment()

  const baseUri = '/profile/investor'
  const sectionTabs = [
    {
      name: 'General Information',
      segment: null,
      icon: <Profile />,
      link: '/profile/investor',
    },
    {
      name: 'KYC',
      segment: 'kyc',
      icon: <TicketStar />,
      link: baseUri + '/kyc',
    },
    {
      name: 'Bank details',
      segment: 'bank',
      icon: <Icons.TextFile />,
      link: baseUri + '/bank',
    },
    {
      name: 'Other details',
      segment: 'other',
      icon: <MoreSquare />,
      link: baseUri + '/other',
    },
    {
      name: 'Investment manager',
      icon: <Work />,
      segment: 'investment-manager',
      link: baseUri + '/investment-manager',
    },
  ]
  return (
    <>
      <div className="border_gray col-span-3 flex flex-col rounded-l-3xl p-3">
        <h5 className="reset text-md px-1 py-1 font-semibold text-neutral-400">
          SECTION
        </h5>
        <div className="flex flex-col items-center gap-2 p-3">
          {sectionTabs.map(({ name, segment, icon, link }, index) => (
            <Link
              key={name}
              href={link}
              className={cn(
                'flex w-full items-center gap-3 rounded-xl px-3  py-2 text-gray-800 delay-100 hover:bg-[#F0F0FF] hover:text-primary active:text-black' +
                  (routeSegment === segment && ' bg-[#F0F0FF] text-primary'),
              )}>
              <div className="flex h-8 w-8 items-center justify-center">
                {icon}
              </div>
              <span className={'font-semibold'}>{name}</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
