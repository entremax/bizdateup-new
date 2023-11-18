'use client'
import React from 'react'
import { Icons } from '@/icons'
import { Avatar, Badge, Button, Dropdown, Space, Tooltip } from 'antd'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { cn } from '@/lib/utils'
import { MenuProps } from 'antd/lib'
import {
  reset as authReset,
  reset as investReset,
} from '@/reducers/user/authSlice'
import { setNotification } from '@/reducers/others/notificationSlice'
import { useLogoutMutation } from '@/store/features/services/NextApiSlice'
import { useRouter } from 'next/navigation'
import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies'

const UserMenu = ({ token }: { token: RequestCookie | undefined }) => {
  const { user } = useAppSelector(({ authUser }) => authUser)
  const dispatch = useAppDispatch()
  const router = useRouter()
  const [logout, { isLoading }] = useLogoutMutation()

  const onClick: MenuProps['onClick'] = async ({ key }) => {
    logout('')
      .unwrap()
      .then(() => {
        dispatch(authReset())
        dispatch(investReset())
        dispatch(
          setNotification({
            type: 'success',
            message: 'Logout Successfully',
          }),
        )
        router.push('/login')
      })
      .catch((error) => {
        const errorMessage = error.data?.message
        const errorCode = error.status
        if (errorMessage && errorCode) {
          dispatch(
            setNotification({
              type: 'error',
              message: `${errorMessage} (code:${errorCode})`,
            }),
          )
        }
      })
  }

  const items: MenuProps['items'] = [
    {
      label: (
        <p className={'reset px-4 text-red-500'}>
          {isLoading ? 'Exiting...' : 'Sign Out'}
        </p>
      ),
      key: '1',
    },
  ]

  return (
    <>
      <Tooltip title={'Notifications'}>
        <Badge
          count={0}
          // showZero
        >
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
            <div
              className={cn(
                user && user?.membership?.isMember !== 'no'
                  ? 'relative rounded-full outline outline-4 outline-yellow-500'
                  : 'relative rounded-full',
              )}>
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
