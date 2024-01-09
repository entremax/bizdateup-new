import React from 'react'
import getUserDetails from '@/action/user'
import DealTermForm from './_components/dealTermForm'
import type { Metadata } from 'next'

type Props = {
  searchParams: { [key: string]: string | string[] | undefined }
}

export const metadata: Metadata = {
  title: 'Deal Terms - Profile | Bizdateup',
  description: 'Your Deal Terms Details Overview',
}

export default async function Deal({ searchParams }: Props) {
  const editState: boolean = !searchParams.edit

  const { role, user } = await getUserDetails()
  if (!user || role !== 'startup') {
    return <>Loading</>
  }
  const data = [
    {
      label: 'Types Of Security',
      value: user.dealTerms.typeOfSecurity,
    },
    {
      label: 'Valuation',
      value: user.dealTerms.valuation,
    },
    {
      label: 'Discount',
      value: user.dealTerms.discount,
    },
    {
      label: 'Minimum Investment',
      value: user.dealTerms.minimumInvestment,
    },
    {
      label: 'Target Amount',
      value: user.dealTerms.targetAmount,
    },
  ]

  return (
    <div className="flex flex-col">
      {!searchParams.edit ? (
        <div className="grid grid-cols-1">
          <div className="grid grid-cols-1 gap-8 p-8 xl:grid-cols-3">
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
        <DealTermForm deal={user.dealTerms} />
      )}
    </div>
  )
}
