'use client'
import React from 'react'
import getUserDetails from '@/action/user'
import Link from 'next/link'
import PanForm from '@/app/profile/(profiles)/investor/kyc/pan/Form'
import { redirect, RedirectType, useSearchParams } from 'next/navigation'
import { apiUri } from '@/lib/utils'
import ImagePreview from '@/app/profile/(profiles)/investor/kyc/ImagePreview'
import type { Metadata } from 'next'
import { useAppSelector } from '@/store/hooks'


export default function PanPage() {
  const {user,token,role}=useAppSelector(({authUser})=>authUser)
  
  if (!user||role!=='investor'||!token) {
    return null
  }
  // if (user.aadhar.status !== 'verified') {
  //   return redirect('/profile/investor/kyc', RedirectType.push)
  // }

  const data = {
    pan: [
      {
        label: 'Type',
        value: 'Online KYC',
      },
      {
        label: 'Document',
        value: 'PAN Card',
      },
      {
        label: 'PAN number',
        value: user.pan.panNo,
      },
      {
        label: 'PAN font',
        value: 'Document',
        fileName: user.pan.panImageFront,
        link: true,
      },
      {
        label: 'PAN back',
        value: 'Document',
        fileName: user.pan.panImageBack,
        link: true,
      },
    ],
  }
  return (
    <div className="flex flex-col">
      {user?.pan.status === 'verified' ? (
        <div className="grid grid-cols-1">
          <div className="grid grid-cols-1 gap-8 p-8 md:grid-cols-2 lg:grid-cols-3">
            {data.pan.map(({ label, value, fileName, link }) => (
              <React.Fragment key={label}>
                <div className="grid gap-2">
                  <p className="text-md text-gray-400">{label}</p>
                  {link ? (
                    // <Link
                    //   target="_blank"
                    //   href={apiUri().v0 + '/doc/pan/' + fileName}
                    //   className={
                    //     'text-md font-semibold !text-primary underline'
                    //   }>
                    //   {value}
                    // </Link>
                    <ImagePreview fileName={fileName} docType={'pan'} token={token}/>
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
