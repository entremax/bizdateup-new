import Image, { StaticImageData } from 'next/image'
import { Icons } from '@/icons/icon'
import Link from 'next/link'
import React from 'react'

type Props = {
  linkImg: StaticImageData
  name: string
  linkedin: string
  position: string
}
export default function MemberCard({
  linkImg,
  name,
  linkedin,
  position,
}: Props) {
  return (
    <div className="border_gray border_gray group relative col-span-1 flex min-h-[26vh] flex-col gap-3 overflow-clip rounded-xl p-4 xl:min-h-[33vh]">
      <Image src={linkImg} alt={'v'} fill sizes={'100%'} />
      <div className="absolute bottom-0 left-0 right-0 top-3/4 cursor-pointer flex-col justify-start border-0 border-t-[0.02rem] border-solid border-gray-300 bg-white p-4  pt-3 transition-opacity delay-700 group-hover:top-1/3 group-hover:flex motion-reduce:transition-none motion-reduce:hover:transform-none">
        <h5 className="text-lg font-semibold">{name}</h5>
        <p className="text-sm font-medium">{position}</p>
        <p className="hidden overflow-ellipsis py-2 text-left text-xs font-medium leading-snug text-[#6E6E73] group-hover:inline-block"></p>
        <div className="grow" />
        <Link
          href={linkedin}
          className="reset  hidden items-center  gap-1 text-sm font-medium leading-normal text-primary group-hover:flex">
          <Icons.LinkedIn className={'h-4 w-4'} />{' '}
          <span className={'text-[#0066C8]'}>linkedin</span>
        </Link>
      </div>
    </div>
  )
}
