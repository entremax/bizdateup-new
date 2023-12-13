import React from 'react'
import { Campaign } from '@/types'
import Greet from '@/components/dashboard/_greet'
import LiveCampaigns from '@/components/dashboard/_liveCampaigns'
import Plans from '@/components/dashboard/_plans'
import Startups from '@/components/dashboard/_startups'
import KycIndicator from '@/components/dashboard/_kycIndicator'
import Image from 'next/image'
import Link from 'next/link'
import { Icons } from '@/icons/icon'
import type { Metadata } from 'next'
import { Membership } from '@/components/dashboard/_membership'
import ReduxProvider from '@/store/Provider'
import { apiUri } from '@/lib/utils'
import FrequentlyAsked from '@/components/faq'
import dynamic from 'next/dynamic'

export const metadata: Metadata = {
  title: 'Dashboard - Investor | Bizdateup',
  description: 'Dashboard for investor',
}
const RiskDisclosure = dynamic(
  () => import('@/components/dashboard/riskDisclosure'),
  {
    ssr: false,
  },
)
const getData = async () => {
  const url = `${apiUri().v0}/startupsInvestorView?limit=5`
  const response = await fetch(url, { next: { revalidate: 0 } })
    .then((res) => {
      return res?.json()
    })
    .catch((e) => {
      console.error(e)
      throw new Error(e.message)
    })
  if (response.data.code === 200) {
    new Error('Failed to fetch data')
  }
  return { data: response.data.data }
}

const Dashboard = async () => {
  const { data: campaign }: { data: Campaign[] } = await getData()

  const menu = [
    {
      name: 'Tutorials',
      link: '/tutorials',
    },
    {
      name: 'Frequently asked questions',
      link: '/faq',
    },
    {
      name: 'About us',
      link: '/about_us',
    },
    {
      name: 'Terms & Conditions',
      link: '/terms',
    },
    {
      name: 'Privacy Policy',
      link: '/policy',
    },
  ]

  return (
    <section className="ml-2 grid grid-cols-12 gap-2 pb-3 pr-3 pt-20">
      <div className="col-start-1 col-end-12 my-6 md:mt-5 xl:col-start-2 xl:col-end-11">
        <div className="grid text-primary-dark">
          <Greet />
          <h2 className="reset hidden font-bold sm:inline sm:text-3xl md:text-4xl">
            Check out Live Campaigns
          </h2>
        </div>
      </div>
      <div className="col-span-full flex flex-col gap-7 md:col-start-1 md:col-end-9 xl:col-start-2 xl:col-end-9">
        <KycIndicator className={'md:hidden'} hidden={false} />
        <LiveCampaigns data={campaign} />
        <Plans />
        <Startups data={campaign} />
      </div>
      <div
        className={
          'md:col-end col-span-full md:col-start-9 md:pl-6 xl:col-start-9 xl:col-end-12 xl:pl-12'
        }>
        <KycIndicator className={'hidden md:grid'} />
        <Membership />
        <div
          className={
            'md:items-left md:justify-left border_gray  my-4 grid items-center justify-center gap-2 rounded-xl p-3  text-center shadow md:text-left'
          }>
          <div className="relative h-[10rem] max-h-[10rem] w-full overflow-clip  rounded-sm">
            <Image
              src={
                'https://www.figma.com/file/f4SkzM7hfOnqhiBLoZKxms/image/b825596a57cd8a132b7335c9dda94a345cce9eed'
              }
              fill
              alt={'Person Viewing  a paper'}
            />
          </div>
          <div className="grid gap-2">
            <h5 className="!m-0 !p-0 text-lg font-bold">
              Master Startup Investments
            </h5>
            <p className={'text-md text-md !m-0 !p-0 text-typography-gray-400'}>
              Learn more about our platform offering
            </p>
            <Link
              href={'/learn-more'}
              className={'py-2 text-sm font-bold text-primary'}>
              Learn more {'>'}
            </Link>
          </div>
        </div>
        <div className="border_gray my-4 grid items-center justify-center gap-2 rounded-xl  text-center shadow md:text-left">
          <div className={'flex'}>
            <div className="grow"></div>
            <Image
              src={
                'https://s3-alpha-sig.figma.com/img/66d5/70b3/9c6441c0a05bd78920817a27b7be7b9a?Expires=1697414400&Signature=MvGmZvjITHtgGcD4TDlGKg2t8XRtDUO~M4I5oUw-aeXWrGQZgW5zfuoZXTWDyFisr3fiSREALs~dMSOQJXPBovZAIGYle~klbeybWxsM~k1ya0AgSZfYE24dSZRi7UU4h6LtSooaQgKir6KLBXNNfcXald8r72spJWdtlyPuANnhTxmgTRvZL0aXAP--ktPh-OOmbSbG4giOdCpp8p-AIK-dTjhq8PrvOEK353QRasfDowi282D6zWqoJUSSY1xIiYq2lPeitSYrYgHklLOp0ga9SEtbdErAel~H3FnxpegsBqS5F0XIm71brrArQCs7ncVitlgeUIV14-pN1Fg1Iw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
              }
              alt={'Person in a rocket'}
              height={140}
              width={130}
              className={'py-5'}
            />
            <div className="grow"></div>
          </div>
          <div
            className={
              'grid justify-center divide-x-0 divide-y divide-solid divide-gray-300 '
            }>
            <div className="px-8 text-center">
              <h5 className="!m-0 !p-0 text-lg font-bold">
                Become an Accelerator
              </h5>
              <p
                className={
                  'text-md !m-0 p-0 py-2  pb-4 text-typography-gray-400'
                }>
                Join our accelerator program and fuel your entrepreneurial
                journey
              </p>
            </div>
            <Link
              href={'/learn-more'}
              className={'py-4 text-center  text-base text-primary'}>
              Join now
            </Link>
          </div>
        </div>
        <div className="border_gray my-4 grid items-center justify-center gap-2 rounded-xl  text-center shadow md:text-left">
          <div className={'flex'}>
            <div className="grow"></div>
            <Image
              src={
                'https://s3-alpha-sig.figma.com/img/f943/214a/ec369e780b01be6be2acede7a288dfbe?Expires=1697414400&Signature=j-h12vBLij7tbTPNF2cFx5tRrSMUGY0DIpHZHMiGc99-WIZTps6X3r9r5h5QzJ4bL0to7g3qnZ6bB0HSIx8hJrvn8QP6jRfCXRNF9vHQcfemAHL73X1DHX8-VpIOgJ6z8NS8OpBTnvgQNYp0Ps0kBi54pRUrw1v7HHFy3y0dxjGincQUvxMVddFw5NyZg8NjhXquKHjxKP8WV784K1Psb-XbM-VxLKTLlgi6hPPXJ9YIInawqTkZ-G9I7w3qVBLfE~dgZvPAQoDkcp5JVQEEGn4UFW75qEExwQRKY0JfZ409Mo5fGJlc8PF079SBtSH228bY3XtzXODnZb542GnZwA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
              }
              alt={'Person building money tower'}
              height={140}
              width={180}
              className={'py-5'}
            />
            <div className="grow"></div>
          </div>
          <div className={'grid justify-center px-3 py-2'}>
            <div className="text-center">
              <h5 className="!m-0 !p-0 text-lg font-bold">Calculators</h5>
              <p
                className={
                  'text-md !m-0 p-0 py-2  pb-4 text-typography-gray-400'
                }>
                Calculate your return on investments(ROI) with Bizdateup
              </p>
            </div>
            <Link
              href={'/learn-more'}
              className={
                'w-full rounded-xl bg-light-shadow  py-4 text-center text-base text-primary'
              }>
              Get now
            </Link>
          </div>
        </div>
        <div className="hidden px-4 py-4 md:inline">
          {menu.map((item, index) => (
            <Link
              href={item.link}
              key={index}
              className={
                'flex py-2 text-center text-base font-medium  text-black-lighter hover:text-primary'
              }>
              {item.name}
              <div className="grow"></div>
              <Icons.ArrowRight
                height={14}
                width={14}
                className={'text-primary-dark'}
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="col-span-full mt-4">
        <div className="grid grid-cols-12 lg:bg-gray-smoke">
          <div className="col-span-full my-16 grid md:col-start-2 md:col-end-11 md:my-32 xl:col-start-3 xl:col-end-11">
            <h4 className="reset text-center text-3xl font-bold md:text-4xl">
              Frequently Asked Questions
            </h4>
            <FrequentlyAsked />
          </div>
        </div>
      </div>
      <ReduxProvider>
        <RiskDisclosure />
      </ReduxProvider>
    </section>
  )
}

export default Dashboard
