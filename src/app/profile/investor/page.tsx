import React from 'react'
import GeneralForm from '@/components/profile/generalForm'
import getUserDetails from '@/action/user'
import type { Metadata } from 'next'
import { KYCStatus } from '@/types'
import { redirect, RedirectType } from 'next/navigation'
import { headers } from 'next/headers'

type Props = {
  searchParams: { [key: string]: string | string[] | undefined }
}
export const metadata: Metadata = {
  title: ' Profile | Bizdateup',
  description: 'This pages holds your general profile details',
}
export default async function InvestorProfile({ searchParams }: Props) {
  let editState: boolean = !searchParams.edit
  const header = headers().get('referer')

  const { role, user, status } = await getUserDetails()
  if (!user) {
    return <>Loading</>
  }
  if (role !== 'investor') {
    return
  }
  
  function nextStep() {
    console.log(status)
    const pendingSteps = [
      { status: KYCStatus.aadhar, route: '/profile/investor/kyc' },
      { status: KYCStatus.pan, route: '/profile/investor/kyc/pan' },
      { status: KYCStatus.bank, route: '/profile/investor/bank' },
      { status: KYCStatus.other, route: '/profile/investor/other' },
    ]

    const startIndex = pendingSteps.findIndex(
      (step) => step.status === KYCStatus.profile,
    )

    for (let i = startIndex + 1; i < pendingSteps.length; i++) {
      const nextStep = pendingSteps[i]
      if (status?.includes(nextStep.status)) {
        return nextStep.route
      }
    }
    return null // No, pending KYC steps
  }

  function referedFromDashboard() {
    if (!header) {
      return false
    }
    const url = new URL(header)
    return url.pathname === '/dashboard'
  }
  
  const toRedirect =
    !(user.firstName === '' || user.lastName === '' || !user.phone) &&
    referedFromDashboard() &&
    nextStep()

  if (toRedirect) {
    return redirect(toRedirect, RedirectType.push)
  }
  const data = [
    {
      label: 'First name',
      value: user?.firstName,
    },
    {
      label: 'Last Name',
      value: user?.lastName,
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
          <div className="grid grid-cols-1 gap-8 p-8 md:grid-cols-2 lg:grid-cols-3">
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
          <div className="mt-3 grid grid-cols-1 items-center gap-8 p-8 md:grid-cols-2 lg:grid-cols-3">
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
