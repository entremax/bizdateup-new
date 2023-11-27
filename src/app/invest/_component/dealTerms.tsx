import { StartupData } from '@/app/invest/_type'
import { Icons } from '@/icon'
import { Divider } from 'antd'
import { cn, formatIndianValuation } from '@/lib/utils'
import React from 'react'

export default function DealTerms({
  startup,
  className = '',
}: {
  startup: StartupData
  className?: string
}) {
  return (
    <div
      className={cn(
        'border_gray rounded-xl px-4 py-4 shadow lg:px-7 lg:py-5 ' + className,
      )}>
      <h4 className="reset flex-grow text-xl font-bold lg:text-2xl">
        Deal Terms
      </h4>
      <div className="grid divide-y">
        <div className="flex flex-col gap-1 pt-2">
          <div className="flex items-start">
            <div className={'grow'}>
              <p className={'reset text-gray-40 text-sm lg:text-base '}>Type</p>
              <p className={'reset  text-xl font-medium leading-normal'}>
                {startup.dealTerms.typeOfSecurity}
              </p>
            </div>
            <Icons.Info />
          </div>
          <p className={'reset text-sm font-medium text-gray-400'}>
            The maximum valuation at which your investment converts into equity
            shares or cash.
          </p>
        </div>
        <Divider />
        <div className="flex items-start ">
          <div className={'grow'}>
            <p className={'reset text-gray-40 text-sm lg:text-base '}>
              Revenue
            </p>
            <p className={'reset  text-xl font-medium leading-normal'}>
              {' '}
              ₹ {formatIndianValuation(startup.revenue)}
            </p>
          </div>
          <Icons.Info />
        </div>
        <Divider />
        <div className="flex items-start ">
          <div className={'grow'}>
            <p className={'reset text-gray-40 text-sm lg:text-base '}>
              Minimum Investment
            </p>
            <p className={'reset  text-xl font-medium leading-normal'}>
              {' '}
              ₹ {formatIndianValuation(startup.dealTerms.minimumInvestment)}
            </p>
          </div>
          <Icons.Info />
        </div>
        <Divider />
        <div className="flex items-start ">
          <div className={'grow'}>
            <p className={'reset text-gray-40 text-sm lg:text-base '}>
              Total Raised
            </p>
            <p className={'reset  text-xl font-medium leading-normal'}>
              {' '}
              ₹ {formatIndianValuation(startup.totalRaised)}
            </p>
          </div>
          <Icons.Info />
        </div>
        <Divider />
        <div className="flex items-start ">
          <div className={'grow'}>
            <p className={'reset text-gray-40 text-sm lg:text-base '}>Target</p>
            <p className={'reset  text-xl font-medium leading-normal'}>
              {' '}
              ₹ {formatIndianValuation(startup.dealTerms.targetAmount)}
            </p>
          </div>
          <Icons.Info />
        </div>
        <Divider />
        <div className="flex items-start pb-2">
          <div className={'grow'}>
            <p className={'reset text-gray-40 text-sm lg:text-base '}>
              Valuation
            </p>
            <p className={'reset  text-xl font-medium leading-normal'}>
              {' '}
              ₹ {formatIndianValuation(startup.dealTerms.valuation)}
            </p>
          </div>
          <Icons.Info />
        </div>
      </div>
    </div>
  )
}
