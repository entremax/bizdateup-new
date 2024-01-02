'use client'
import React, { useRef } from 'react'
import { Icons } from '@/icons/icon'
import type { MenuProps } from 'antd'
import { Avatar, Badge, Button, Dropdown, Space, Tooltip } from 'antd'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
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
import { DollarOutlined } from '@ant-design/icons'

const UserMenu = ({ user }: { user?: DataInner | null }) => {
  const windowWidth = useRef(window.innerWidth)

  const dispatch = useAppDispatch()
  const role = useCookieLocal('role')
  const { token } = useAppSelector(({ authUser }) => authUser)
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
        notifyUser('success', 'Logout Successfully')
      })
      .catch((error) => {
        const errorMessage = error.data?.message
        const errorCode = error.status
        if (errorMessage && errorCode) {
          notifyUser('error', `${errorMessage} (code:${errorCode})`)
        }
      })
  }

  const onClick: MenuProps['onClick'] = async ({ key }) => {
    if (key === '1') {
      return router.push(
        `/profile/${role === 'investor' ? 'investor' : 'startup'}`,
      )
    }
    if (key === '2') {
      return router.push('/transactions')
    }
    if (key === '3') {
      return handleCreateAccelerator()
    }
    if (key === '4') {
      logoutUser()
    }
  }

  const badgeTitle = 'Notifications'

  const items = [
    {
      label: <p className={'reset px-4'}>Profile</p>,
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
      // hidden: role && role !== 'investor',
      key: '3',
      hidden: role && role === 'investor' && windowWidth?.current > 800,
      icon: <DollarOutlined />,
    },
    {
      label: (
        <p className={'reset px-4'}>{isLoading ? 'Exiting...' : 'Sign Out'}</p>
      ),
      key: '4',
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
    role === 'investor' && user && user?.membership?.isMember !== 'no'
      ? 'relative rounded-full outline outline-4 outline-yellow-500'
      : 'relative rounded-full'

  const handleCreateAccelerator = async () => {
    // console.log('creating accelerator')
    // const success = await createAccelerator()
    // console.log(success)
    if (user?.isAccelerator) {
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
        console.log(res)
        return res.json()
      })
      .catch((e) => {
        console.log(e)
        throw new Error(e)
      })
    if (res?.code !== 200) {
      return router.push('/dashboard')
    }
    if (res?.data?.code === 400) {
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
    }
  }
  return (
    <>
      {role && role === 'investor' && (
        <>
          <Button
            type={'default'}
            onClick={handleCreateAccelerator}
            className="hidden !rounded-lg !border-0 !text-primary !outline   !outline-[0.022rem] !outline-primary  md:inline-block">
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

      <div className={'flex items-center justify-center gap-2'}>
        <Dropdown
          className={'relative'}
          dropdownRender={() => (
            <UserMenuDropdown items={items} onClick={onClick} />
          )}>
          <Space>
            <div className={cn(avatarClass)}>
              {user?.profilePic === '' ? (
                <Avatar size={'large'}>
                  {`${user?.firstName.charAt(0).toUpperCase() ?? ''}
                  ${user?.lastName.charAt(0).toUpperCase() ?? ''}`}
                </Avatar>
              ) : (
                <Avatar
                  size="large"
                  src={apiUri().v0 + '/investor/profile_pic/' + user?._id}
                />
              )}
              {role &&
              role === 'investor' &&
              user &&
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

