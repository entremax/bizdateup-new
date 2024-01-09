import { Icons } from '@/components/icons/icon'
import React from 'react'
import Pdf from '@/components/Pdf'

export default function PitchDeck({ pdf }: { pdf: string }) {
  return (
    <div className="border_gray grid grid-cols-12 rounded-xl px-4 py-4 shadow lg:px-7 lg:py-5">
      <div className="col-span-full  flex">
        <h4 className="reset flex-grow text-xl font-bold lg:text-2xl">
          Pitch Deck
        </h4>
        <p className="reset flex items-center gap-2 text-sm font-bold text-primary lg:text-base">
          <Icons.Expand />
          <span className={'hidden lg:inline'}>View in full screen</span>
          <span className={'lg:hidden'}>Full Screen</span>
        </p>
      </div>
      <div className="col-span-full min-h-[30vh]  w-full  min-w-full">
        <Pdf pitch={pdf} />
      </div>
    </div>
  )
}
