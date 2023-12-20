import React from 'react'
import { DataInner, KYCStatus } from '@/types'
import getUserDetails from '@/action/user'
import type { Metadata } from 'next'
import Link from 'next/link'
import PanForm from '@/app/profile/(profiles)/investor/kyc/pan/Form'

type Props = {
  searchParams: { [key: string]: string | string[] | undefined }
}
export const metadata: Metadata = {
  title: 'KYC - Profile | Bizdateup',
  description: 'Your kyc status',
}

export default async function KYC({ searchParams }: Props) {
  const { user, status }: { user: DataInner; status: KYCStatus[] } =
    await getUserDetails()
  if (!user) {
    return <>Loading</>
  }
  const data = {
    aadhar: [
      {
        label: 'Type',
        value: 'Online KYC',
      },
      {
        label: 'Document',
        value: 'Aadhar Card',
      },
      {
        label: 'Aadhar number',
        value: user.aadhar.aadharNo,
      },
      {
        label: 'Aadhar font',
        value: 'Document',
        link: true,
      },
      {
        label: 'Aadhar back',
        value: 'Document',
        link: true,
      },
    ],
  }
  return (
    <div className="flex flex-col">
      {user?.aadhar.status === 'verified' && !searchParams.edit ? (
        <div className="grid grid-cols-1">
          <div className="grid grid-cols-1 gap-8 p-8 xl:grid-cols-3">
            {data.aadhar.map(({ label, value, link }) => (
              <React.Fragment key={label}>
                <div className="grid gap-2">
                  <p className="text-md text-gray-400">{label}</p>
                  {link ? (
                    <Link
                      href={'/'}
                      className={
                        'text-md font-semibold !text-primary underline'
                      }>
                      {value}
                    </Link>
                  ) : (
                    <p className="text-md font-bold">{value}</p>
                  )}
                </div>
              </React.Fragment>
            ))}
          </div>
          <div className="h-1 w-full bg-light-shadow"></div>
        </div>
      ) : (
        <PanForm user={user} />
      )}
    </div>
  )
}
