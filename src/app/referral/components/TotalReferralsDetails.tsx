import React from 'react'
import { store } from '@/store'
import SocialMedia from '@/components/referral/SocialMediaIcons'
import CopyWrapper from '@/components/click_to_copy'
import { Button } from 'antd'
import Copy from '@/icons/Copy'
import { getCookieData } from '@/action/user'
import { headers } from 'next/headers'

/**
 *
 * This components shows commission and referral details of investor and
 * startups.
 * @constructor
 */
export default async function TotalReferralsDetails() {
  const referer = headers().get('referer')
  const url = new URL(referer ?? 'https://bizdateup-uat.vercel.app/referral')
  const originHost = `${url.protocol}//${url.host}`
  const { referrer_id } = await getCookieData()
  const acceleratorState = store.getState().accelerator
  const { investorCommission, startupCommission, redeemable } = acceleratorState

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
          ₹ {investorCommission.confirmed + investorCommission.pending}
          <span className="text-sm font-normal text-neutral-400">
            Total amount earned
          </span>
        </p>
        <p className="flex flex-col text-lg font-semibold md:text-xl">
          ₹ {investorCommission.confirmed}
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
      <div className="flex flex-col md:flex-row md:items-center">
        <div className="flex flex-grow flex-col">
          <p className="text-semibold flex items-center gap-3 text-lg font-semibold">
            Copy or share referral link to social media
          </p>
          <div
            className={
              'flex flex-col flex-wrap gap-2 py-2 md:flex-row md:items-center md:gap-3'
            }>
            <span className={'text-sm text-neutral-500 md:text-sm'}>
              Share link on
            </span>
            <div>
              <SocialMedia
                origin={originHost ?? ''}
                referrer_id={referrer_id}
              />
            </div>
          </div>
        </div>
        <div className="flex h-full items-center justify-center">
          <CopyWrapper text={`${originHost}/in${referrer_id}`}>
            <Button
              type={'default'}
              size={'large'}
              className={
                'flex items-center justify-center gap-2 !border-primary !bg-primary !text-white caret-transparent !outline-primary'
              }>
              <Copy className={'fill-white text-white'} />{' '}
              <span>Copy referral link for Investor</span>
            </Button>
          </CopyWrapper>
        </div>
      </div>
    </div>
  )
}
