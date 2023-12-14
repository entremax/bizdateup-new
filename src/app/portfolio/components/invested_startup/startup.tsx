import React from 'react'
import { InvestedStartup } from '@/types/portfolio'
import Image from 'next/image'
import {
  apiUri,
  capitalizeFirstLetter,
  formatIndianValuation,
  formatNumberWithDecimal,
} from '@/lib/utils'
import { StartupTag } from '@/components/tag'

type Props = {
  details: InvestedStartup
}

const StartupDetails: React.FC<Props> = ({ details }) => {
  function numberOfShares() {
    const investedAmount = details.investedAmount || 0
    const sharePrice = parseFloat(details.portfolio.shareprice) || 0
    if (sharePrice !== 0)
      return formatNumberWithDecimal(investedAmount / sharePrice)
    else return 0
  }

  function calculateCurrentInvestment() {
    const currentValuation =
      parseFloat(details.portfolio?.currentValuation) || 0
    const investedAmount = details.investedAmount || 0
    const investedValuation = details.dealTerms?.valuation || 0

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
        'border_gray grid grid-cols-12 items-center gap-4 rounded-xl p-4'
      }>
      <div className="col-span-full flex items-center gap-4 md:col-span-4">
        <div className="border_gray relative min-h-[3rem] min-w-[3rem] max-w-[3rem]">
          <Image
            src={`${apiUri().v1}/logo/${details.logo}`}
            alt="Logo"
            layout="fill"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="flex-warp truncate text-ellipsis break-words text-xl lg:hidden">
            {capitalizeFirstLetter(
              details.registeredCompanyName.split(' '),
            ).slice(0, 2)}
            ...
          </h3>
          <h3 className="flex-warp hidden truncate text-ellipsis break-words text-xl lg:flex">
            {capitalizeFirstLetter(
              details.registeredCompanyName.split(' '),
            ).slice(0, 3)}
            ...
          </h3>
          <StartupTag tags={details.tags} />
        </div>
        <div className="col-span-full grid grid-cols-2 items-center gap-8 md:col-span-8 md:grid-cols-5">
          <div className="flex flex-col gap-2">
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
          <div className="flex flex-col gap-2">
            <p className="text-sm text-neutral-400">Invested Amount</p>
            <span className="cursor-pointer text-base font-semibold">
              {details.investedAmount}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default StartupDetails
