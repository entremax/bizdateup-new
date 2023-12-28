import React from 'react'
import Image from 'next/image'

type Props = {
  review: {
    id: number
    photo: string
    name: string
    designation: string
    desc: string
  }
  style?: React.CSSProperties
}
export default function SlideCard({ review, style }: Props) {
  return (
    <div
      className="border_gray  !flex h-[24rem] !w-[20rem] flex-col items-center justify-center gap-4 rounded-2xl p-8 sm:!w-[16rem]"
      style={style}>
      <div className="relative h-28  w-28 overflow-clip rounded-full">
        <Image src={review.photo} alt={review.name} fill />
      </div>
      <div className="flex flex-col gap-4">
        <p className="flex flex-col gap-2 text-center">
          <span className={'text-lg font-semibold'}>{review.name}</span>
          <span className={'text-md font-semibold text-gray-600'}>
            {review.designation}
          </span>
        </p>
        <p className="text-center text-sm text-gray-600 ">{review.desc}</p>
      </div>
    </div>
  )
}
