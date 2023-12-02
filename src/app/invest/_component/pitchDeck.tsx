import { Icons } from '@/components/icons/icon'
import React from 'react'
import Image from 'next/image'

export default function PitchDeck() {
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
      <div className="relative col-span-full min-w-full">
        <Image
          alt={'2'}
          src={
            'https://s3-alpha-sig.figma.com/img/b076/2d66/8a1e83d40f64e5d6c4f8d2347b37bef0?Expires=1699833600&Signature=gH4VggFP0Uu0RfKjxFW0UOPEXdUxH05FoheD3b2QorcNaCjAEyleWmlsnm-hYt6tHj-Pp6xonKWSW5YReei88oQaK-8I3KO9SYDeeZbE5LQLB6DpiRTRYNm7BqIBMwm1fpWB2NaQAV-Q7kWQR4tn0AVDRXD~jT7f04-kXClTzGQtTCstd~J~0Qi97NH9Vk3ccMn34~SseIYfDXJf1voAWTdNQoZCZl8TamXc8INZXdHjIG5jrLWsihwHKqNHKHMKkIuk~yh4ibW4vWmC4EkZRGneIAWzGiIpw5NrXm29MTfdTJgZN5jeAt2U4r1ntfbQKGxJHITEkmI~FK7kI4mnPA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
          }
          layout={'fill'}
        />
      </div>
    </div>
  )
}
