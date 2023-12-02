import React from 'react'
import capitalize from 'antd/lib/_util/capitalize'
import CopyWrapper from '@/components/click_to_copy'
import { Button } from 'antd'
import Copy from '@/icons/Copy'
import getUserDetails from '@/action/user'
import { getInviteeDetails } from '@/action/accelerator'
import { store } from '@/store'
import { setAccelerator } from '@/reducers/user/accelerator'
import TotalReferral from '@/components/referral/TotalReferral'

const ReferralPage: React.FC = async () => {
  const { user } = await getUserDetails()
  const accelerator = await getInviteeDetails()
  store.dispatch(setAccelerator(accelerator))
  const acceleratorState = store.getState().accelerator
  const { investorCommission, startupCommission, redeemable } = acceleratorState

  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-col px-3 md:px-14 lg:px-32">
        <h3 className="reset flex items-center gap-4 text-lg font-bold text-[rgba(32,32,84,0.62)] md:text-2xl">
          Hello {capitalize(user?.firstName || 'User')},
        </h3>
        <h2 className="reset text-xl font-bold text-primary-dark sm:inline sm:text-3xl xl:text-4xl">
          Check out your referral progress
        </h2>
      </div>
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
      <div className="mx-3 grid gap-4 md:mx-14 md:grid-cols-2 lg:mx-32">
        <div className="border_gray   flex flex-col gap-4 rounded-xl p-4">
          <h4 className="text-semibold flex items-center gap-3 text-lg md:text-xl">
            For Startups Referral{' '}
            <span
              className={
                'hidden text-sm font-medium  text-gray-500 md:inline-block'
              }>
              10% Commission
            </span>
          </h4>
          <div className="grid grid-cols-2 gap-3">
            <p className="flex flex-col text-lg font-semibold md:text-xl">
              ₹ {startupCommission.confirmed + startupCommission.pending}
              <span className="text-sm font-normal text-neutral-400">
                Total amount earned
              </span>
            </p>
            <p className="flex flex-col text-lg font-semibold md:text-xl">
              ₹ {startupCommission.confirmed}
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
          <div className="flex flex-col">
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
            <div className="w-full">
              <CopyWrapper text={'Copy'}>
                <Button
                  type={'default'}
                  size={'large'}
                  className={
                    'flex items-center !text-primary caret-transparent !outline-primary'
                  }
                  block
                  icon={<Copy className={'fill-white text-white'} />}>
                  Copy referral link for Investor
                </Button>
              </CopyWrapper>
            </div>
          </div>
        </div>

        <TotalReferral />
      </div>
    </section>
  )
}

export default ReferralPage
