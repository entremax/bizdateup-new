'use client'
import React, { useEffect, useState } from 'react'
import { Icons } from '@/icons/icon'
import type { MenuProps } from 'antd'
import { Avatar, Badge, Button, Dropdown, Space, Tooltip } from 'antd'
import { useAppDispatch } from '@/store/hooks'
import { apiUri, cn } from '@/lib/utils'
import {
  reset as authReset,
  reset as investReset,
} from '@/reducers/user/authSlice'
import { useLogoutMutation } from '@/services/NextApiSlice'
import { useRouter } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowRightArrowLeft,
  faRightFromBracket,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import { useFetchStartupUpdatesMutation } from '@/services/startupApiSlice'
import { setStartupUpdates } from '@/reducers/user/startupSlice'
import StartupUpdatesDropDown from '@/components/navbar_new/startup_updates'
import { notifyUser } from '@/components/notification'
import { acceleratorApis, getAcceleratorDetails } from '@/lib/accelerator'
import { setAcceleratorCookies } from '@/action/accelerator'
import { DataInner } from '@/types'
import useCookieLocal from '@/lib/useCookieLocal'
import UserMenuDropdown from '@/components/navbar_new/UserMenuDropdown'
import { DollarOutlined, EditFilled } from '@ant-design/icons'
import { StartupData } from '@/types/invest'

type Props =
  | { user: DataInner | null; role: 'investor'; local_user?: false ,token:string}
  | { user: StartupData | null; role: 'startup'; local_user?: boolean ,token:string}

const UserMenu = ({ user, role, local_user ,token}: Props) => {
  const [windowWidth, setWindowWidth] = useState(0)
  const logged_in = useCookieLocal('logged-in')
  const [creating, setCreating] = useState(false)
  const dispatch = useAppDispatch()
  const router = useRouter()
  const [logout, { isLoading }] = useLogoutMutation()
  const [fetchUpdates, { isLoading: fetching }] =
    useFetchStartupUpdatesMutation()
  
  const logoutUser = () => {
    logout('')
      .unwrap()
      .then(() => {
        dispatch(authReset())
        dispatch(investReset())
        router.push('/login')
        localStorage.removeItem('user')
        return notifyUser('success', 'Logout Successfully')
      })
      .catch((error) => {
        const errorMessage = error.data?.message
        const errorCode = error.status
        if (errorMessage && errorCode) {
          return notifyUser('error', `${errorMessage} (code:${errorCode})`)
        }
      })
  }
  
  const onClick: MenuProps['onClick'] = async ({ key }) => {
    switch (key) {
      case '1':
        return router.push(
          `/profile/${role === 'investor' ? 'investor' : 'startup'}`,
        )
      case '2':
        return router.push('/transactions')
      case '3':
        return handleCreateAccelerator()
      case '4':
        return router.push('/startup/onboarding')
      case '5':
        return logoutUser()
      default:
        return
    }
  }
  
  const badgeTitle = 'Notifications'
  
  const items = [
    {
      label: <p className={'reset px-4'}>Profile</p>,
      hidden: local_user && role === 'startup',
      key: '1',
      icon: <FontAwesomeIcon icon={faUser} className={'text-primary'} />,
    },
    {
      label: <p className={'reset px-4'}>Transactions</p>,
      hidden: role && role !== 'investor',
      key: '2',
      icon: <FontAwesomeIcon icon={faArrowRightArrowLeft} />,
    },
    {
      label: <p className={'reset px-4'}>Refer & Earn</p>,
      key: '3',
      hidden:
        (role && role === 'startup') ||
        (role === 'investor' && windowWidth > 900),
      icon: <DollarOutlined />,
    },{
      label: <p className={'reset px-4 text-primary font-semibold'}>Register</p>,
      key: '4',
      hidden:role!=='startup'||role ==='startup' && !local_user,
      icon: <EditFilled className={'stroke-primary '} />,
    },
    {
      label: (
        <p className={'reset px-4'}>{isLoading ? 'Exiting...' : 'Sign Out'}</p>
      ),
      key: '5',
      icon: <FontAwesomeIcon icon={faRightFromBracket} />,
      danger: true,
    },
  ]
  
  const handleFetchUpdates = async () => {
    fetchUpdates('')
      .unwrap()
      .then((res) => {
        if (res.data) {
          dispatch(setStartupUpdates({ updates: res.data }))
        } else {
          notifyUser('error', `Something went wrong`)
        }
      })
      .catch((error) => {
        const errorMessage = error.data?.message
        const errorCode = error.status
        if (errorMessage && errorCode) {
          notifyUser('error', `${errorMessage} (code:${errorCode})`)
        }
      })
  }
  
  const avatarClass =
    role === 'investor' &&
    user &&
    'membership' in user &&
    user?.membership?.isMember !== 'no'
      ? 'relative rounded-full outline outline-4 outline-yellow-500'
      : 'relative rounded-full'
  
  const handleCreateAccelerator = async () => {
    setCreating(true)
    if (user && 'isAccelerator' in user && user?.isAccelerator) {
      setCreating(false)
      return router.push('/referral')
    }
    
    const res = await fetch(acceleratorApis.create, {
      method: 'POST',
      body: JSON.stringify({ id: user?._id }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        return res.json()
      })
      .catch((e) => {
        setCreating(false)
        console.log(e)
        throw new Error(e)
      })
    if (res?.code !== 200) {
      setCreating(false)
      console.log('handleAccelerator', res)
      notifyUser('error', 'Something went wrong!!')
      return
    }
    if (res?.data?.code === 400) {
      setCreating(false)
      return router.push('/referral')
    }
    if (res.code === 200) {
      const accelerator = await getAcceleratorDetails(
        user?._id ?? '',
        token ?? '',
      )
      if (!accelerator) {
        return notifyUser('error', 'Something went wrong please try again.')
      }
      await setAcceleratorCookies(accelerator)
      notifyUser(
        'success',
        'Congratulations! You have now become an Accelerator.',
      )
      setCreating(false)
      return router.push('/referral')
    }
    setCreating(false)
  }
  
  useEffect(() => {
    setWindowWidth(window.innerWidth)
  }, [])
  if (!logged_in || (!user && !local_user)) {
    return null
  }
  return (
    <>
      {role && (
        <>
          {role && role === 'investor' && (
            <>
              <Button
                loading={creating}
                type={'default'}
                onClick={handleCreateAccelerator}
                className="hidden !rounded-lg !border-0 !text-primary !outline   !outline-[0.022rem] !outline-primary  lg:inline-block">
                Refer & Earn
              </Button>
              
              <Tooltip title={badgeTitle}>
                <Dropdown
                  dropdownRender={() => <StartupUpdatesDropDown />}
                  trigger={['click']}>
                  <Badge count={0}>
                    <Button
                      onClick={handleFetchUpdates}
                      icon={<Icons.Bell />}
                      shape="circle"
                      className={'relative !outline-none'}
                    />
                  </Badge>
                </Dropdown>
              </Tooltip>
            </>
          )}
        </>
      )}
      <div className={'flex items-center justify-center gap-2'}>
        <Dropdown
          className={'relative'}
          dropdownRender={() => (
            <UserMenuDropdown items={items} onClick={onClick} />
          )}>
          <Space style={{ columnGap: 0 }}>
            <div className={cn(avatarClass)}>
              {role === 'investor' ? (
                user?.profilePic === '' ? (
                  <Avatar size={'large'}>
                    {`${user?.firstName.charAt(0).toUpperCase() ?? ''}
                  ${user?.lastName.charAt(0).toUpperCase() ?? ''}`}
                  </Avatar>
                ) : (
                  user && (
                    <Avatar
                      size="large"
                      src={apiUri().v0 + '/investor/profile_pic/' + user?._id}
                    />
                  )
                )
              ) : user?.logo === '' ? (
                <Avatar size={'large'}>
                  {`${
                    user?.registeredCompanyName?.charAt(0).toUpperCase() ?? ''
                  }`}
                </Avatar>
              ) : (
                <Avatar
                  size="large"
                  src={apiUri().v0 + '/logo/' + user?.logo}
                />
              )}
              {role &&
              user &&
              role === 'investor' &&
              user?.membership?.isMember !== 'no' ? (
                <>
                  <Icons.Premium
                    className={'absolute -top-4 right-0.5 z-[999] rotate-12'}
                    height={'1.5rem'}
                    width={'1.5rem'}
                  />
                  <div
                    className={
                      'absolute -bottom-2 left-[0.2rem] rounded-full bg-primary px-2 text-xs font-semibold text-white'
                    }>
                    VIP
                  </div>
                </>
              ) : null}
            </div>
            <Icons.ArrowDown />
          </Space>
        </Dropdown>
      </div>
    </>
  )
}

export default UserMenu
