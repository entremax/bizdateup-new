'use client'
import React, { useState } from 'react'
import { InvestedStartup } from '@/types/portfolio'
import Image from 'next/image'
import {
  apiUri,
  capitalizeFirstLetter,
  formatCustomDate,
  formatIndianValuation,
  formatNumberWithDecimal,
} from '@/lib/utils'
import { StartupTag } from '@/components/tag'
import { Button } from 'antd'
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons'
import AccreditationData from '@/components/portfolio/invested_startup/AccreditationData'

type Props = {
  details: InvestedStartup
}

const StartupDetails: React.FC<Props> = ({ details }) => {
  
  const [show, setShow] = useState(false)
  function numberOfShares() {
    const investedAmount = details?.investedAmount || 0
    const sharePrice = parseFloat(details?.portfolio?.shareprice) || 0
    if (sharePrice !== 0)
      return formatNumberWithDecimal(investedAmount / sharePrice)
    else return 0
  }

  function calculateCurrentInvestment() {
    const currentValuation =
      parseFloat(details?.portfolio?.currentValuation) || 0
    const investedAmount = details?.investedAmount || 0
    const investedValuation = details?.dealTerms?.valuation || 0

    return formatNumberWithDecimal(
      (currentValuation * investedAmount) / investedValuation,
    )
  }

  function increasedValuation() {
    const current = parseFloat(details.portfolio.currentValuation)
    const invested = details.dealTerms.valuation

    return formatNumberWithDecimal(100 * (current / invested) - 100)
  }

  return (
    <div
      className={
        'border_gray grid grid-cols-12 items-center gap-4 rounded-xl p-4 shadow'
      }>
      <div className="col-span-full flex flex-wrap items-center gap-4 md:flex-nowrap">
        <div className="border_gray relative min-h-[3rem] min-w-[3rem] max-w-[3rem]">
          <Image
            src={`${apiUri().v1}/logo/${details.logo}`}
            alt="Logo"
            layout="fill"
          />
        </div>
        <div className="flex min-w-[14rem] flex-col gap-2 lg:min-w-[28rem]">
          <h3 className="flex-warp truncate text-ellipsis break-words text-xl lg:hidden">
            {capitalizeFirstLetter(details.registeredCompanyName.split(' '))}
            ...
          </h3>
          <h3 className="flex-warp hidden truncate text-ellipsis break-words text-xl lg:flex">
            {capitalizeFirstLetter(details.registeredCompanyName.split(' '))}
            ...
          </h3>
          <StartupTag tags={details.tags} />
        </div>
        <div className="col-span-full grid w-full min-w-[10rem] grid-cols-2 items-center justify-around gap-8 md:col-span-8 md:flex">
          <div className="flex flex-col items-start gap-2">
            <p className="text-sm text-neutral-400">Current Value</p>
            <span className="cursor-pointer text-base font-semibold">
              {details?.portfolio?.currentValuation
                ? `₹
                              ${formatIndianValuation(
                                details?.portfolio?.currentValuation,
                              )}`
                : '-'}{' '}
            </span>
          </div>
          <div className="flex flex-col items-start gap-2">
            <p className="text-sm text-neutral-400">Invested Amount</p>
            <span className="cursor-pointer text-base font-semibold">
              {details.investedAmount}
            </span>
          </div>
          <div className="flex flex-col items-start gap-2">
            <p className="text-sm text-neutral-400">Shares</p>
            <span className="cursor-pointer text-base font-semibold">
              {numberOfShares()}
            </span>
          </div>
          <div className="flex flex-col items-start gap-2">
            <p className="text-sm text-neutral-400">Last Invested</p>
            <span className="cursor-pointer text-base font-semibold">
              {formatCustomDate(details.investedDate)}
            </span>
          </div>
          <div className=" col-span-full flex items-center justify-center">
            <Button
              icon={show ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
              onClick={() => setShow(!show)}
            />
          </div>
        </div>
      </div>
      <AccreditationData details={details} show={show} />
    </div>
  )
}
export default StartupDetails
