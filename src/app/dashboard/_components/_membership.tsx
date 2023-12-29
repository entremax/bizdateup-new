'use client'
import React from 'react'
import Image from 'next/image'
import { useAppSelector } from '@/store/hooks'
import { Icons } from '@/icons/icon'
import { Button, Collapse, ConfigProvider } from 'antd'

export const Membership = () => {
  const { role, user } = useAppSelector(({ authUser }) => authUser)
  return (
    <>
      {role === 'investor' && user && user?.membership?.isMember !== 'no' ? (
        <div className={'border_gray my-4 rounded-xl'}>
          <ConfigProvider
            theme={{
              components: {
                Collapse: {
                  headerPadding: '0.5rem 1rem 0.5rem 1rem',
                },
              },
            }}>
            <Collapse
              bordered={false}
              defaultActiveKey={['1']}
              expandIconPosition={'end'}
              expandIcon={({ isActive }) => (
                <Icons.ArrowRight
                  style={{
                    transform: `rotate(${isActive ? '270deg' : '90deg'})`,
                  }}
                />
              )}
              // style={{ background: token.colorBgContainer }}
              items={[
                {
                  key: '1',
                  label: (
                    <div className={'flex items-center gap-4 p-0'}>
                      <Icons.Premium height={'25'} width={'25'} />
                      <p className={'reset'}>Your membership features</p>
                    </div>
                  ),
                  children: (
                    <ul
                      className={
                        'm-0 ml-6 mt-0 list-outside  list-disc p-0 pt-0 marker:text-gray-400'
                      }>
                      <li className={'reset text-gray-400'}>
                        Unlock exclusive benefits and
                      </li>
                      <li className={'reset text-gray-400'}>
                        Opportunities with BizDateup
                      </li>
                      <li className={'reset text-gray-400'}>
                        Premium membership.
                      </li>
                    </ul>
                  ),
                },
              ]}
            />
          </ConfigProvider>
        </div>
      ) : (
        <>
          <div className="border_gray relative my-4 grid items-center  justify-center justify-items-center gap-2 overflow-clip rounded-xl bg-premium-bg  p-5 text-center md:text-left">
            <div className="absolute -left-10 top-0  h-20 w-20 rounded-full bg-premium-circle"></div>
            <div className="absolute -left-10 -top-8 h-20 w-20 rounded-full bg-premium-circle"></div>
            <div className="absolute -right-10 top-0  h-20 w-20 rounded-full bg-premium-circle"></div>
            <div className="absolute -right-10 -top-8 h-20 w-20 rounded-full bg-premium-circle"></div>
            <div className={'relative grid h-20 w-20 items-end justify-center'}>
              <Icons.Premium
                className={'absolute bottom-[10%] left-[34%] top-[10%]'}
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
            <div className={'z-10 grid  justify-center '}>
              <div className="text-center">
                <h5 className="reset text-lg font-bold">
                  Join Membership Program
                </h5>
                <p className={'reset text-sm text-typography-gray-400'}>
                  Unlock exclusive benefits and opportunities with BizDateup
                  membership.
                </p>
              </div>
              <Button
                type={'default'}
                href="/upgrade"
                size={'large'}
                className={
                  'mt-5 bg-premium-btn !text-sm font-semibold !text-white'
                }
                block>
                Continue procedure
              </Button>
            </div>
          </div>
        </>
      )}
    </>
  )
}
