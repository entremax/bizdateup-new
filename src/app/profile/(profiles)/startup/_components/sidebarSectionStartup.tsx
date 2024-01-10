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

export default function SectionBarStartup({
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

  const baseUri = '/profile/startup'
  const sectionTabs = [
    {
      id: 1,
      name: 'Company Profile',
      segment: null,
      icon: (
        <Profile
          className={
            'stroke-black-lighter group-hover:fill-primary group-hover:stroke-primary  group-active:fill-primary'
          }
        />
      ),
      link: '/profile/startup',
    },
    {
      id: 2,
      name: 'Pitch',
      segment: 'pitch',
      icon: (
        <TicketStar
          className={'stroke-black-lighter   group-hover:stroke-primary'}
        />
      ),
      link: baseUri + '/pitch',
    },
    {
      id: 3,
      name: 'Team',
      segment: 'team',
      icon: (
        <Icons.TextFile
          className={'stroke-black-lighter   group-hover:stroke-primary'}
        />
      ),
      link: baseUri + '/team',
    },
    {
      id: 4,
      name: 'Mentors',
      segment: 'mentor',
      icon: (
        <MoreSquare
          className={'stroke-black-lighter   group-hover:stroke-primary'}
        />
      ),
      link: baseUri + '/mentor',
    },
    {
      id: 5,
      name: 'Deal Terms',
      icon: (
        <Work className={'stroke-black-lighter  group-hover:stroke-primary'} />
      ),
      segment: 'deal-terms',
      link: baseUri + '/deal-terms',
    },
    {
      id: 6,
      name: 'upload-docs',
      icon: (
        <Work className={'stroke-black-lighter  group-hover:stroke-primary'} />
      ),
      segment: 'upload-docs',
      link: baseUri + '/upload-docs',
    },
    {
      id: 7,
      name: 'Event',
      icon: (
        <Work className={'stroke-black-lighter  group-hover:stroke-primary'} />
      ),
      segment: 'events',
      link: baseUri + '/events',
    },
    {
      id: 8,
      name: 'faqs',
      icon: (
        <Work className={'stroke-black-lighter  group-hover:stroke-primary'} />
      ),
      segment: 'faqs',
      link: baseUri + '/faqs',
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
          {sectionTabs.map(({ id, name, segment, icon, link }, index) => (
            <Link
              key={name}
              href={link}
              className={cn(
                'group flex w-full items-center gap-3 rounded-xl px-3  py-2 text-gray-800 delay-100 hover:bg-[#F0F0FF] hover:text-primary active:text-black' +
                  (routeSegment === segment &&
                    'group:stroke-primary bg-[#F0F0FF] text-primary'),
              )}>
              <div className="flex h-8 w-8 items-center justify-center">
                {icon}
              </div>
              <div
                className={cn(
                  `items-left ${id === 5 && 'flex flex-col gap-2'}`,
                )}>
                <span className={'font-semibold '}>{name}</span>
              </div>
              <div className="grow"></div>

              {/*)}*/}
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
        {sectionTabs.map(({ id, name, segment, icon, link }) => (
          <React.Fragment key={link}>
            <Link
              key={link}
              href={link}
              className={cn(
                'hidden w-full items-center gap-3 py-6  text-gray-800 delay-100 hover:bg-[#F0F0FF] hover:text-primary active:text-black lg:flex' +
                  (routeSegment === segment && ' md:text-primary'),
              )}>
              <div className="flex h-8 w-8 items-center justify-center">
                {icon}
              </div>
              <div
                className={cn(
                  `items-left ${id === 5 && 'flex flex-col gap-2'}`,
                )}>
                <span className={'font-semibold '}>{name}</span>
                {id === 5 && (
                  <span
                    className={
                      'w-fit rounded-full bg-[#F3B518] px-[0.022rem] text-xs'
                    }>
                    PRIORITY
                  </span>
                )}
              </div>

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
              <div
                className={cn(
                  `items-left ${id === 5 && 'flex flex-col gap-2'}`,
                )}>
                <span className={'font-semibold '}>{name}</span>
                {id === 5 && (
                  <span
                    className={
                      'w-fit rounded-full bg-[#F3B518] px-[0.022rem] text-xs'
                    }>
                    PRIORITY
                  </span>
                )}
              </div>
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
