import Image from 'next/image'
import { apiUri, capitalizeFirstLetter } from '@/lib/utils'
import { StartupTag } from '@/components/tag'
import React from 'react'
import { StartupData, StartupDataByType } from '@/app/invest/_type'

export default function StartupCard({
  startup,
}: {
  startup: StartupData | StartupDataByType
}) {
  return (
    // <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 justify-center py-6 ">
    //   {getData(data).map((startup) => (
    <div
      key={startup._id}
      className={
        'relative w-full md:w-[24rem] rounded-2xl border_gray overflow-clip shadow'
      }
    >
      <Image
        src={apiUri().v1 + '/banner/' + startup.banner}
        alt={startup.registeredCompanyName}
        height={250}
        width={340}
        className={'w-full'}
      />
      <Image
        src={apiUri().v1 + '/logo/' + startup.logo}
        height={40}
        width={40}
        alt={startup.registeredCompanyName}
        className={'absolute top-52 rounded-xl left-5 w-16 h-16 border_gray'}
      />
      <div className={'p-5 pt-8 grid gap-4'}>
        <h5 className="reset text-xl font-bold text-black-lighter">
          {capitalizeFirstLetter(startup.registeredCompanyName.split(' '))}
        </h5>
        <p
          className={
            'reset text-sm text-[#828F99] text-ellipsis leading-normal line-clamp-3'
          }
        >
          {startup.shortDescription}
        </p>
        <StartupTag tags={startup.tags} />
      </div>
    </div>
    //   ))}
    // </div>
  )
}
