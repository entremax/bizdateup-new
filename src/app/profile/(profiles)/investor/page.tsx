import React from 'react'
import GeneralForm from '@/profile-components/generalForm'
import { DataInner } from '@/types'
import getUserDetails from '@/lib/helpers/getUserDetails'

type Props = {
  searchParams: { [key: string]: string | string[] | undefined }
}

export default async function InvestorProfile({ searchParams }: Props) {
  const editState: boolean = !searchParams.edit
  const { user }: { user: DataInner } = await getUserDetails()
  if (!user) {
    return <>Loading</>
  }
  console.log(user)
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
      value: user.phone,
    },
    {
      label: 'Address',
      value: user?.address?.address,
    },
    {
      label: 'City',
      value: user?.address?.city,
    },
    {
      label: 'State',
      value: user.address.state,
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
      {editState ? (
        <div className="grid grid-cols-1">
          <div className="grid grid-cols-3 gap-8 p-8">
            {data.slice(0, 6).map(({ label, value }) => (
              <React.Fragment key={label}>
                <div className="grid gap-2">
                  <p className="text-md text-gray-400">{label}</p>
                  <p className="text-md font-bold">{value}</p>
                </div>
              </React.Fragment>
            ))}
          </div>
          <div className="h-2 w-full bg-light-shadow"></div>
          <div className="mt-3 grid grid-cols-3 items-center gap-8 p-8">
            {data.slice(6, 12).map(({ label, value }) => (
              <React.Fragment key={label}>
                <div className="grid gap-2">
                  <p className="text-md text-gray-400">{label}</p>
                  <p className="text-md font-bold">{value}</p>
                </div>
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
