import { StartupData } from '@/app/invest/_type'
import { Icons } from '@/icons'
import React from 'react'

export default function Highlights({ startup }: { startup: StartupData }) {
  const highlights =
    startup && startup.keyHighlights && Object.entries(startup.keyHighlights)
  return (
    <>
      {highlights && (
        <div className="border_gray rounded-xl px-4 py-4 shadow lg:px-7 lg:py-5">
          <h4 className="reset text-xl font-bold lg:text-2xl">Highlights</h4>
          <ul className={`m-0 grid list-none gap-4 p-0 py-4`}>
            {highlights?.map(([key, value]: [string, any]) => (
              <li
                className="text-medium flex items-center gap-1 text-[#444] lg:gap-2"
                key={key.toString()}>
                <Icons.Verified className={'h-4 w-4 flex-none'} />
                <span
                  className={'text-sm font-medium text-gray-500 lg:text-base'}>
                  {value.toString()}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}
