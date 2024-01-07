"use client"
import Image from 'next/image'
import { StartupTag } from '@/components/tag'
import React from 'react'
import {
  apiUri,
  calculatePercentage,
  capitalizeFirstLetter,
  formatIndianValuation,
} from '@/lib/utils'
import { StartupData } from '@/types/invest'
import { Divider, Progress } from 'antd'
import { Icons } from '@/icons/icon'

// import InvestButton from '@/components/invest/InvestButton'

export default function CompanyTarget({ startup }: { startup: StartupData }) {
  const { v1: apiV1 } = apiUri()

  console.log(startup.dealTerms.targetAmount)
  console.log(startup.totalRaised)
  console.log(calculatePercentage(
    startup.totalRaised,
    startup.dealTerms.targetAmount,
  ))

  return (
    <>
      <div className="border_gray mx-3 flex flex-col gap-3 rounded-xl p-4 shadow-sm md:mx-14 md:flex-col lg:mx-32">
         <div className='flex flex-row justify-between'>
         <div className="flex flex-col justify-between text-lg text-black-400 font-bold">
              {/* <span>0</span>{' '} */}
              <span>₹ {formatIndianValuation(startup.dealTerms?.targetAmount)}</span>
              <span className="text-sm text-grey-300 font-light">Raised Amount</span>
            </div>
          <div className="flex flex-col justify-between text-lg text-black-400 font-bold">
              <span>₹ {formatIndianValuation(startup.totalRaised)}</span>
              <span className="text-sm text-grey-300 font-light">Target Amount</span>
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
