'use client'
import HowToSteps from '@/app/_components/onboarding_steps/Steps'
import React, { useState } from 'react'
import Button from '@/components/LinkButton'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

const data: { [key: number]: { link: string | StaticImport } } = {
  0: { link: '/onboarding/auth.svg' },
  1: { link: '/onboarding/profile.svg' },
  2: { link: '/onboarding/invest.svg' },
}
export default function HowItWorks() {
  const [current, setCurrent] = useState(0)
  const [buttonConfig, setButtonConfig] = useState({
    link: '/signup',
    text: 'Register',
    image: '/',
  })
  const onChange = (value: number) => {
    let details = {
      link: '/signup',
      text: 'Register',
      image: '',
    }
    if (value === 1) {
      details = {
        link: '/profile/investor/kyc',
        text: 'Fill out the application now',
        image: '',
      }
    }
    if (value === 2) {
      details = {
        link: '/invest',
        text: 'Fill out the application now',
        image: '',
      }
    }
    setButtonConfig(details)
    setCurrent(value)
  }

  return (
    <div className="max-h-28rem my-16 flex flex-col items-center gap-4  px-[19px]">
      <div>
        <p className="text-center text-[13px] font-semibold text-zinc-700/70 lg:text-[20px]">
          HOW IT WORKS
        </p>
        <h6 className="mt-0 text-center text-[30px] leading-[36px] lg:mb-0 lg:px-[150px] lg:text-[48px] lg:leading-[64px] xl:px-[300px]">
          Here&apos;s How Your Seamless Investment Journey Looks with us!
        </h6>
      </div>
      <div className="my-8 flex flex-col items-center justify-center gap-8 lg:mt-[84px] lg:flex-row">
        <div
          className={cn(
            `z-6 relative h-full max-h-[16rem] min-h-[16rem] min-w-[24rem]  rounded-xl border-4 border-solid bg-white lg:max-h-[20rem] lg:min-h-[20rem] lg:min-w-[28rem] ${
              current === 1 ? 'min-w-16rem' : ''
            }`,
          )}>
          <Image
            alt={'onboarding-image'}
            className={'z-10'}
            src={data[current].link}
            fill
          />
          {current === 1 && (
            <>
              <div className="border_gray absolute -bottom-24 -left-10 z-10 w-3/4 overflow-clip rounded-xl bg-white shadow-lg">
                <Image
                  src={'/onboarding/bankForm.svg'}
                  className={'!static -top-8 z-10'}
                  alt={'bank form'}
                  fill
                />
              </div>
              <div className="z-1 absolute -left-20 bottom-8 h-32 w-32 rounded-full bg-light-shadow"></div>
              <div className="z-1 absolute -bottom-20 h-32  w-32 rounded-full bg-light-shadow"></div>
            </>
          )}
        </div>
        <div className="mt-20 flex w-full min-w-[90vw] max-w-[90vw] flex-col lg:mt-0 lg:min-w-[28rem] lg:max-w-[28rem]">
          <HowToSteps current={current} onChange={onChange} />
          <Button href={buttonConfig.link} className={'my-8 text-sm lg:w-2/4'}>
            {buttonConfig.text}
          </Button>
        </div>
      </div>
    </div>
  )
}
