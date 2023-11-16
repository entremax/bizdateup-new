import { Icons } from '@/icons'
import { StartupData } from '@/app/invest/_type'
import React from 'react'

export default function DownloadVideo({ startup }: { startup: StartupData }) {
  return (
    <div className="border_gray shadow rounded-xl px-4 lg:px-7 py-4 lg:py-5">
      <div className="flex items-center">
        <h4 className="text-xl lg:text-2xl font-bold reset flex-grow">
          Recorded Video
        </h4>
        <p className="reset text-primary font-bold flex items-center gap-2 text-sm lg:text-base">
          <Icons.Download className={'w-6 h-6'} />
          Download
        </p>
      </div>
      <div className="flex flex-col py-4">
        <div className="flex gap-2 font-medium"></div>
      </div>
    </div>
  )
}
