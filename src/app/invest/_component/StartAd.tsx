import { cn } from '@/lib/utils'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function StartAd({ className = '' }: { className?: string }) {
  return (
    <div
      className={cn(
        'border_gray shadow rounded-xl px-4 lg:px-7 py-4 lg:py-5 md:grid gap-4 justify-center items-center' +
          className,
      )}
    >
      <Image
        className={'justify-self-center'}
        height={100}
        width={100}
        src={'/rocket_invest.png'}
        alt={'Rocket'}
      />
      <h3 className="reset text-xl font-bold text-center">
        Start your investment Journey with Bizdateup today!
      </h3>
      <p className="reset text-base text-center font-normal text-gray-400">
        Sign up and start investing in startups from rupees 50000 lore psum
      </p>
      <Link
        href={'/login'}
        className={
          'bg-primary text-white text-center text-sm lg:text-base  font-medium leading-[1.57563rem] outline-none flex items-center justify-center rounded-lg px-2 py-2'
        }
      >
        Get Started
      </Link>
    </div>
  )
}
