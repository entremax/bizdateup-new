'use client'
import React from 'react'
import AadharForm from '@/app/profile/investor/kyc/KYCForm'
import ImagePreview from '@/app/profile/investor/kyc/ImagePreview'
import { useAppSelector } from '@/store/hooks'
import { useSearchParams } from 'next/navigation'

export default function KYC() {
  const { user, token, role } = useAppSelector(({ authUser }) => authUser)
  const searchParams = useSearchParams()
  const edit = Boolean(searchParams?.get('edit'))

  if (!user || role !== 'investor' || !token) {
    return null
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
        fileName: user.aadhar.aadharImageFront,
        link: true,
      },
      {
        label: 'Aadhar back',
        value: 'Document',
        fileName: user.aadhar.aadharImageBack,
        link: true,
      },
    ],
  }
  return (
    <div className="flex flex-col">
      {user?.aadhar.status === 'verified' && !edit ? (
        <div className="grid grid-cols-1">
          <div className="grid grid-cols-1 gap-8 p-8 md:grid-cols-2 lg:grid-cols-3">
            {data.aadhar.map(({ label, fileName, value, link }) => (
              <React.Fragment key={label}>
                <div className="grid gap-2">
                  <p className="text-md text-gray-400">{label}</p>
                  {link ? (
                    <ImagePreview
                      fileName={fileName}
                      docType={'aadhar'}
                      token={token}
                    />
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
        <AadharForm user={user} />
      )}
    </div>
  )
}
