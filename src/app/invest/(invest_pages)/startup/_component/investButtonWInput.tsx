'use client'
import { Input } from 'antd'
import { formatIndianValuation } from '@/lib/utils'

import React from 'react'
import { StartupData } from '@/types/invest'
import InvestButton from '@/components/invest/InvestButton'
import { useAppDispatch } from '@/store/hooks'
import { setAmountToInvest } from '@/reducers/user/investorSlice'

const InvestButtonWInput = ({ startupData }: { startupData: StartupData }) => {
  const dispatch = useAppDispatch()
  return (
    <div className="hidden rounded-xl !bg-light-shadow px-4 py-4 shadow lg:inline lg:px-7 lg:py-5">
      <h4 className="reset flex-grow text-2xl font-bold">Made up your mind?</h4>
      <div className="grid w-full grid-cols-2 gap-4 py-2">
        <Input
          size={'large'}
          type={'text'}
          onChange={(e) =>
            dispatch(setAmountToInvest(parseInt(e.target.value)))
          }
          placeholder={`₹ ${formatIndianValuation(
            startupData.dealTerms.minimumInvestment,
          )} min`}
          className={' !py-2 text-lg font-medium placeholder-gray-300'}
        />
        <InvestButton startup={startupData} sticky inourt />
      </div>
    </div>
  )
}
export default InvestButtonWInput
