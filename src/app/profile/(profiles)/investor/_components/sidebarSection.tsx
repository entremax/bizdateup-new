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
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { useLogoutMutation } from '@/services/NextApiSlice'
import {
  reset as investReset,
  reset as authReset,
} from '@/reducers/user/authSlice'
import { notifyUser } from '@/components/notification'
import { useUser } from '@/hooks/useUser'
import { KYCStatus } from '@/types'

export default function SectionBar({
  children,
}: {
  children: React.ReactNode
}) {
  const searchParams = useSearchParams()
  const sm = searchParams.get('sm')
  const user = useUser()
  const { kycStatus } = useAppSelector(({ authUser }) => authUser)
  const router = useRouter()
  const dispatch = useAppDispatch()
  const routeSegment = useSelectedLayoutSegment()

  const [logout, { isLoading }] = useLogoutMutation()

  const baseUri = '/profile/investor'
  const sectionTabs = [
    {
      id: 1,
      name: 'General Information',
      segment: null,
      icon: (
        <Profile
          storkeClass={'group-hover:stroke-primary'}
          className={
            'stroke-black-lighter group-hover:fill-primary group-hover:stroke-primary  group-active:fill-primary'
          }
        />
      ),
      link: '/profile/investor',
    },
    {
      id: 2,
      name: 'KYC',
      segment: 'kyc',
      icon: (
        <TicketStar
          storkeClass={'group-hover:stroke-primary'}
          className={'stroke-black-lighter   group-hover:stroke-primary'}
        />
      ),
      link: baseUri + '/kyc',
    },
    {
      id: 3,
      name: 'Bank details',
      segment: 'bank',
      icon: (
        <Icons.TextFile
          storkeClass={'group-hover:stroke-primary'}
          className={'stroke-black-lighter   group-hover:stroke-primary'}
        />
      ),
      link: baseUri + '/bank',
    },
    {
      id: 4,
      name: 'Other details',
      segment: 'other',
      icon: (
        <MoreSquare
          storkeClass={'group-hover:stroke-primary'}
          className={'stroke-black-lighter   group-hover:stroke-primary'}
        />
      ),
      link: baseUri + '/other',
    },
    {
      id: 5,
      name: 'Investment manager',
      icon: (
        <Work
          storkeClass={'group-hover:stroke-primary'}
          className={'stroke-black-lighter  group-hover:stroke-primary'}
        />
      ),
      segment: 'investment-manager',
      link: baseUri + '/investment-manager',
    },
  ]
  const kycStatusDetails = (id: number | null) => {
    const section = sectionTabs.find((tab) => tab.id === id)

    switch (section?.id) {
      case 2:
        return (
          kycStatus &&
          !kycStatus.includes(KYCStatus.aadhar) &&
          !kycStatus.includes(KYCStatus.pan)
        )
      case 3:
        return kycStatus && !kycStatus.includes(KYCStatus.bank)
      case 4:
        return kycStatus && !kycStatus.includes(KYCStatus.other)
      case 1:
        return kycStatus && !kycStatus.includes(KYCStatus.other)
      default:
        return false
    }
  }

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
                {id === 5 && (
                  <span
                    className={
                      'w-fit rounded-full bg-[#F3B518] px-[0.022rem] text-xs'
                    }>
                    PRIORITY
                  </span>
                )}
              </div>
              <div className="grow"></div>
              {kycStatusDetails(id) && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.26694 1.45489C4.9102 1.40353 5.52087 1.15051 6.01197 0.731873C6.56664 0.259455 7.27141 0 8 0C8.72859 0 9.43336 0.259455 9.98804 0.731873C10.4791 1.15051 11.0898 1.40353 11.7331 1.45489C12.4595 1.51294 13.1415 1.82785 13.6568 2.34317C14.1721 2.85848 14.4871 3.54049 14.5451 4.26694C14.5961 4.90995 14.8491 5.52096 15.2681 6.01197C15.7405 6.56664 16 7.27141 16 8C16 8.72859 15.7405 9.43336 15.2681 9.98804C14.8495 10.4791 14.5965 11.0898 14.5451 11.7331C14.4871 12.4595 14.1721 13.1415 13.6568 13.6568C13.1415 14.1721 12.4595 14.4871 11.7331 14.5451C11.0898 14.5965 10.4791 14.8495 9.98804 15.2681C9.43336 15.7405 8.72859 16 8 16C7.27141 16 6.56664 15.7405 6.01197 15.2681C5.52087 14.8495 4.9102 14.5965 4.26694 14.5451C3.54049 14.4871 2.85848 14.1721 2.34317 13.6568C1.82785 13.1415 1.51294 12.4595 1.45489 11.7331C1.40353 11.0898 1.15051 10.4791 0.731873 9.98804C0.259455 9.43336 0 8.72859 0 8C0 7.27141 0.259455 6.56664 0.731873 6.01197C1.15051 5.52087 1.40353 4.9102 1.45489 4.26694C1.51294 3.54049 1.82785 2.85848 2.34317 2.34317C2.85848 1.82785 3.54049 1.51294 4.26694 1.45489ZM11.7071 6.70698C11.8892 6.51837 11.99 6.26577 11.9877 6.00356C11.9855 5.74136 11.8803 5.49055 11.6949 5.30513C11.5095 5.11972 11.2587 5.01455 10.9965 5.01227C10.7343 5.00999 10.4816 5.11079 10.293 5.29295L6.99998 8.58601L5.70696 7.29299C5.51835 7.11083 5.26575 7.01003 5.00355 7.01231C4.74134 7.01459 4.49053 7.11976 4.30512 7.30517C4.11971 7.49058 4.01453 7.7414 4.01226 8.0036C4.00998 8.2658 4.11077 8.51841 4.29294 8.70701L6.29297 10.707C6.4805 10.8945 6.73481 10.9998 6.99998 10.9998C7.26515 10.9998 7.51946 10.8945 7.707 10.707L11.7071 6.70698Z"
                    fill="#16A713"
                  />
                </svg>
              )}
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
              {kycStatusDetails(id) && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.26694 1.45489C4.9102 1.40353 5.52087 1.15051 6.01197 0.731873C6.56664 0.259455 7.27141 0 8 0C8.72859 0 9.43336 0.259455 9.98804 0.731873C10.4791 1.15051 11.0898 1.40353 11.7331 1.45489C12.4595 1.51294 13.1415 1.82785 13.6568 2.34317C14.1721 2.85848 14.4871 3.54049 14.5451 4.26694C14.5961 4.90995 14.8491 5.52096 15.2681 6.01197C15.7405 6.56664 16 7.27141 16 8C16 8.72859 15.7405 9.43336 15.2681 9.98804C14.8495 10.4791 14.5965 11.0898 14.5451 11.7331C14.4871 12.4595 14.1721 13.1415 13.6568 13.6568C13.1415 14.1721 12.4595 14.4871 11.7331 14.5451C11.0898 14.5965 10.4791 14.8495 9.98804 15.2681C9.43336 15.7405 8.72859 16 8 16C7.27141 16 6.56664 15.7405 6.01197 15.2681C5.52087 14.8495 4.9102 14.5965 4.26694 14.5451C3.54049 14.4871 2.85848 14.1721 2.34317 13.6568C1.82785 13.1415 1.51294 12.4595 1.45489 11.7331C1.40353 11.0898 1.15051 10.4791 0.731873 9.98804C0.259455 9.43336 0 8.72859 0 8C0 7.27141 0.259455 6.56664 0.731873 6.01197C1.15051 5.52087 1.40353 4.9102 1.45489 4.26694C1.51294 3.54049 1.82785 2.85848 2.34317 2.34317C2.85848 1.82785 3.54049 1.51294 4.26694 1.45489ZM11.7071 6.70698C11.8892 6.51837 11.99 6.26577 11.9877 6.00356C11.9855 5.74136 11.8803 5.49055 11.6949 5.30513C11.5095 5.11972 11.2587 5.01455 10.9965 5.01227C10.7343 5.00999 10.4816 5.11079 10.293 5.29295L6.99998 8.58601L5.70696 7.29299C5.51835 7.11083 5.26575 7.01003 5.00355 7.01231C4.74134 7.01459 4.49053 7.11976 4.30512 7.30517C4.11971 7.49058 4.01453 7.7414 4.01226 8.0036C4.00998 8.2658 4.11077 8.51841 4.29294 8.70701L6.29297 10.707C6.4805 10.8945 6.73481 10.9998 6.99998 10.9998C7.26515 10.9998 7.51946 10.8945 7.707 10.707L11.7071 6.70698Z"
                    fill="#16A713"
                  />
                </svg>
              )}
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
              {kycStatusDetails(id) && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.26694 1.45489C4.9102 1.40353 5.52087 1.15051 6.01197 0.731873C6.56664 0.259455 7.27141 0 8 0C8.72859 0 9.43336 0.259455 9.98804 0.731873C10.4791 1.15051 11.0898 1.40353 11.7331 1.45489C12.4595 1.51294 13.1415 1.82785 13.6568 2.34317C14.1721 2.85848 14.4871 3.54049 14.5451 4.26694C14.5961 4.90995 14.8491 5.52096 15.2681 6.01197C15.7405 6.56664 16 7.27141 16 8C16 8.72859 15.7405 9.43336 15.2681 9.98804C14.8495 10.4791 14.5965 11.0898 14.5451 11.7331C14.4871 12.4595 14.1721 13.1415 13.6568 13.6568C13.1415 14.1721 12.4595 14.4871 11.7331 14.5451C11.0898 14.5965 10.4791 14.8495 9.98804 15.2681C9.43336 15.7405 8.72859 16 8 16C7.27141 16 6.56664 15.7405 6.01197 15.2681C5.52087 14.8495 4.9102 14.5965 4.26694 14.5451C3.54049 14.4871 2.85848 14.1721 2.34317 13.6568C1.82785 13.1415 1.51294 12.4595 1.45489 11.7331C1.40353 11.0898 1.15051 10.4791 0.731873 9.98804C0.259455 9.43336 0 8.72859 0 8C0 7.27141 0.259455 6.56664 0.731873 6.01197C1.15051 5.52087 1.40353 4.9102 1.45489 4.26694C1.51294 3.54049 1.82785 2.85848 2.34317 2.34317C2.85848 1.82785 3.54049 1.51294 4.26694 1.45489ZM11.7071 6.70698C11.8892 6.51837 11.99 6.26577 11.9877 6.00356C11.9855 5.74136 11.8803 5.49055 11.6949 5.30513C11.5095 5.11972 11.2587 5.01455 10.9965 5.01227C10.7343 5.00999 10.4816 5.11079 10.293 5.29295L6.99998 8.58601L5.70696 7.29299C5.51835 7.11083 5.26575 7.01003 5.00355 7.01231C4.74134 7.01459 4.49053 7.11976 4.30512 7.30517C4.11971 7.49058 4.01453 7.7414 4.01226 8.0036C4.00998 8.2658 4.11077 8.51841 4.29294 8.70701L6.29297 10.707C6.4805 10.8945 6.73481 10.9998 6.99998 10.9998C7.26515 10.9998 7.51946 10.8945 7.707 10.707L11.7071 6.70698Z"
                    fill="#16A713"
                  />
                </svg>
              )}
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
