import { StartupData } from '@/app/invest/_type'
import { Icons } from '@/icons'
import React from 'react'

export default function Highlights({ startup }: { startup: StartupData }) {
  const highlights =
    startup && startup.keyHighlights && Object.entries(startup.keyHighlights)
  console.log(highlights)
  return (
    <>
      {highlights && (
        <div className="border_gray shadow rounded-xl px-4 lg:px-7 py-4 lg:py-5">
          <h4 className="text-xl lg:text-2xl font-bold reset">Highlights</h4>
          <ul className={`list-none m-0 p-0 grid gap-4 py-4`}>
            {highlights?.map(([key, value]: [string, any]) => (
              <li
                className="text-medium text-[#444] flex gap-1 lg:gap-2 items-center"
                key={key.toString()}
              >
                <Icons.Verified className={'w-4 h-4 flex-none'} />
                <span
                  className={'text-gray-500 font-medium text-sm lg:text-base'}
                >
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
