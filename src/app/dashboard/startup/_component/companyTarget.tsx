'use client'
import React from 'react'
import { apiUri, calculatePercentage, formatIndianValuation } from '@/lib/utils'
import { StartupData } from '@/types/invest'
import { Progress } from 'antd'

// import InvestButton from '@/components/invest/InvestButton'

export default function CompanyTarget({ startup }: { startup: StartupData }) {
  const { v1: apiV1 } = apiUri()

  console.log(startup.dealTerms.targetAmount)
  console.log(startup.totalRaised)
  console.log(
    calculatePercentage(startup.totalRaised, startup.dealTerms.targetAmount),
  )

  return (
    <>
      <div className="border_gray mx-3 flex flex-col gap-3 rounded-xl p-4 shadow-sm md:mx-14 md:flex-col lg:mx-32">
        <div className="flex flex-row justify-between">
          {' '}
          <div className="text-black-400 flex flex-col justify-between text-lg font-bold">
            {/* <span>0</span>{' '} */}
            <span>
              ₹ {formatIndianValuation(startup.dealTerms?.targetAmount)}
            </span>
            <span className="text-grey-300 text-sm font-light">
              Raised Amount
            </span>
          </div>
          <div className="text-black-400 flex flex-col justify-between text-lg font-bold">
            <span>₹ {formatIndianValuation(startup.totalRaised)}</span>
            <span className="text-grey-300 text-sm font-light">
              Target Amount
            </span>
          </div>
        </div>
        <div className="grid gap-0">
          <Progress
            showInfo={false}
            className={'m-0 p-0'}
            success={{
              percent: calculatePercentage(
                startup.totalRaised,
                startup.dealTerms.targetAmount,
              ),
            }}
          />
        </div>
      </div>
    </>
  )
}
