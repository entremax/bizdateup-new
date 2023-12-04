'use client'
import React from 'react'
import { Icons } from '@/icons/icon'
import { useAppSelector } from '@/store/hooks'
import capitalize from 'antd/lib/_util/capitalize'

const Greet = () => {
  const { user, kycCompletionPercentage, kycStatus } = useAppSelector(
    ({ authUser }) => authUser,
  )
  return (
    <>
      <h3 className="reset flex items-center gap-4 text-lg font-bold text-[rgba(32,32,84,0.62)] md:text-2xl">
        Hello {capitalize(user?.firstName || 'User')},
        {user && kycStatus && kycCompletionPercentage === 100 && (
          <div
            className={
              'flex items-center justify-center gap-1 rounded-full bg-lemon-lighter p-1 text-lemon shadow'
            }>
            <Icons.FilledCheck />{' '}
            <span className={'reset text-xs font-normal text-lemon'}>
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
