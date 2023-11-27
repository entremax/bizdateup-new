import React from 'react'
import { DataInner } from '@/types'
import getUserDetails from '@/lib/helpers/getUserDetails'
import BankForm from '@/profile-components/bankForm'

type Props = {
  searchParams: { [key: string]: string | string[] | undefined }
}

export default async function Bank({ searchParams }: Props) {
  const editState: boolean = !searchParams.edit

  const { user }: { user: DataInner } = await getUserDetails()
  if (!user) {
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
        <BankForm user={user} />
      )}
    </div>
  )
}
