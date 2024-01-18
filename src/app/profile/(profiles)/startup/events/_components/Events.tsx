'use client'
import { Events, StartupData } from '@/types/invest'
import Link from 'next/link'
import React from 'react'
import { apiUri, formatCustomDate } from '@/lib/utils'
import EventsIcon from '@/components/icons/EventsIcon'

export default function Event({ startup }: { startup: StartupData }) {
  const api = apiUri().v1
  return (
    <div className=" px-4 py-4 shadow lg:px-7 lg:py-5 ">
      <div className="grid gap-3 md:grid-cols-1">
        {startup.events.map((event: Events) => (
          <div
            key={event._id}
            className={
              'border_gray flex flex-col items-start  gap-4 rounded-lg p-4 lg:gap-2'
            }>
            <div className="flex w-full items-center gap-0.5 lg:gap-1">
              <h5 className="reset flex flex-grow items-center gap-3 text-sm text-gray-400 lg:text-lg">
                <EventsIcon /> {formatCustomDate(event.date)}
              </h5>
              <p className={'reset text-gray-40 text-sm lg:text-base '}>
                {event.time}
              </p>
            </div>
            <div>
              <p className={'reset text-gray-40 text-sm lg:text-base '}>
                {event.banner}
              </p>
              <Link
                href={event.url}
                className="reset text-md flex items-center  gap-1 font-medium leading-normal text-primary">
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
