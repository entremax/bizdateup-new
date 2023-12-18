'use client'
import React from 'react'
import TicketStar from '@/components/icons/TicketStar'
import Profile from '@/components/icons/Profile'
import { Icons } from '@/components/icons/icon'
import MoreSquare from '@/components/icons/MoreSquare'
import Work from '@/components/icons/Work'
import Link from 'next/link'
import {
  useRouter,
  useSearchParams,
  useSelectedLayoutSegment,
} from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from 'antd'
import { useAppDispatch } from '@/store/hooks'
import { useLogoutMutation } from '@/services/NextApiSlice'
import {
  reset as investReset,
  reset as authReset,
} from '@/reducers/user/authSlice'
import { notifyUser } from '@/components/notification'

export default function SectionBar({
  children,
}: {
  children: React.ReactNode
}) {
  const searchParams = useSearchParams()
  const sm = searchParams.get('sm')
  const router = useRouter()
  const dispatch = useAppDispatch()
  const routeSegment = useSelectedLayoutSegment()
  const [logout, { isLoading }] = useLogoutMutation()

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
  const logoutUser = () => {
    logout('')
      .unwrap()
      .then(() => {
        dispatch(authReset())
        dispatch(investReset())
        localStorage.removeItem('user')
        notifyUser('success', 'Logout Successfully')
        router.push('/login')
      })
      .catch((error) => {
        const errorMessage = error.data?.message
        const errorCode = error.status
        if (errorMessage && errorCode) {
          notifyUser('error', `${errorMessage} (code:${errorCode})`)
        }
      })
  }
  return (
    <>
      {/*Desktop*/}
      <div className="border_gray col-span-3 hidden flex-col rounded-l-3xl p-3 lg:flex">
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
      {/*Mobile*/}
      <div
        className={cn(`col-span-full lg:hidden ${sm === 'y' ? 'hidden' : ''}`)}>
        {children}
      </div>
      <div
        className={`border_gray col-span-full flex flex-col px-2 lg:hidden ${
          sm === 'y' ? 'hidden' : ''
        }`}>
        {sectionTabs.map(({ name, segment, icon, link }) => (
          <React.Fragment key={'link'}>
            <Link
              key={name}
              href={link}
              className={cn(
                'hidden w-full items-center gap-3 py-6  text-gray-800 delay-100 hover:bg-[#F0F0FF] hover:text-primary active:text-black lg:flex' +
                  (routeSegment === segment && ' text-primary'),
              )}>
              <div className="flex h-8 w-8 items-center justify-center">
                {icon}
              </div>
              <span className={'font-semibold'}>{name}</span>
              <div className="grow" />
              <div className={'px-2'}>
                <Icons.ArrowRight />
              </div>
            </Link>
            <Link
              key={name}
              href={link + `?sm=y`}
              className={cn(
                'flex w-full items-center gap-3 py-6  text-gray-800 delay-100 hover:bg-[#F0F0FF] hover:text-primary active:text-black lg:hidden' +
                  (routeSegment === segment && ' text-primary'),
              )}>
              <div className="flex h-8 w-8 items-center justify-center">
                {icon}
              </div>
              <span className={'font-semibold'}>{name}</span>
              <div className="grow" />
              <div className={'px-2'}>
                <Icons.ArrowRight />
              </div>
            </Link>
          </React.Fragment>
        ))}
      </div>
      <div className={`my-8 lg:hidden ${sm === 'y' ? 'hidden' : ''}`}>
        <Button onClick={logoutUser} type={'text'} danger>
          Sign Out
        </Button>
      </div>
    </>
  )
}
