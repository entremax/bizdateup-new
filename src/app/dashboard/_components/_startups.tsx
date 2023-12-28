import React from 'react'
import { Campaign } from '@/types'
import Image from 'next/image'
import { apiUri, capitalizeFirstLetter } from '@/lib/utils'
import { StartupTag } from '@/components/tag'
import JoinWhatsApp from '@/app/dashboard/_components/_join_whatsapp'
import { Button } from 'antd'
import Link from 'next/link'

const Startups = ({ data }: { data: Campaign[] }) => {

  function getData(data: any[]) {
    let startupData = data.length > 4 ? data.slice(0, 4) : data

    if (startupData.length % 2 !== 0) {
      startupData = data.slice(0, 2)
    }

    return startupData
  }

  return (
    <div className={'grid'}>
      <h3
        className={
          '!m-0 !p-0 text-2xl font-bold text-primary-dark md:text-4xl'
        }>
        Invest with Confidence
      </h3>
      <div className="grid grid-cols-1 justify-center gap-6 py-6 lg:grid-cols-2 ">
        {getData(data).map((startup: Campaign) => (
          <Link
            href={`/invest/startup/${startup._id}?name=${startup.registeredCompanyName}`}
            key={startup._id}
            className={
              'border_gray relative overflow-clip rounded-2xl text-black shadow-lg'
            }>
            <Image
              src={apiUri().base + 'v1' + '/banner/' + startup.banner}
              alt={startup.registeredCompanyName}
              height={250}
              width={340}
              className={'w-full'}
            />
            <Image
              src={apiUri().base + 'v1/logo/' + startup.logo}
              height={40}
              width={40}
              alt={startup.registeredCompanyName}
              className={
                'border_gray absolute left-5 top-52 h-16 w-16 rounded-xl'
              }
            />
            <div className={'grid gap-3 p-5 pt-8'}>
              <h5 className="m-0 p-0 text-2xl font-bold text-black-lighter">
                {capitalizeFirstLetter(
                  startup.registeredCompanyName.split(' '),
                )}
              </h5>
              <p
                className={
                  'text-ellipsis text-base leading-normal text-[#828F99]'
                }>
                {startup.shortDescription}
              </p>
              <StartupTag tags={startup.tags} />
            </div>
          </Link>
        ))}
      </div>
      <JoinWhatsApp hidden />
      {data.length % 2 !== 0 && data.length > 2 ? (
        <Button
          href={'/invest'}
          type={'default'}
          size={'large'}
          className={
            'my-9 cursor-pointer rounded-lg border-0  !bg-light-shadow p-[0.625rem_1.25rem] text-lg font-semibold  !text-primary outline-none'
          }
          block>
          View All Startups
        </Button>
      ) : null}
    </div>
  )
}
export default Startups
