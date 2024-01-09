'use client'
import Image from 'next/image'
import { StartupTag } from '@/components/tag'
import React from 'react'
import { apiUri, capitalizeFirstLetter } from '@/lib/utils'
import { StartupData } from '@/types/invest'

// import InvestButton from '@/components/invest/InvestButton'

export default function CompanyIntro({ startup }: { startup: StartupData }) {
  const { v1: apiV1 } = apiUri()
  return (
    <>
      <div className="border_gray mx-3 flex flex-col gap-3 rounded-xl p-4 shadow-sm md:mx-14 md:flex-col lg:mx-32">
        <div className="flex items-center justify-between gap-4 ">
          <div className="flex flex-row justify-between">
            <div className="relative h-[66px] max-h-[5rem] w-[66px] overflow-clip rounded-sm border border-gray-400">
              <Image
                src={apiV1 + '/logo/' + startup.logo}
                fill
                alt={startup.companyName}
              />
            </div>
            <div className="flex flex-col">
              <h3 className="reset text-2xl font-bold leading-normal text-primary-dark md:text-4xl   xl:py-0">
                {capitalizeFirstLetter(
                  startup.registeredCompanyName.trim().split(' '),
                )}
              </h3>
              <div>
                <StartupTag tags={startup.tags} />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="hidden !h-auto !border-none !bg-light-shadow !px-6 !py-2 font-medium !text-primary !outline-none md:inline-block">
              Resource
            </button>
            <button className="!h-auto w-full !border-none !bg-primary !px-6 !py-2 !text-white !outline-none md:w-auto">
              View Your Page
            </button>
          </div>
        </div>

        {/* <div className="my-4 flex justify-between">
          
</div> */}
      </div>
    </>
  )
}
