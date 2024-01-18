'use client'
import React from 'react'
import DealTermForm from './_components/dealTermForm'
import { useAppSelector } from '@/store/hooks'
import { useSearchParams } from 'next/navigation'

export default function Deal() {
  const { user, token, role } = useAppSelector(({ authUser }) => authUser)
  const searchParams = useSearchParams()
  const editState = Boolean(searchParams?.get('edit'))

  if (!user || role !== 'startup' || !token) {
    return null
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
      {!editState ? (
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
