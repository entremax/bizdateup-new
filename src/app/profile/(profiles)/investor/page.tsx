import React from 'react'
import GeneralForm from '@/components/profile/generalForm'
import { DataInner } from '@/types'
import getUserDetails from '@/action/user'
import type { Metadata } from 'next'

type Props = {
  searchParams: { [key: string]: string | string[] | undefined }
}
export const metadata: Metadata = {
  title: ' Profile | Bizdateup',
  description: 'This pages holds your general profile details',
}
export default async function InvestorProfile({ searchParams }: Props) {
  let editState: boolean = !searchParams.edit
  const { user }: { user: DataInner } = await getUserDetails()
  if (!user) {
    return <>Loading</>
  }
  // if (user.firstName === '' || user.lastName === '' || !user.phone) {
  //   editState = true
  // }
  const data = [
    {
      label: 'First name',
      value: user.firstName,
    },
    {
      label: 'Last Name',
      value: user.lastName,
    },
    {
      label: 'Email',
      value: user.email,
    },
    {
      label: 'Mobile number',
      value: user.phone,
    },
    {
      label: 'Gender',
      value: user.gender,
    },
    {
      label: 'Referral Code',
      value: user.refer ?? '',
      hidden: !user.refer,
    },
    {
      label: 'Address',
      value: user?.address?.address,
    },
    {
      label: 'City',
      value: user?.address?.city,
      hidden: user?.address?.country === 'NRI',
    },
    {
      label: 'State',
      value: user.address.state,
      hidden: user?.address?.country === 'NRI',
    },
    {
      label: 'Country',
      value: user?.address?.country,
    },
    {
      label: 'PIN code',
      value: user?.address?.pincode,
    },
  ]
  return (
    <div className="flex flex-col">
      {!(user.firstName === '' || user.lastName === '' || !user.phone) &&
      editState ? (
        <div className="grid grid-cols-1">
          <div className="grid grid-cols-1 gap-8 p-8 xl:grid-cols-3">
            {data.slice(0, 6).map(({ label, value, hidden }) => (
              <React.Fragment key={label}>
                {!hidden && (
                  <div className="grid gap-2">
                    <p className="text-md text-gray-400">{label}</p>
                    <p className="text-md font-bold">{value}</p>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
          <div className="h-2 w-full bg-light-shadow"></div>
          <div className="mt-3 grid grid-cols-1 items-center gap-8 p-8 xl:grid-cols-3">
            {data.slice(6, 12).map(({ label, value, hidden }) => (
              <React.Fragment key={label}>
                {!hidden && (
                  <div className="grid gap-2">
                    <p className="text-md text-gray-400">{label}</p>
                    <p className="text-md font-bold">{value}</p>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      ) : (
        <GeneralForm user={user} />
      )}
    </div>
  )
}
