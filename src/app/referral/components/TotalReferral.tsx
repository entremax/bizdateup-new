import { store } from '@/store'
import React from 'react'
import { setRedeemable } from '@/reducers/user/accelerator'
import Redeem from '@/components/referral/Redeem'
import { cn } from '@/lib/utils'

export default function TotalReferral() {
  store.dispatch(setRedeemable())
  //getting acceleratorDetails from server's redux store
  const acceleratorState = store.getState().accelerator

  const {
    totalWithdrawals,
    accelerator,
    totalCommission,
    investorCommission,
    startupCommission,
    redeemable,
  } = acceleratorState

  const totalReferralData = [
    {
      label: 'Total Amount',
      value: totalCommission,
    },
    {
      label: 'From Investors',
      value: investorCommission.confirmed,
    },
    {
      label: 'From Startups',
      value: startupCommission.confirmed,
    },
  ]

  return (
    <div className="relative mx-3 flex flex-col gap-4 rounded-xl border-gray bg-[#FFFAEE] p-4 pb-0 shadow-sm md:mx-0">
      <div
        className={cn(
          `bg-overview_circle_2  absolute right-[-2.5rem]  top-[0.5rem] h-20 w-20 rounded-full`,
        )}></div>
      <h4 className="flex items-center gap-3 text-lg font-semibold md:text-xl">
        Total Referral
      </h4>
      <div className="flex flex-col gap-3">
        {totalReferralData.map(({ label, value }, index) => (
          <div key={index} className="flex items-center">
            <p className="flex-grow font-medium text-[#666]">{label}</p>
            <p className={'font-semibold'}>₹ {value}</p>
          </div>
        ))}
      </div>
      <div className="border_gray h-[0.022rem]" />
      <Redeem
        investorCommissionConfirmed={investorCommission.confirmed}
        startupCommissionConfirmed={startupCommission.confirmed}
        totalCommission={totalCommission}
        acceleratorId={accelerator?.accelerator_id ?? ''}
        redeemable={redeemable}
        totalWithdrawals={totalWithdrawals}
      />
    </div>
  )
}
