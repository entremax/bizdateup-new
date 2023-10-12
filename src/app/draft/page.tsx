'use client';
import React from 'react';
import Image from 'next/image';
import { Icons } from '@/icons';
export default function Draft() {
  return (
    <div className={'grid justify-center items-center h-full'}>
      <div className={'relative w-16 h-16 grid justify-center items-center'}>
        <Icons.Premium
          className={'absolute top-[10%] left-[34%] bottom-[10%]'}
        />
        <Image
          src={'/logo.svg'}
          height={32}
          width={50}
          alt={'BizDateup Logo'}
        />
      </div>
    </div>
  );
}
