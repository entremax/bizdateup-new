import React from 'react'

export default function TotalReferralLoading() {
  return (
    <div className="border_gray  mx-3 flex flex-col gap-4 rounded-xl p-4 md:mx-14 lg:mx-32">
      <h4 className="text-semibold flex items-center gap-3 text-lg md:text-xl">
        <span className="h-2 w-2/3 bg-gray-300" />
        <span className={'hidden h-3 w-4 md:inline-block'} />
      </h4>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-0">
        <p className="flex flex-col bg-gray-300 text-lg font-semibold md:text-xl"></p>
        <p className="flex flex-col text-lg font-semibold md:text-xl">
          <span className="bg-gray-300 text-sm font-normal text-neutral-400"></span>
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
          <p className="text-semibold flex h-2 items-center gap-3 bg-gray-300 text-lg font-semibold"></p>
          <div
            className={
              'flex flex-col flex-wrap gap-2 py-2 md:flex-row md:items-center md:gap-3'
            }>
            <span
              className={
                'h-2 bg-gray-300 text-sm text-neutral-500 md:text-sm'
              }></span>
            <div className={'bg-gray-300'} />
          </div>
        </div>
        <div className="flex h-full items-center justify-center">
          <span className="h-3 w-2/4 bg-gray-300"></span>
        </div>
      </div>
    </div>
  )
}
