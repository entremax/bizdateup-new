import Link from 'next/link'
import React from 'react'

export default function OfflineKyc() {
  return (
    <div className="grid grid-cols-1 gap-8 border-0 border-t-[0.022rem] border-solid border-gray-300 px-8 py-4 xl:grid-cols-2">
      <div className="flex flex-col gap-4 py-4">
        <h4 className="flex flex-col text-lg font-bold text-primary-dark">
          Complete via Offline KYC
          <span className="text-sm font-medium text-[#828F99]">
            Maximum 1 working day for verification
          </span>
        </h4>
        <Link
          href={'/contact-us'}
          className={
            '!primary_link !bg-light-shadow text-sm font-semibold !text-primary'
          }>
          Complete Offline KYC
        </Link>
      </div>
    </div>
  )
}
