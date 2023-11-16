'use client'
import React from 'react'
import { Icons } from '@/icons'
import { useAppSelector } from '@/store/hooks'
import capitalize from 'antd/lib/_util/capitalize'

const Greet = () => {
  const { user, kycCompletionPercentage, kycStatus } = useAppSelector(
    ({ authUser }) => authUser,
  )
  return (
    <>
      <h3 className="text-lg flex items-center gap-4 md:text-2xl font-bold text-[rgba(32,32,84,0.62)] reset">
        Hello {capitalize(user?.firstName || 'User')},
        {user && kycStatus && kycCompletionPercentage === 100 && (
          <div
            className={
              'bg-lemon-lighter p-1 flex justify-center items-center rounded-full shadow text-lemon'
            }
          >
            <Icons.FilledCheck />{' '}
            <span className={'text-xs reset font-normal text-lemon'}>
              {' '}
              KYC Verified
            </span>
          </div>
        )}
      </h3>
    </>
  )
}

export default Greet
