import { cn } from '@/lib/utils'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function StartAd({ className = '' }: { className?: string }) {
  return (
    <div
      className={cn(
        'border_gray items-center justify-center gap-4 rounded-xl px-4 py-4 shadow md:grid lg:px-7 lg:py-5' +
          className,
      )}>
      <Image
        className={'justify-self-center'}
        height={100}
        width={100}
        src={'/rocket_invest.png'}
        alt={'Rocket'}
      />
      <h3 className="reset text-center text-xl font-bold">
        Start your investment Journey with Bizdateup today!
      </h3>
      <p className="reset text-center text-base font-normal text-gray-400">
        Sign up and start investing in startups from rupees 50000 lore psum
      </p>
      <Link
        href={'/login'}
        className={
          'flex items-center justify-center rounded-lg bg-primary  px-2 py-2 text-center text-sm font-medium leading-[1.57563rem] text-white outline-none lg:text-base'
        }>
        Get Started
      </Link>
    </div>
  )
}
