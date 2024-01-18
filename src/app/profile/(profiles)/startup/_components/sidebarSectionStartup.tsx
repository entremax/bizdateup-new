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
import UserGroup from '@/icons/UserGroup'
import UploadIcon from '@/icons/UploadIcon'
import EventsIcon from '@/icons/EventsIcon'
import InfoSquare from '@/icons/InfoSquare'
import AddUser from '@/icons/AddUser'
import IconWrapper from '@/components/icons/CustomAntdIcon'

export default function SectionBarStartup({
  children,
}: {
  children: React.ReactNode
}) {
  const searchParams = useSearchParams()
  const sm = searchParams?.get('sm')
  const router = useRouter()
  const dispatch = useAppDispatch()
  const routeSegment = useSelectedLayoutSegment()
  console.log(routeSegment)
  const [logout, { isLoading }] = useLogoutMutation()

  const baseUri = '/profile/startup'
  const sectionTabs = [
    {
      id: 1,
      name: 'Company Profile',
      segment: null,
      icon: Profile,
      link: '/profile/startup',
    },
    {
      id: 2,
      name: 'Pitch & Other Docs',
      segment: 'pitch',
      icon: TicketStar,
      link: baseUri + '/pitch',
    },
    {
      id: 3,
      name: 'Team',
      segment: 'team',
      icon: UserGroup,
      link: baseUri + '/team',
    },
    {
      id: 4,
      name: 'Mentors',
      segment: 'mentor',
      icon: AddUser,
      link: baseUri + '/mentor',
    },
    {
      id: 5,
      name: 'Deal Terms',
      icon: Icons.TextFile,
      segment: 'deal-terms',
      link: baseUri + '/deal-terms',
    },
    {
      id: 6,
      name: 'Upload Docs',
      icon: UploadIcon,
      segment: 'upload-docs',
      link: baseUri + '/upload-docs',
    },
    {
      id: 7,
      name: 'Event',
      icon: EventsIcon,
      segment: 'events',
      link: baseUri + '/events',
    },
    {
      id: 8,
      name: 'FAQs',
      icon: InfoSquare,
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
                'group flex w-full items-center gap-3 rounded-xl px-3  py-2 text-gray-800 delay-100 active:text-black lg:hover:bg-[#F0F0FF] lg:hover:text-primary lg:active:text-primary ' +
                  (routeSegment === segment &&
                    'lg:group:stroke-primary group-active:stroke-primary lg:bg-[#F0F0FF] lg:text-primary'),
              )}>
              <div
                className={`flex h-8 w-8 items-center justify-center ${
                  id === 5 && 'justify-self-start'
                }`}>
                <Icon
                  className={routeSegment === segment ? ' active' : ''}
                  icon={icon}
                />
              </div>
              <div
                className={cn(
                  `items-left ${id === 5 && 'flex flex-col gap-1'}`,
                )}>
                <span className={'font-semibold '}>{name}</span>
              </div>
              <div className="grow"></div>
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
                'hidden w-full items-center gap-3 py-6 !text-black-lighter delay-100 active:text-black lg:flex hover:lg:bg-[#F0F0FF] hover:lg:text-primary' +
                  (routeSegment === segment && ' lg:text-primary'),
              )}>
              <Icon className={''} icon={icon} />
              <div
                className={cn(
                  `items-left ${id === 5 && 'flex flex-col gap-1'}`,
                )}>
                <span className={'font-semibold '}>{name}</span>
                {id === 5 && (
                  <svg
                    width="64"
                    height="18"
                    viewBox="0 0 64 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <rect width="64" height="18" rx="9" fill="#F3B518" />
                    <path
                      d="M10.4319 5.86H13.5819C14.0885 5.86 14.5019 5.93333 14.8219 6.08C15.1419 6.22667 15.3885 6.41 15.5619 6.63C15.7352 6.85 15.8519 7.09 15.9119 7.35C15.9785 7.61 16.0119 7.85 16.0119 8.07C16.0119 8.29 15.9785 8.53 15.9119 8.79C15.8519 9.04333 15.7352 9.28 15.5619 9.5C15.3885 9.72 15.1419 9.90333 14.8219 10.05C14.5019 10.19 14.0885 10.26 13.5819 10.26H11.6819V13H10.4319V5.86ZM11.6819 9.24H13.5119C13.6519 9.24 13.7952 9.22 13.9419 9.18C14.0885 9.14 14.2219 9.07667 14.3419 8.99C14.4685 8.89667 14.5685 8.77667 14.6419 8.63C14.7219 8.47667 14.7619 8.28667 14.7619 8.06C14.7619 7.82667 14.7285 7.63333 14.6619 7.48C14.5952 7.32667 14.5052 7.20667 14.3919 7.12C14.2785 7.02667 14.1485 6.96333 14.0019 6.93C13.8552 6.89667 13.6985 6.88 13.5319 6.88H11.6819V9.24ZM17.1018 5.86H20.5118C21.2985 5.86 21.8885 6.03 22.2818 6.37C22.6751 6.71 22.8718 7.18333 22.8718 7.79C22.8718 8.13 22.8218 8.41333 22.7218 8.64C22.6218 8.86 22.5051 9.04 22.3718 9.18C22.2385 9.31333 22.1051 9.41 21.9718 9.47C21.8451 9.53 21.7518 9.57 21.6918 9.59V9.61C21.7985 9.62333 21.9118 9.65667 22.0318 9.71C22.1585 9.76333 22.2751 9.85 22.3818 9.97C22.4885 10.0833 22.5751 10.2333 22.6418 10.42C22.7151 10.6067 22.7518 10.84 22.7518 11.12C22.7518 11.54 22.7818 11.9233 22.8418 12.27C22.9085 12.61 23.0085 12.8533 23.1418 13H21.8018C21.7085 12.8467 21.6518 12.6767 21.6318 12.49C21.6185 12.3033 21.6118 12.1233 21.6118 11.95C21.6118 11.6233 21.5918 11.3433 21.5518 11.11C21.5118 10.87 21.4385 10.6733 21.3318 10.52C21.2251 10.36 21.0785 10.2433 20.8918 10.17C20.7118 10.0967 20.4785 10.06 20.1918 10.06H18.3518V13H17.1018V5.86ZM18.3518 9.11H20.4018C20.8018 9.11 21.1051 9.01667 21.3118 8.83C21.5185 8.63667 21.6218 8.35 21.6218 7.97C21.6218 7.74333 21.5885 7.56 21.5218 7.42C21.4551 7.27333 21.3618 7.16 21.2418 7.08C21.1285 7 20.9951 6.94667 20.8418 6.92C20.6951 6.89333 20.5418 6.88 20.3818 6.88H18.3518V9.11ZM24.1428 5.86H25.3928V13H24.1428V5.86ZM29.966 6.71C29.586 6.71 29.256 6.78667 28.976 6.94C28.7027 7.09333 28.4793 7.3 28.306 7.56C28.1327 7.81333 28.0027 8.10333 27.916 8.43C27.836 8.75667 27.796 9.09 27.796 9.43C27.796 9.77 27.836 10.1033 27.916 10.43C28.0027 10.7567 28.1327 11.05 28.306 11.31C28.4793 11.5633 28.7027 11.7667 28.976 11.92C29.256 12.0733 29.586 12.15 29.966 12.15C30.346 12.15 30.6727 12.0733 30.946 11.92C31.226 11.7667 31.4527 11.5633 31.626 11.31C31.7993 11.05 31.926 10.7567 32.006 10.43C32.0927 10.1033 32.136 9.77 32.136 9.43C32.136 9.09 32.0927 8.75667 32.006 8.43C31.926 8.10333 31.7993 7.81333 31.626 7.56C31.4527 7.3 31.226 7.09333 30.946 6.94C30.6727 6.78667 30.346 6.71 29.966 6.71ZM29.966 5.69C30.4993 5.69 30.976 5.79 31.396 5.99C31.8227 6.19 32.1827 6.46 32.476 6.8C32.7693 7.14 32.9927 7.53667 33.146 7.99C33.306 8.44333 33.386 8.92333 33.386 9.43C33.386 9.94333 33.306 10.4267 33.146 10.88C32.9927 11.3333 32.7693 11.73 32.476 12.07C32.1827 12.41 31.8227 12.68 31.396 12.88C30.976 13.0733 30.4993 13.17 29.966 13.17C29.4327 13.17 28.9527 13.0733 28.526 12.88C28.106 12.68 27.7493 12.41 27.456 12.07C27.1627 11.73 26.936 11.3333 26.776 10.88C26.6227 10.4267 26.546 9.94333 26.546 9.43C26.546 8.92333 26.6227 8.44333 26.776 7.99C26.936 7.53667 27.1627 7.14 27.456 6.8C27.7493 6.46 28.106 6.19 28.526 5.99C28.9527 5.79 29.4327 5.69 29.966 5.69ZM34.5237 5.86H37.9337C38.7203 5.86 39.3103 6.03 39.7037 6.37C40.097 6.71 40.2937 7.18333 40.2937 7.79C40.2937 8.13 40.2437 8.41333 40.1437 8.64C40.0437 8.86 39.927 9.04 39.7937 9.18C39.6603 9.31333 39.527 9.41 39.3937 9.47C39.267 9.53 39.1737 9.57 39.1137 9.59V9.61C39.2203 9.62333 39.3337 9.65667 39.4537 9.71C39.5803 9.76333 39.697 9.85 39.8037 9.97C39.9103 10.0833 39.997 10.2333 40.0637 10.42C40.137 10.6067 40.1737 10.84 40.1737 11.12C40.1737 11.54 40.2037 11.9233 40.2637 12.27C40.3303 12.61 40.4303 12.8533 40.5637 13H39.2237C39.1303 12.8467 39.0737 12.6767 39.0537 12.49C39.0403 12.3033 39.0337 12.1233 39.0337 11.95C39.0337 11.6233 39.0137 11.3433 38.9737 11.11C38.9337 10.87 38.8603 10.6733 38.7537 10.52C38.647 10.36 38.5003 10.2433 38.3137 10.17C38.1337 10.0967 37.9003 10.06 37.6137 10.06H35.7737V13H34.5237V5.86ZM35.7737 9.11H37.8237C38.2237 9.11 38.527 9.01667 38.7337 8.83C38.9403 8.63667 39.0437 8.35 39.0437 7.97C39.0437 7.74333 39.0103 7.56 38.9437 7.42C38.877 7.27333 38.7837 7.16 38.6637 7.08C38.5503 7 38.417 6.94667 38.2637 6.92C38.117 6.89333 37.9637 6.88 37.8037 6.88H35.7737V9.11ZM41.5647 5.86H42.8147V13H41.5647V5.86ZM43.6679 5.86H49.4479V6.94H47.1779V13H45.9279V6.94H43.6679V5.86ZM52.1356 10.2L49.4556 5.86H50.9056L52.7956 9.06L54.6556 5.86H56.0556L53.3856 10.2V13H52.1356V10.2Z"
                      fill="black"
                    />
                  </svg>
                )}
              </div>

              <div className="grow" />
              {/*{kycStatusDetails(id) && (*/}
              {/*  <svg*/}
              {/*    xmlns="http://www.w3.org/2000/svg"*/}
              {/*    width="16"*/}
              {/*    height="16"*/}
              {/*    viewBox="0 0 16 16"*/}
              {/*    fill="none">*/}
              {/*    <path*/}
              {/*      fillRule="evenodd"*/}
              {/*      clipRule="evenodd"*/}
              {/*      d="M4.26694 1.45489C4.9102 1.40353 5.52087 1.15051 6.01197 0.731873C6.56664 0.259455 7.27141 0 8 0C8.72859 0 9.43336 0.259455 9.98804 0.731873C10.4791 1.15051 11.0898 1.40353 11.7331 1.45489C12.4595 1.51294 13.1415 1.82785 13.6568 2.34317C14.1721 2.85848 14.4871 3.54049 14.5451 4.26694C14.5961 4.90995 14.8491 5.52096 15.2681 6.01197C15.7405 6.56664 16 7.27141 16 8C16 8.72859 15.7405 9.43336 15.2681 9.98804C14.8495 10.4791 14.5965 11.0898 14.5451 11.7331C14.4871 12.4595 14.1721 13.1415 13.6568 13.6568C13.1415 14.1721 12.4595 14.4871 11.7331 14.5451C11.0898 14.5965 10.4791 14.8495 9.98804 15.2681C9.43336 15.7405 8.72859 16 8 16C7.27141 16 6.56664 15.7405 6.01197 15.2681C5.52087 14.8495 4.9102 14.5965 4.26694 14.5451C3.54049 14.4871 2.85848 14.1721 2.34317 13.6568C1.82785 13.1415 1.51294 12.4595 1.45489 11.7331C1.40353 11.0898 1.15051 10.4791 0.731873 9.98804C0.259455 9.43336 0 8.72859 0 8C0 7.27141 0.259455 6.56664 0.731873 6.01197C1.15051 5.52087 1.40353 4.9102 1.45489 4.26694C1.51294 3.54049 1.82785 2.85848 2.34317 2.34317C2.85848 1.82785 3.54049 1.51294 4.26694 1.45489ZM11.7071 6.70698C11.8892 6.51837 11.99 6.26577 11.9877 6.00356C11.9855 5.74136 11.8803 5.49055 11.6949 5.30513C11.5095 5.11972 11.2587 5.01455 10.9965 5.01227C10.7343 5.00999 10.4816 5.11079 10.293 5.29295L6.99998 8.58601L5.70696 7.29299C5.51835 7.11083 5.26575 7.01003 5.00355 7.01231C4.74134 7.01459 4.49053 7.11976 4.30512 7.30517C4.11971 7.49058 4.01453 7.7414 4.01226 8.0036C4.00998 8.2658 4.11077 8.51841 4.29294 8.70701L6.29297 10.707C6.4805 10.8945 6.73481 10.9998 6.99998 10.9998C7.26515 10.9998 7.51946 10.8945 7.707 10.707L11.7071 6.70698Z"*/}
              {/*      fill="#16A713"*/}
              {/*    />*/}
              {/*  </svg>*/}
              {/*)}*/}
              <div className={'px-2'}>
                <Icons.ArrowRight />
              </div>
            </Link>
            <Link
              key={name}
              href={link + `?sm=y`}
              className={cn(
                'flex w-full items-center gap-3 py-6  text-gray-800 delay-100 hover:bg-[#F0F0FF] hover:text-primary active:text-black lg:hidden' +
                  (routeSegment === segment && ' lg:text-primary'),
              )}>
              <div
                className={cn(
                  `items-left ${id === 5 && 'flex flex-col gap-2'}`,
                )}>
                <span className={'font-semibold '}>{name}</span>
                {id === 5 && (
                  <p
                    className={
                      'w-fit rounded-full bg-[#F3B518] px-[0.022rem] text-[5px]'
                    }>
                    {/*PRIORITY*/}
                  </p>
                )}
              </div>
              <div className="grow" />
              {/*{kycStatusDetails(id) && (*/}
              {/*  <svg*/}
              {/*    xmlns="http://www.w3.org/2000/svg"*/}
              {/*    width="16"*/}
              {/*    height="16"*/}
              {/*    viewBox="0 0 16 16"*/}
              {/*    fill="none">*/}
              {/*    <path*/}
              {/*      fillRule="evenodd"*/}
              {/*      clipRule="evenodd"*/}
              {/*      d="M4.26694 1.45489C4.9102 1.40353 5.52087 1.15051 6.01197 0.731873C6.56664 0.259455 7.27141 0 8 0C8.72859 0 9.43336 0.259455 9.98804 0.731873C10.4791 1.15051 11.0898 1.40353 11.7331 1.45489C12.4595 1.51294 13.1415 1.82785 13.6568 2.34317C14.1721 2.85848 14.4871 3.54049 14.5451 4.26694C14.5961 4.90995 14.8491 5.52096 15.2681 6.01197C15.7405 6.56664 16 7.27141 16 8C16 8.72859 15.7405 9.43336 15.2681 9.98804C14.8495 10.4791 14.5965 11.0898 14.5451 11.7331C14.4871 12.4595 14.1721 13.1415 13.6568 13.6568C13.1415 14.1721 12.4595 14.4871 11.7331 14.5451C11.0898 14.5965 10.4791 14.8495 9.98804 15.2681C9.43336 15.7405 8.72859 16 8 16C7.27141 16 6.56664 15.7405 6.01197 15.2681C5.52087 14.8495 4.9102 14.5965 4.26694 14.5451C3.54049 14.4871 2.85848 14.1721 2.34317 13.6568C1.82785 13.1415 1.51294 12.4595 1.45489 11.7331C1.40353 11.0898 1.15051 10.4791 0.731873 9.98804C0.259455 9.43336 0 8.72859 0 8C0 7.27141 0.259455 6.56664 0.731873 6.01197C1.15051 5.52087 1.40353 4.9102 1.45489 4.26694C1.51294 3.54049 1.82785 2.85848 2.34317 2.34317C2.85848 1.82785 3.54049 1.51294 4.26694 1.45489ZM11.7071 6.70698C11.8892 6.51837 11.99 6.26577 11.9877 6.00356C11.9855 5.74136 11.8803 5.49055 11.6949 5.30513C11.5095 5.11972 11.2587 5.01455 10.9965 5.01227C10.7343 5.00999 10.4816 5.11079 10.293 5.29295L6.99998 8.58601L5.70696 7.29299C5.51835 7.11083 5.26575 7.01003 5.00355 7.01231C4.74134 7.01459 4.49053 7.11976 4.30512 7.30517C4.11971 7.49058 4.01453 7.7414 4.01226 8.0036C4.00998 8.2658 4.11077 8.51841 4.29294 8.70701L6.29297 10.707C6.4805 10.8945 6.73481 10.9998 6.99998 10.9998C7.26515 10.9998 7.51946 10.8945 7.707 10.707L11.7071 6.70698Z"*/}
              {/*      fill="#16A713"*/}
              {/*    />*/}
              {/*  </svg>*/}
              {/*)}*/}
              <div className={'px-2'}>
                <Icons.ArrowRight />
              </div>
            </Link>
          </React.Fragment>
        ))}
      </div>
      <div className={`my-8 lg:hidden ${sm === 'y' ? 'hidden' : ''}`}>
        <Button loading={isLoading} onClick={logoutUser} type={'text'} danger>
          Sign Out
        </Button>
      </div>
    </>
  )
}

function Icon({ className, icon }: { className: string; icon: any }) {
  return (
    <div className={'group flex h-8 w-8 items-center justify-center'}>
      <IconWrapper
        component={icon}
        className={
          'group:fill-white  stroke-black-lighter group-hover:stroke-primary ' +
          className
        }
      />
    </div>
  )
}
