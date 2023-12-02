import Image from 'next/image'
import { apiUri, capitalizeFirstLetter } from '@/lib/utils'
import { StartupTag } from '@/components/tag'
import React from 'react'
import { StartupData, StartupDataByType } from '@/types/invest'

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
        'border_gray relative w-full overflow-clip rounded-2xl shadow md:w-[24rem]'
      }>
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
        className={'border_gray absolute left-5 top-52 h-16 w-16 rounded-xl'}
      />
      <div className={'grid gap-4 p-5 pt-8'}>
        <h5 className="reset text-xl font-bold text-black-lighter">
          {capitalizeFirstLetter(startup.registeredCompanyName.split(' '))}
        </h5>
        <p
          className={
            'reset line-clamp-3 text-ellipsis text-sm leading-normal text-[#828F99]'
          }>
          {startup.shortDescription}
        </p>
        <StartupTag tags={startup.tags} />
      </div>
    </div>
    //   ))}
    // </div>
  )
}
