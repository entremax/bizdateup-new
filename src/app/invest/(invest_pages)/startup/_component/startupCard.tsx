'use client'
import Image from 'next/image'
import { apiUri, capitalizeFirstLetter } from '@/lib/utils'
import { StartupTag } from '@/components/tag'
import React from 'react'
import { StartupData, StartupDataByType } from '@/types/invest'
import { useRouter } from 'next/navigation'

export default function StartupCard({
  startup,
}: {
  startup: StartupData | StartupDataByType
}) {
  const router = useRouter()
  const handleClick = (id: string, name: string) => {
    return router.push(`/invest/startup/${id}?name=${name}`)
  }
  return (
    // <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 justify-center py-6 ">
    //   {getData(data).map((startup) => (
    <div
      key={startup._id}
      onClick={() => handleClick(startup._id, startup.registeredCompanyName)}
      className={
        'border_gray relative mt-4 w-full cursor-pointer overflow-clip rounded-2xl shadow md:w-[24rem]'
      }>
      {/*<span className="absolute flex items-center justify-center bg-[#16A713] text-white">*/}
      {/*  <svg*/}
      {/*    width="15"*/}
      {/*    height="15"*/}
      {/*    viewBox="0 0 15 15"*/}
      {/*    fill="none"*/}
      {/*    xmlns="http://www.w3.org/2000/svg">*/}
      {/*    <path*/}
      {/*      fillRule="evenodd"*/}
      {/*      clipRule="evenodd"*/}
      {/*      d="M4.49138 1.70662C5.05424 1.66168 5.58857 1.44029 6.01828 1.07398C6.50362 0.660617 7.1203 0.433594 7.75781 0.433594C8.39533 0.433594 9.01201 0.660617 9.49734 1.07398C9.92705 1.44029 10.4614 1.66168 11.0242 1.70662C11.6599 1.75742 12.2566 2.03297 12.7075 2.48386C13.1584 2.93476 13.434 3.53152 13.4848 4.16716C13.5294 4.7298 13.7508 5.26443 14.1174 5.69406C14.5308 6.1794 14.7578 6.79608 14.7578 7.43359C14.7578 8.07111 14.5308 8.68779 14.1174 9.17312C13.7511 9.60283 13.5297 10.1372 13.4848 10.7C13.434 11.3357 13.1584 11.9324 12.7075 12.3833C12.2566 12.8342 11.6599 13.1098 11.0242 13.1606C10.4614 13.2055 9.92705 13.4269 9.49734 13.7932C9.01201 14.2066 8.39533 14.4336 7.75781 14.4336C7.1203 14.4336 6.50362 14.2066 6.01828 13.7932C5.58857 13.4269 5.05424 13.2055 4.49138 13.1606C3.85574 13.1098 3.25898 12.8342 2.80808 12.3833C2.35719 11.9324 2.08164 11.3357 2.03084 10.7C1.9859 10.1372 1.76451 9.60283 1.3982 9.17312C0.984836 8.68779 0.757812 8.07111 0.757812 7.43359C0.757812 6.79608 0.984836 6.1794 1.3982 5.69406C1.76451 5.26435 1.9859 4.73002 2.03084 4.16716C2.08164 3.53152 2.35719 2.93476 2.80808 2.48386C3.25898 2.03297 3.85574 1.75742 4.49138 1.70662ZM11.0015 6.3022C11.1609 6.13717 11.2491 5.91614 11.2471 5.68671C11.2451 5.45729 11.1531 5.23782 10.9908 5.07559C10.8286 4.91335 10.6091 4.82133 10.3797 4.81933C10.1503 4.81734 9.92925 4.90554 9.76422 5.06493L6.8828 7.94635L5.7514 6.81496C5.58637 6.65557 5.36534 6.56737 5.13592 6.56936C4.90649 6.57136 4.68702 6.66338 4.52479 6.82562C4.36255 6.98785 4.27053 7.20732 4.26854 7.43674C4.26654 7.66617 4.35474 7.8872 4.51413 8.05223L6.26416 9.80226C6.42825 9.9663 6.65077 10.0585 6.8828 10.0585C7.11482 10.0585 7.33734 9.9663 7.50143 9.80226L11.0015 6.3022Z"*/}
      {/*      fill="white"*/}
      {/*    />*/}
      {/*  </svg>*/}
      {/*  Funded*/}
      {/*</span>*/}
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
