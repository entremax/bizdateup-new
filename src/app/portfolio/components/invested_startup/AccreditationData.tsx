'use client'
import { formatIndianValuation } from '@/lib/utils'
import Link from 'next/link'
import {
  CalendarOutlined,
  ClockCircleOutlined,
  DownloadOutlined,
} from '@ant-design/icons'
import React from 'react'
import { InvestedStartup } from '@/types/portfolio'

type Props = {
  details: InvestedStartup
  show: boolean
}
export default function AccreditationData({ details, show }: Props) {
  return show ? (
    <>
      <div className="col-span-full grid grid-cols-2 justify-around gap-8 border-0 border-x-0 border-y-[0.022rem] border-solid border-[#E6E6E6] py-4 lg:grid-cols-5">
        <div className="my-4 flex flex-col gap-2">
          <p className="text-sm text-neutral-400">Current Valuation</p>
          <span className="cursor-pointer text-base font-semibold">
            {details?.portfolio?.currentValuation
              ? `₹
                              ${formatIndianValuation(
                                details?.portfolio?.currentValuation,
                              )}`
              : '-'}{' '}
          </span>
        </div>
        <div className="my-4 flex flex-col gap-2">
          <p className="text-sm text-neutral-400">Valuation at investment</p>
          <span className="cursor-pointer text-base font-semibold">
            {details?.dealTerms?.valuation
              ? `₹
                              ${formatIndianValuation(
                                details?.dealTerms?.valuation,
                              )}`
              : '-'}{' '}
          </span>
        </div>
        <div className="my-4 flex flex-col gap-2">
          <p className="text-sm text-neutral-400"> Expected Valuation</p>
          <span className="cursor-pointer text-base font-semibold">
            {details?.portfolio?.expectedValuation
              ? `₹
                              ${formatIndianValuation(
                                details?.portfolio?.expectedValuation,
                              )}`
              : '-'}{' '}
          </span>
        </div>
        <div className="my-4 flex flex-col gap-2">
          <p className="text-sm text-neutral-400"> Current Revenue</p>
          <span className="cursor-pointer text-base font-semibold">
            {details?.portfolio?.currentRevenue
              ? `₹
                              ${formatIndianValuation(
                                details?.portfolio?.currentRevenue,
                              )}`
              : '-'}{' '}
          </span>
        </div>
        <div className="my-4 flex flex-col gap-2">
          <p className="text-sm text-neutral-400">Revenue at investment</p>
          <span className="cursor-pointer text-base font-semibold">
            {details?.revenue
              ? `₹
                              ${formatIndianValuation(details?.revenue)}`
              : '-'}{' '}
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-sm text-neutral-400">ARR</p>
          <span className="cursor-pointer text-base font-semibold">
            {details?.portfolio?.ARR
              ? `₹
                              ${formatIndianValuation(details?.portfolio?.ARR)}`
              : '-'}{' '}
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm text-neutral-400">MRR</p>
          <span className="cursor-pointer text-base font-semibold">
            {details?.portfolio?.MRR
              ? `₹
                              ${formatIndianValuation(details?.portfolio?.MRR)}`
              : '-'}{' '}
          </span>
        </div>
      </div>
      <div className="col-span-full flex w-full flex-col ">
        <h5 className="text-lg font-semibold">
          Expected time for the startup to raise next round is 12 months.
        </h5>
        <div className="my-4 flex flex-wrap gap-4 text-sm md:flex-nowrap lg:max-w-[40vw]">
          <Link
            href={'/'}
            className={
              '!primary_link flex items-center justify-center gap-2 px-4 py-2'
            }>
            View more details
          </Link>
          <Link
            href={'/'}
            className={
              '!primary_link flex  items-center justify-center gap-2  border-[0.022rem] border-solid !bg-white px-4 py-2 text-primary'
            }>
            <span>View Website</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 16 16">
              <rect
                width="9.6"
                height="9.6"
                x="1.066"
                y="5.333"
                stroke="#8686F5"
                strokeLinecap="round"
                strokeWidth="2"
                rx="2"></rect>
              <path
                stroke="#8686F5"
                strokeLinecap="round"
                strokeWidth="2"
                d="M11.734 1.067h3.2v3.2M14.934 1.067l-3.2 3.2"></path>
            </svg>
          </Link>
          <Link
            href={'/'}
            className={
              '!primary_link flex items-center justify-center gap-2 !bg-white py-2  text-primary md:border-[0.022rem] md:border-solid'
            }>
            <DownloadOutlined /> <span> Download agreement</span>
          </Link>
        </div>
      </div>
      <div className="col-span-full flex flex-col border-0 border-x-0 border-y-[0.022rem] border-solid border-[#E6E6E6] py-2">
        <h5 className="text-lg font-semibold">Exit Strategy</h5>
        <p className={'text-md py-2'}>{details?.portfolio?.exitStrategy}</p>
      </div>
      <div className="col-span-full flex flex-wrap items-center gap-4 ">
        <Link href={'/join'} className={'text-sm text-primary underline'}>
          Join AMA meeting with Co-founders for learning
        </Link>
        <p className={'py-2  text-sm'}>
          <CalendarOutlined /> 23 Jan 2024
        </p>
        <p className={'py-2  text-sm'}>
          <ClockCircleOutlined /> 10:23PM
        </p>
      </div>
    </>
  ) : null
}
