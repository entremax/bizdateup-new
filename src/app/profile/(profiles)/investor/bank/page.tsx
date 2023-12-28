import React from 'react'
import getUserDetails from '@/action/user'
import BankForm from '@/components/profile/bankForm'
import type { Metadata } from 'next'

type Props = {
  searchParams: { [key: string]: string | string[] | undefined }
}

export const metadata: Metadata = {
  title: 'Bank Details - Profile | Bizdateup',
  description: 'Your Bank Details Overview',
}

export default async function Bank({ searchParams }: Props) {
  const editState: boolean = !searchParams.edit

  const { role, user } = await getUserDetails()
  if (!user || role !== 'investor') {
    return <>Loading</>
  }
  const data = [
    {
      label: 'Bank name',
      value: user.bank.bankName,
    },
    {
      label: 'Account number',
      value: user.bank.accountNumber,
    },
    {
      label: 'IFSC',
      value: user.bank.ifsc,
    },
    {
      label: 'Account Type',
      value: user.bank.accountType,
    },
    {
      label: 'Name of account holder',
      value: user.bank.registeredName,
    },
  ]
  console.log(
    'Edit',
    user.bank.status !== 'pending',
    user.bank.status,
    'Edit State',
    editState,
  )
  return (
    <div className="flex flex-col">
      {user.bank.status !== 'pending' && !searchParams.edit ? (
        <div className="grid grid-cols-1">
          <div className="grid grid-cols-1 gap-8 p-8 md:grid-cols-2 lg:grid-cols-3">
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
        <BankForm user={user} />
      )}
    </div>
  )
}
