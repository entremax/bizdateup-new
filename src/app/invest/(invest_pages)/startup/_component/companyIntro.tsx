import Image from 'next/image'
import { StartupTag } from '@/components/tag'
import React from 'react'
import {
  apiUri,
  calculatePercentage,
  capitalizeFirstLetter,
  formatIndianValuation,
} from '@/lib/utils'
import { Divider, Progress } from 'antd'
import { StartupData } from '@/types/invest'
import Description from '@/components/readmore'
import { Icons } from '@/icons/icon'
import InvestButton from '@/components/invest/InvestButton'

export default function CompanyIntro({ startup }: { startup: StartupData }) {
  const { v1: apiV1 } = apiUri()
  const isClosed = startup.activeStatus.status === 'closed'
  return (
    <>
      <div className="col-span-full flex flex-col py-4 xl:col-start-2 xl:col-end-12">
        {isClosed && (
          <Divider className={'!m-0 '}>
            <div
              className="flex items-center justify-center gap-2 rounded-lg bg-[#F5F5F5] px-6 py-1 text-base text-[#858585]">
              <Icons.Locked /> Campaign ended
            </div>
          </Divider>
        )}
        <div className="flex items-center gap-4 py-4">
          <div className="relative h-11 max-h-[2.75rem] w-11 overflow-clip rounded-xl border border-gray-400">
            <Image
              src={apiV1 + '/logo/' + startup.logo}
              fill
              alt={startup.companyName}
            />
          </div>
          <h3
            className="reset py-2 text-2xl font-bold leading-normal text-primary-dark md:text-4xl lg:py-4 lg:leading-[4rem]">
            {capitalizeFirstLetter(
              startup.registeredCompanyName.trim().split(' '),
            )}
          </h3>
        </div>
        <Description text={startup.shortDescription} />
        <StartupTag tags={startup.tags} />
      </div>
      <div
        className="col-span-full flex aspect-video w-full justify-center justify-self-center md:col-end-8 md:pb-8 xl:col-start-2 xl:col-end-8">
        {startup?.youtubeVideoUrl?.includes('embed') ? (
          <iframe
            style={{
              border: '0',
            }}
            src={startup?.youtubeVideoUrl}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="aspect-video w-full rounded-xl"></iframe>
        ) : (
          ''
        )}
      </div>
      <div
        className="col-span-full flex flex-col justify-center gap-4 md:col-start-8 md:pb-8 md:pl-8 xl:col-end-12 xl:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-1 lg:gap-2 xl:gap-4">
          <div className="grid justify-self-start">
            <p className="reset text-2xl font-bold tracking-wide lg:text-4xl">
              13
            </p>
            <p className="reset text-sm font-medium text-gray-400">investors</p>
          </div>
          <div className="grid justify-self-end md:justify-self-start">
            <p className="reset text-2xl font-bold tracking-wide lg:text-4xl">
              28 days
            </p>
            <p className="reset text-sm font-medium text-gray-400">
              Left to invest
            </p>
          </div>
        </div>
        <div className="grid justify-self-start">
          <p className="reset text-2xl font-bold tracking-wide lg:text-4xl">
            ₹ {formatIndianValuation(startup.totalRaised)}
          </p>
          <p className="reset text-sm font-medium text-gray-400">
            {calculatePercentage(
              startup.totalRaised,
              startup.dealTerms.targetAmount,
            )}
            % of minimum goal raised
          </p>
        </div>
        <div className="grid gap-0">
          <Progress
            success={{
              percent: calculatePercentage(
                startup.totalRaised,
                startup.dealTerms.targetAmount,
              ),
            }}
          />
        </div>
        <InvestButton startup={startup} isClosed={isClosed} intro />
      </div>
    </>
  )
}
