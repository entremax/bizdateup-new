import React from 'react'
import getUserDetails from '@/action/user'
import OtherDetailsForm from '@/app/profile/(profiles)/investor/other/components/otherDetailsForm'
import type { Metadata } from 'next'
import Link from 'next/link'
import { cn } from '@/lib/utils'

type Props = {
  searchParams: { [key: string]: string | string[] | undefined }
}
export const metadata: Metadata = {
  title: 'Other Details- Profile | Bizdateup',
  description:
    'This pages holds your other details like occupation,invest amount etc.',
}
export default async function OtherDetails({ searchParams }: Props) {
  const editState: boolean = !searchParams.edit

  const { role, user } = await getUserDetails()
  if (role !== 'investor' || !user) {
    return <>Loading</>
  }
  const data = [
    {
      label: 'Occupation',
      value: user.other.occupation,
    },
    {
      label: 'Invest amount',
      value: user.other.investAmount,
    },
    {
      label: 'Sectors',
      value: user.other.sector, //this will be of type array (string[])
    },
    {
      label: 'Invested in startups ?',
      value: user.other.investedFund === '0' ? 'No' : 'Yes',
    },
    {
      label: 'Linkedin URL',
      url: true,
      value: user.other.linkedlnUrl,
    },
  ]
  return (
    <div className="flex flex-col">
      {user.other.status !== 'incomplete' && editState ? (
        <div className="grid grid-cols-1">
          <div className="grid gap-8 p-8 md:grid-cols-2 lg:grid-cols-3">
            {data.map(({ label, value, url }) => (
              <React.Fragment key={label}>
                <div
                  className={cn('grid gap-2' + url ? ' md:cols-span-2' : '')}>
                  <p className="text-md text-gray-400">{label}</p>
                  {url ? (
                    <Link
                      href={value}
                      rel="noreferrer"
                      target={'_blank'}
                      className={'!text-blue-500 underline'}>
                      {value}
                    </Link>
                  ) : (
                    <p className="text-md font-bold">
                      {typeof value === 'string'
                        ? value
                        : value.map((item, index) => (
                            <span key={index}>{item}, </span>
                          ))}
                    </p>
                  )}
                </div>
              </React.Fragment>
            ))}
          </div>
          <div className="h-1 w-full bg-light-shadow"></div>
        </div>
      ) : (
        <OtherDetailsForm user={user} />
      )}
    </div>
  )
}
