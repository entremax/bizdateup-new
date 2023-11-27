'use client'
import React from 'react'
import Image from 'next/image'
import { Icons } from '@/icon'

export default function Draft() {
  return (
    <div className={'grid h-full items-center justify-center'}>
      <div className={'relative grid h-16 w-16 items-center justify-center'}>
        <Icons.Premium
          className={'absolute bottom-[10%] left-[34%] top-[10%]'}
        />
        <Image
          src={'/logo.svg'}
          height={32}
          width={50}
          alt={'BizDateup Logo'}
        />
      </div>
    </div>
  )
}
