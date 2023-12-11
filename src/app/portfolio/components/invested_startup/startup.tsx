import React from 'react'
import { InvestedStartup } from '@/types/portfolio'
import Image from 'next/image'
import { apiUri, capitalizeFirstLetter } from '@/lib/utils'
import { StartupTag } from '@/components/tag'

type Props = {
  details: InvestedStartup
}

const StartupDetails: React.FC<Props> = ({ details }) => {
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
            <p className="text-sm text-neutral-400">Invested Amount</p>
            <span className="cursor-pointer text-base font-semibold">
              {details.investedAmount}
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <p className="truncate text-ellipsis text-sm text-neutral-400">
              Shares
            </p>
            <span className="cursor-pointer truncate text-ellipsis text-base font-semibold">
              {details.shares}
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm text-neutral-400">Last invested</p>
            <span className="cursor-pointer text-base font-semibold"></span>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-sm text-neutral-400">Status</p>
            <span className="cursor-pointer text-base font-semibold text-[#16A713]"></span>
          </div>
          <div className="flex flex-col gap-2"></div>
        </div>
      </div>
    </div>
  )
}
export default StartupDetails
