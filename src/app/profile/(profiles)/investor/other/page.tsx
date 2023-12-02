import React from 'react'
import { DataInner } from '@/types'
import getUserDetails from '@/action/user'
import OtherDetailsForm from '@/app/profile/(profiles)/investor/other/components/otherDetailsForm'

type Props = {
  searchParams: { [key: string]: string | string[] | undefined }
}

export default async function OtherDetails({ searchParams }: Props) {
  const editState: boolean = !searchParams.edit

  const { user }: { user: DataInner } = await getUserDetails()
  if (!user) {
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
      value: user.other.sector,
    },
    {
      label: 'Invested in startups ?',
      value: user.other.investedFund === '0' ? 'No' : 'Yes',
    },
    {
      label: 'Linkedin URL',
      value: user.other.linkedlnUrl,
    },
  ]
  return (
    <div className="flex flex-col">
      {editState ? (
        <div className="grid grid-cols-1">
          <div className="grid grid-cols-3 gap-8 p-8">
            {data.map(({ label, value }) => (
              <React.Fragment key={label}>
                <div className="grid gap-2">
                  <p className="text-md text-gray-400">{label}</p>
                  <p className="text-md font-bold">{value}</p>
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
