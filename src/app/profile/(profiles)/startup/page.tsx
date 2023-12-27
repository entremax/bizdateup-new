import type { Metadata } from 'next'
import getUserDetails from '@/action/user'
import React from 'react'
import { Icons } from '@/icons/icon'

export const metadata: Metadata = {
  title: 'Startup Profile | Bizdateup',
  description: 'This pages holds your startup details.',
}
export default async function StartupProfile() {
  const { role, user } = await getUserDetails()
  if (!user) {
    return <>Loading</>
  }
  if (role !== 'startup') {
    return
  }
  const highlights =
    user && user.keyHighlights && Object.entries(user.keyHighlights)
  const data = [
    {
      label: 'First name',
      value: user?.companyName,
    },
    {
      label: 'Last Name',
      value: user?.companyBased,
    },
    {
      label: 'Key Highlights',
      value: <Highlights highlights={highlights} />,
    },
  ]
  return (
    <div className="h1 p-20">
      {data.map((field) => (
        <p>{field.value}</p>
      ))}
    </div>
  )
}

const, Highlights = (
  {
    highlights
  }:
    {
      highlights: [string, any][]
    }) => {
  return (
    highlights?.map(([key, value]: [string, any]) => (
      <li
        className="text-medium flex items-start  gap-1 text-[#444] lg:gap-2"
        key={key.toString()}>
        <Icons.Verified
          className={'mt-1 h-4 w-4 flex-none md:h-5 md:w-5'}
        />
        <span
          className={
            'self-center justify-self-center text-sm font-medium text-gray-600 lg:text-base'
          }>
                  {value.toString()}
                </span>
      </li>
    )))
}