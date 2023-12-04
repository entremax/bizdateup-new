import React from 'react'
import { Avatar, Button } from 'antd'
import { MessageOutlined } from '@ant-design/icons'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Invest Manager - Profile | Bizdateup',
  description: 'Invest manager',
}

export default function InvestmentManager() {
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-1">
        <div className="grid grid-cols-2 gap-2 p-8">
          <div
            // key={member.fullName}
            className={'flex items-center gap-4 py-0 lg:gap-2'}>
            <div className="max-w-[100]">
              <Avatar
                size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                src={
                  'https://s3-alpha-sig.figma.com/img/30bf/ef45/e54d7c4df029b56b699c918a3686ce10?Expires=1701648000&Signature=Zz~~2IvA5SJnt21tUNT92y10ZAyCe15yYwxVI3hT--JF5gInPu9DYMUWCnImBLgLT9NuITFVT5~NURoqn15DgQImdbmFC72VD6r1Gd8sfMULug~7wXulkqQ59nR8-txk937MfC~--6QFMnAhQXRs2ni0PB2NGYJKe--INv5IB7KBhdT3NcGTzGBxsKR97C2ImSe-oWrTA8D7o3kVpNjsI1Ogi9DzTJ3~yG~Y4winQWlfeLkRkmwwXyZEXBHE43I2DYoIn04c8q~uk-JnA-w9cZGfKtpL4M5EkVjvULeiBBEthjHnbBH4XBQFbh37FQKoW3xlKk18eP-Tzrq1smad2A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
                }
              />
            </div>
            <div className="flex flex-col gap-0.5 lg:gap-1">
              <h5 className="reset text-gray-40 text-sm lg:text-lg "></h5>
              <p className={'reset text-gray-40 text-sm lg:text-base '}>
                Aditya Singh Ratnu
              </p>
              <p>
                <strong className={'text-sm'}>Email : </strong>
                <span className="text-sm font-light">aditya@gmail.com</span>
              </p>
              <p>
                <strong className={'text-sm'}>Ph : </strong>
                <span className="text-sm font-light">8724099549</span>
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 items-center justify-center gap-3">
            <Button
              type={'default'}
              size={'middle'}
              icon={<MessageOutlined className={'text-white'} />}
              className={
                '!bg-primary !text-white outline-none hover:!bg-primary '
              }>
              Chat with us
            </Button>
            <Button
              type={'default'}
              size={'middle'}
              className={'!text-primary !outline-2 !outline-primary'}>
              Schedule a meet
            </Button>
          </div>
          <div className="">
            <p className={'text-xs italic leading-[1.5rem] text-[#7D7D7D]'}>
              Your investment manager will be available to chat on Whatsapp
              between 9am - 5 pm on every Sunday and Tuesday
            </p>
          </div>
        </div>

        <div className="h-0.5 w-full bg-light-shadow"></div>
      </div>
    </div>
  )
}
