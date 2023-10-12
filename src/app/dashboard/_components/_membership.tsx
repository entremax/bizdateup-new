'use client';
import React from 'react';
import Image from 'next/image';
import { useAppSelector } from '@/store/hooks';
import { Icons } from '@/icons';
import {Button, Collapse, ConfigProvider} from 'antd';
export const Membership = () => {
  const { user } = useAppSelector(({ authUser }) => authUser);
  return (
    <>
      {user?.membership?.isMember === "no" ? (
        <>
        <div className='grid relative md:text-left overflow-clip p-5  text-center justify-center justify-items-center items-center border_gray gap-2  rounded-xl my-4 bg-premium-bg'>
          <div className='absolute top-0 -left-10  w-20 h-20 rounded-full bg-premium-circle'></div>
          <div className='absolute -top-8 -left-10 w-20 h-20 rounded-full bg-premium-circle'></div>
          <div className='absolute top-0 -right-10  w-20 h-20 rounded-full bg-premium-circle'></div>
          <div className='absolute -top-8 -right-10 w-20 h-20 rounded-full bg-premium-circle'></div>
          <div className={'relative w-20 h-20 grid justify-center items-end'}>
            <Icons.Premium
              className={'absolute top-[10%] left-[34%] bottom-[10%]'}
              height={'25'}
              width={'25'}
            />
            <Image
              src={'/logo.svg'}
              height={50}
              width={60}
              alt={'BizDateup Logo'}
            />
          </div>
          <div className={'grid justify-center  z-10 '}>
            <div className='text-center'>
              <h5 className='text-lg font-bold reset'>
                Join Membership Program
              </h5>
              <p className={'text-typography-gray-400 text-sm reset'}>
                Unlock exclusive benefits and opportunities with BizDateup
                membership.
              </p>
            </div>
            <Button
              type={'default'}
              href='/upgrade'
              size={'large'}
              className={
                'bg-premium-btn font-semibold mt-5 !text-white !text-sm'
              }
              block
            >
              Continue procedure
            </Button>
          </div>
        </div>
        </>
      ) : (
        <div className={"border_gray rounded-xl my-4"}>
          <ConfigProvider theme={{
            components: {
              Collapse: {
                headerPadding:'0.5rem 1rem 0.5rem 1rem'
              },
            },
          }}>
          <Collapse
            bordered={false}
            defaultActiveKey={['1']}
            expandIconPosition={"end"}
            expandIcon={({ isActive }) => <Icons.ArrowRight  style={{ transform: `rotate(${isActive ? "270deg" : "90deg"})` }}/>}
            // style={{ background: token.colorBgContainer }}
            items={[
              {
              key:'1',
              label: (
                <div className={"flex gap-4 items-center p-0"}>
                  <Icons.Premium height={'25'}
                                 width={'25'}/>
                  <p className={"reset"}>Your membership features</p>
                </div>
              ),
              children:(
                <ul className={"p-0 m-0 mt-0 pt-0  ml-6 marker:text-gray-400 list-outside list-disc"}>
                  <li className={"reset text-gray-400"}>Unlock exclusive benefits and</li>
                  <li className={"reset text-gray-400"}>Opportunities with BizDateup</li>
                  <li className={"reset text-gray-400"}>Premium membership.</li>
                </ul>
              )
              }
            ]}
          />
          </ConfigProvider>
        </div>
      )}
    </>
  );
};
