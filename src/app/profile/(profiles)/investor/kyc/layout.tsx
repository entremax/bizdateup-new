'use client'
import React from 'react'
import KycTabs from '@/app/profile/(profiles)/investor/kyc/kycTabs'
import Link from 'next/link'

export default function KycTabLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col">
      <KycTabs />
      {children}
      <div className="grid grid-cols-1 gap-8 px-8 py-4 xl:grid-cols-2">
        <div className="flex flex-col gap-4 py-4">
          <h4 className="flex flex-col text-lg font-bold text-primary-dark">
            Complete via Offline KYC
            <span className="text-sm font-semibold text-gray-300">
              Maximum 1 working day for verification
            </span>
          </h4>
          <Link
            href={'/contact-us'}
            className={
              '!primary_link !bg-light-shadow text-sm font-semibold !text-primary'
            }>
            Complete Offline KYC
          </Link>
        </div>
      </div>
    </div>
  )
}
