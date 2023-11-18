import { Icons } from '@/icons'
import { StartupData } from '@/app/invest/_type'
import React from 'react'

export default function DownloadVideo({ startup }: { startup: StartupData }) {
  return (
    <div className="border_gray rounded-xl px-4 py-4 shadow lg:px-7 lg:py-5">
      <div className="flex items-center">
        <h4 className="reset flex-grow text-xl font-bold lg:text-2xl">
          Recorded Video
        </h4>
        <p className="reset flex items-center gap-2 text-sm font-bold text-primary lg:text-base">
          <Icons.Download className={'h-6 w-6'} />
          Download
        </p>
      </div>
      <div className="flex flex-col py-4">
        <div className="flex gap-2 font-medium"></div>
      </div>
    </div>
  )
}
