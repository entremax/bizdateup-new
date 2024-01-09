'use client'
import { Events, StartupData } from '@/types/invest'
import Link from 'next/link'
import React from 'react'
import { apiUri } from '@/lib/utils'

export default function Event({ startup }: { startup: StartupData }) {
  const api = apiUri().v1
  return (
    <div className=" px-4 py-4 shadow lg:px-7 lg:py-5 ">
      <div className="grid md:grid-cols-1">
        {startup.events.map((event: Events) => (
          <div
            key={event._id}
            className={'flex  items-center gap-4 px-4 py-4 lg:gap-2'}>
            <div className="flex flex-col gap-0.5 lg:gap-1">
              <h5 className="reset text-gray-40 text-sm lg:text-lg ">
                {event.date}
              </h5>
              <p className={'reset text-gray-40 text-sm lg:text-base '}>
                {event.time}
              </p>
              <p className={'reset text-gray-40 text-sm lg:text-base '}>
                {event.banner}
              </p>
              <Link
                href={event.url}
                className="reset flex items-center gap-1  text-sm font-medium leading-normal text-primary">
                {/* <Icons.LinkedIn className={'h-4 w-4'} />{' '} */}
                <span className={'text-[#0066C8]'}>{event.url}</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
