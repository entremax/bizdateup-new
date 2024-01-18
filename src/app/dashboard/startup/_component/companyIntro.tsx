'use client'
import Image from 'next/image'
import { StartupTag } from '@/components/tag'
import React from 'react'
import { apiUri, capitalizeFirstLetter } from '@/lib/utils'
import { StartupData } from '@/types/invest'
import Button from '@/components/LinkButton'

// import InvestButton from '@/components/invest/InvestButton'

export default function CompanyIntro({ startup }: { startup: StartupData }) {
  const { v1: apiV1 } = apiUri()
  return (
    <>
      <div className=" mx-3 flex flex-col gap-3 rounded-xl pt-4 shadow-sm md:mx-14  md:flex-col md:border-0 md:shadow-none lg:mx-32">
        <div className="flex items-center gap-4 ">
          <div className="flex flex-row md:gap-2">
            <div className="relative h-[66px] max-h-[5rem] w-[66px] overflow-clip rounded-sm border border-gray-400">
              <Image
                src={apiV1 + '/logo/' + startup.logo}
                fill
                alt={startup.companyName}
              />
            </div>
            <div className="flex flex-col">
              <h3 className="reset text-2xl font-bold leading-normal text-primary-dark md:text-3xl xl:py-0">
                {capitalizeFirstLetter(
                  startup.registeredCompanyName.trim().split(' '),
                )}
              </h3>
              <div>
                <StartupTag tags={startup.tags} />
              </div>
            </div>
          </div>
          <div className="grow" />
          <div className="flex w-3/6 items-center gap-4 md:w-2/6">
            <Button
              href={'/'}
              className="hidden justify-center !border-none !bg-light-shadow !text-primary md:flex ">
              Resource
            </Button>
            <Button href={'/'} className="p-2">
              View Your Page
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
