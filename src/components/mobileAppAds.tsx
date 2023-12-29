import React from 'react'
import Image from 'next/image'

export default function MobileAppAds({ ...props }) {
  return (
    <>
      <div className="col-span-12 my-4 hidden md:inline" hidden={props.hidden}>
        <div className="grid grid-cols-12">
          <div
            className={
              'col-start-2 col-end-12 grid grid-cols-10 rounded-xl bg-light-shadow px-14 py-8'
            }>
            <div className="grid gap-4 pr-4 md:col-span-7">
              <h5 className="text-4xl font-bold">
                Startup Investments at your fingertips
              </h5>
              <p className="!m-0 !p-0 text-xl">
                With Bizdateup you get a Strong Community of Top 1% Investors
                who live & Breathe Angel Investing! To top it up Signing up
                takes hardly 5 min&apos;s of your time. So, Join the Community
                Now!
              </p>
            </div>
            <div className="col-span-3">
              <Image src={'/iphone.png'} height={200} width={250} alt={'IOS'} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
