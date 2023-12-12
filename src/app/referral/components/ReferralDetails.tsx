import React from 'react'
import CopyWrapper from '@/components/click_to_copy'
import { Button } from 'antd'
import Copy from '@/components/icons/Copy'

type InvestorReferral = {
  type: 'investor'
  commission: number | string
}

type StartupReferral = {
  type: 'startup'
  commission: number | string
}

type Props = InvestorReferral | StartupReferral

const ReferralDetails: React.FC<Props> = () => {
  return (
    <div className="border_gray  mx-3 flex flex-col gap-4 rounded-xl p-4 md:mx-14 lg:mx-32">
      <h4 className="text-semibold flex items-center gap-3 text-lg md:text-xl">
        For Investors Referral{' '}
        <span
          className={
            'hidden text-sm font-medium  text-gray-500 md:inline-block'
          }>
          10% Commission
        </span>
      </h4>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-0">
        <p className="flex flex-col text-lg font-semibold md:text-xl">
          ₹ 100,0000
          <span className="text-sm font-normal text-neutral-400">
            Total amount earned
          </span>
        </p>
        <p className="flex flex-col text-lg font-semibold md:text-xl">
          ₹ 50,000
          <span className="text-sm font-normal text-neutral-400">
            Redeemable amount
          </span>
        </p>
        <p className="flex flex-col text-lg font-semibold md:text-xl">
          12
          <span className="text-sm font-normal text-neutral-400">
            Successful Referrals
          </span>
        </p>
        <p className="flex flex-col text-lg font-semibold md:text-xl">
          20
          <span className="text-sm font-normal text-neutral-400">
            Pending Referrals
          </span>
        </p>
        <p className="flex flex-col text-lg font-semibold md:hidden md:text-xl">
          10%
          <span className="text-sm font-normal text-neutral-400">
            Commission
          </span>
        </p>
      </div>
      <div className="border_gray h-[0.022rem]" />
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-grow flex-col">
          <p className="text-semibold flex items-center gap-3 text-lg font-semibold">
            Copy or share referral link to social media
          </p>
          <div className={'flex items-center gap-3 py-2'}>
            <span className={'text-xs text-neutral-500 md:text-sm'}>
              Share link on
            </span>
            <div></div>
          </div>
        </div>
        <CopyWrapper text={'Copy'}>
          <Button
            type={'default'}
            size={'large'}
            className={
              'flex items-center !bg-primary !text-white caret-transparent'
            }
            icon={<Copy className={'fill-white text-white'} />}>
            Copy referral link for Investor
          </Button>
        </CopyWrapper>
      </div>
    </div>
  )
}
export default ReferralDetails
