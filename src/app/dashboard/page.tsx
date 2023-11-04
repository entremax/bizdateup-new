import React from 'react';
import { Campaign} from '@/types';
import Greet from '@/components/_greet';
import LiveCampaigns from '@/components/_liveCampaigns';
import Plans from '@/components/_plans';
import Startups from '@/components/_startups';
import KycIndicator from '@/components/_kycIndicator';
import Image from 'next/image';
import Link from 'next/link';
import { Icons } from '@/icons';
import FrequentlyAsked from '@/components/faq';
import type { Metadata } from 'next';
import { Membership } from '@/components/_membership';
import ReduxProvider from "@/store/Provider";
import {apiUri} from "@/lib/utils";
import RiskDisclosure from "@/components/riskDisclosure";

const baseUrl = apiUri().v0;

export const metadata: Metadata = {
  title: 'Dashboard - Investor | Bizdateup',
  description: 'Dashboard for investor',
};

const getData = async () => {
  const url = `${baseUrl}/startupsInvestorView?limit=6`;
  try {
    const response = await fetch(url,{ next: { revalidate: 3600 } });
    if (!response.ok) {
       new Error('Failed to fetch data');
    }
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Something went wrong while getting startup data")
  }
};

const Dashboard = async () => {
  const {data:campaign}:{data: Campaign[]} =await getData()

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
  ];

  return (
    <div className='pt-20 pb-3 ml-2 grid grid-cols-12 gap-2 px-3 xl:px-5'>
      <div className='my-6 md:mt-5 col-start-1 col-end-12 xl:col-start-2 xl:col-end-11'>
        <div className='grid text-primary-dark'>
          <ReduxProvider>
            <Greet/>
          </ReduxProvider>
          <h2 className='hidden sm:inline sm:text-3xl md:text-4xl font-bold reset'>Check out Live Campaigns</h2>
        </div>
      </div>
      <div className='col-span-full md:col-start-1 md:col-end-9 xl:col-start-2 xl:col-end-9 gap-7 flex flex-col'>
        <ReduxProvider>
          <KycIndicator
            className={'md:hidden'}
            hidden={false}
          />
        </ReduxProvider>
          <LiveCampaigns data={campaign} />
        <ReduxProvider>
          <Plans />
        </ReduxProvider>
        <Startups data={campaign} />
      </div>
      <div
        className={
          'col-span-full md:col-start-9 md:col-end xl:col-start-9 xl:col-end-12 xl:pl-12'
        }
      >
        <ReduxProvider>
          <KycIndicator className={'hidden md:grid'} />
          <Membership />
        </ReduxProvider>
        <div
          className={
            'grid md:text-left text-center  md:items-left items-center justify-center md:justify-left border_gray p-3 gap-2  rounded-xl my-4 shadow'
          }
        >
          <Image
            src={'/person_with_money.png'}
            width={250}
            height={200}
            alt={'Person Viewing  a paper'}
            className={'w-full rounded'}
          />
          <div className='px-4 grid gap-2'>
            <h5 className='text-lg font-bold !p-0 !m-0'>
              Master Startup Investments
            </h5>
            <p className={'text-typography-gray-400 text-md !p-0 !m-0'}>
              Learn more about our platform offering
            </p>
            <Link
              href={'/learn-more'}
              className={'text-primary font-bold text-sm py-4'}
            >
              Learn more {'>'}
            </Link>
          </div>
        </div>
        <div className='grid md:text-left text-center justify-center items-center border_gray gap-2  rounded-xl my-4 shadow'>
          <div className={'flex'}>
            <div className='grow'></div>
            <Image
              src={
                'https://s3-alpha-sig.figma.com/img/66d5/70b3/9c6441c0a05bd78920817a27b7be7b9a?Expires=1697414400&Signature=MvGmZvjITHtgGcD4TDlGKg2t8XRtDUO~M4I5oUw-aeXWrGQZgW5zfuoZXTWDyFisr3fiSREALs~dMSOQJXPBovZAIGYle~klbeybWxsM~k1ya0AgSZfYE24dSZRi7UU4h6LtSooaQgKir6KLBXNNfcXald8r72spJWdtlyPuANnhTxmgTRvZL0aXAP--ktPh-OOmbSbG4giOdCpp8p-AIK-dTjhq8PrvOEK353QRasfDowi282D6zWqoJUSSY1xIiYq2lPeitSYrYgHklLOp0ga9SEtbdErAel~H3FnxpegsBqS5F0XIm71brrArQCs7ncVitlgeUIV14-pN1Fg1Iw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
              }
              alt={'Person in a rocket'}
              height={140}
              width={130}
              className={'py-5'}
            />
            <div className='grow'></div>
          </div>
          <div
            className={
              'grid justify-center divide-y divide-solid divide-x-0 divide-gray-300'
            }
          >
            <div className='text-center'>
              <h5 className='text-lg font-bold !p-0 !m-0'>
                Become an Accelerator
              </h5>
              <p
                className={
                  'text-typography-gray-400 text-md p-0 !m-0  py-2 pb-4'
                }
              >
                Join our accelerator program and fuel your entrepreneurial
                journey
              </p>
            </div>
            <Link
              href={'/learn-more'}
              className={'text-primary text-center  text-base py-4'}
            >
              Join now
            </Link>
          </div>
        </div>
        <div className='grid md:text-left text-center justify-center items-center border_gray gap-2  rounded-xl my-4 shadow'>
          <div className={'flex'}>
            <div className='grow'></div>
            <Image
              src={
                'https://s3-alpha-sig.figma.com/img/f943/214a/ec369e780b01be6be2acede7a288dfbe?Expires=1697414400&Signature=j-h12vBLij7tbTPNF2cFx5tRrSMUGY0DIpHZHMiGc99-WIZTps6X3r9r5h5QzJ4bL0to7g3qnZ6bB0HSIx8hJrvn8QP6jRfCXRNF9vHQcfemAHL73X1DHX8-VpIOgJ6z8NS8OpBTnvgQNYp0Ps0kBi54pRUrw1v7HHFy3y0dxjGincQUvxMVddFw5NyZg8NjhXquKHjxKP8WV784K1Psb-XbM-VxLKTLlgi6hPPXJ9YIInawqTkZ-G9I7w3qVBLfE~dgZvPAQoDkcp5JVQEEGn4UFW75qEExwQRKY0JfZ409Mo5fGJlc8PF079SBtSH228bY3XtzXODnZb542GnZwA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
              }
              alt={'Person building money tower'}
              height={140}
              width={180}
              className={'py-5'}
            />
            <div className='grow'></div>
          </div>
          <div className={'grid justify-center py-2 px-3'}>
            <div className='text-center'>
              <h5 className='text-lg font-bold !p-0 !m-0'>Calculators</h5>
              <p
                className={
                  'text-typography-gray-400 text-md p-0 !m-0  py-2 pb-4'
                }
              >
                Calculate your return on investments(ROI) with Bizdateup
              </p>
            </div>
            <Link
              href={'/learn-more'}
              className={
                'text-primary bg-light-shadow text-center  text-base py-4 w-full rounded-xl'
              }
            >
              Get now
            </Link>
          </div>
        </div>
        <div className='hidden md:inline py-4 px-4'>
          {menu.map((item, index) => (
            <Link
              href={item.link}
              key={index}
              className={
                'text-black-lighter hover:text-primary font-medium text-center flex  text-base py-2'
              }
            >
              {item.name}
              <div className='grow'></div>
              <Icons.ArrowRight
                height={14}
                width={14}
                className={'text-primary-dark'}
              />
            </Link>
          ))}
        </div>
      </div>
      <div className='col-span-full mt-4'>
        <div className='lg:bg-gray-smoke grid grid-cols-12'>
          <div className='grid col-span-full md:col-start-2 md:col-end-11 xl:col-start-3 xl:col-end-11 my-16 md:my-32'>
            <h4 className='text-3xl md:text-4xl font-bold text-center reset'>
              Frequently Asked Questions
            </h4>
            <ReduxProvider>
              <FrequentlyAsked />
            </ReduxProvider>
          </div>
        </div>
      </div>
      {/*<MobileAppAds/>*/}
      <ReduxProvider>
        <RiskDisclosure/>
      </ReduxProvider>
    </div>
  );
};

export default Dashboard;
