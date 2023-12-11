import React from 'react'
import { StartupData } from '@/types/invest'
import Image from 'next/image'
import { apiUri, capitalizeFirstLetter } from '@/lib/utils'
import { Avatar } from 'antd'

interface Props {
  startup: StartupData
}

const AfterCampaign: React.FC<Props> = ({ startup }) => {
  return (
    <div
      className={
        'col-span-full my-16 grid items-center justify-center rounded-xl bg-neutral-300 p-10 text-center md:col-start-2 md:col-end-12 md:my-32'
      }>
      <div className="flex items-center justify-center gap-4 py-4">
        <div className="h-11 w-11 overflow-clip rounded-xl border border-gray-400">
          <Image
            src={apiUri().v1 + '/logo/' + startup.logo}
            height={45}
            width={45}
            alt={startup.companyName}
          />
        </div>
        <h3 className="reset py-2 text-2xl font-bold leading-normal text-primary-dark md:text-4xl lg:py-4 lg:leading-[4rem]">
          {capitalizeFirstLetter(
            startup.registeredCompanyName.trim().split(' '),
          )}
        </h3>
      </div>
      <p className="reset text-center text-2xl font-bold leading-[3.5rem] text-lemon-dark">
        Smooth Sparkling Shake has raised 6355366 from 122 investors on 19 Sep
        2021
      </p>
      <div className="flex items-center justify-center py-3">
        {/*<Avatar.Group>*/}
        <div
          className={'relative rounded-full outline outline-2 outline-primary'}>
          <Avatar size={'large'} className={'m-0.5'}>
            U
          </Avatar>
        </div>
        <div
          className={'relative rounded-full outline outline-2 outline-primary'}>
          <Avatar size={'large'} className={'m-0.5'}>
            U
          </Avatar>
        </div>
        <div
          className={'relative rounded-full outline outline-2 outline-primary'}>
          <Avatar size={'large'} className={'m-0.5'}>
            U
          </Avatar>
        </div>
        {/*</Avatar.Group>*/}
      </div>
      <p className={'reset text-center font-normal text-gray-500'}>
        Gaurav, Dennis, Albert, Michael, Adrienne, and 9754 others invested.{' '}
        <span className="underline decoration-gray-500 decoration-1"></span>{' '}
        1176 Reviews
      </p>
    </div>
  )
}

export default AfterCampaign
