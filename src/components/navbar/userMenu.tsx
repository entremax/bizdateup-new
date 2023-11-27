'use client'
import React from 'react'
import { Icons } from '@/icon'
import type { MenuProps } from 'antd'
import { Avatar, Badge, Button, Dropdown, Space, Tooltip } from 'antd'
import { useAppDispatch } from '@/store/hooks'
import { cn } from '@/lib/utils'
import {
  reset as authReset,
  reset as investReset,
} from '@/reducers/user/authSlice'
import { setNotification } from '@/reducers/others/notificationSlice'
import { useLogoutMutation } from '@/store/features/services/NextApiSlice'
import { useRouter } from 'next/navigation'
import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowRightArrowLeft,
  faRightFromBracket,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import useUser from '@/context/useUser'

interface Props {
  token?: RequestCookie
}

const UserMenu: React.FC<Props> = () => {
  const dispatch = useAppDispatch()
  const user = useUser()
  const router = useRouter()
  const [logout, { isLoading }] = useLogoutMutation()

  const logoutUser = () => {
    logout('')
      .unwrap()
      .then(() => {
        dispatch(authReset())
        dispatch(investReset())
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

  const onClick: MenuProps['onClick'] = async ({ key }) => {
    if (key === '1') {
      return router.push('/profile/investor')
    }
    if (key === '2') {
      return router.push('/transactions')
    }
    if (key === '3') {
      logoutUser()
    }
  }

  const notifyUser = (type: 'success' | 'error', message: string) => {
    dispatch(setNotification({ type, message }))
  }

  const badgeTitle = 'Notifications'

  const items = [
    {
      label: <p className={'reset text-bla px-4'}>Profile</p>,
      key: '1',
      icon: <FontAwesomeIcon icon={faUser} className={'text-primary'} />,
    },
    {
      label: <p className={'reset text-bla px-4'}>Transactions</p>,
      key: '2',
      icon: <FontAwesomeIcon icon={faArrowRightArrowLeft} />,
    },
    {
      label: (
        <p className={'reset px-4'}>{isLoading ? 'Exiting...' : 'Sign Out'}</p>
      ),
      key: '2',
      icon: <FontAwesomeIcon icon={faRightFromBracket} />,
      danger: true,
    },
  ]

  const avatarClass =
    user && user?.membership?.isMember !== 'no'
      ? 'relative rounded-full outline outline-4 outline-yellow-500'
      : 'relative rounded-full'

  return (
    <>
      <Tooltip title={badgeTitle}>
        <Badge count={0}>
          <Button
            icon={<Icons.Bell />}
            shape="circle"
            className={'relative !outline-none'}
          />
        </Badge>
      </Tooltip>
      <div className={'flex items-center justify-center gap-2'}>
        <Dropdown menu={{ items, onClick }}>
          <Space>
            <div className={cn(avatarClass)}>
              <Avatar size={'large'}>U</Avatar>
              {user && user?.membership?.isMember !== 'no' ? (
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
