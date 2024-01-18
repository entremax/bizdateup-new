'use client'
import React from 'react'
import KycTabs from '@/app/profile/investor/kyc/kycTabs'

export default function KycTabLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col">
      <KycTabs />
      {children}
    </div>
  )
}
