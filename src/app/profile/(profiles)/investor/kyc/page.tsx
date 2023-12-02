import React from 'react'
import { DataInner } from '@/types'
import getUserDetails from '@/action/user'

type Props = {
  searchParams: { [key: string]: string | string[] | undefined }
}

export default async function KYC({ searchParams }: Props) {
  const editState: boolean = !searchParams.edit
  const { user }: { user: DataInner } = await getUserDetails()
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
      },
      {
        label: 'Aadhar back',
        value: 'Document',
      },
    ],
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
        value: user.aadhar.aadharNo,
      },
      {
        label: 'PAN font',
        value: 'Document',
      },
      {
        label: 'PAN back',
        value: 'Document',
      },
    ],
  }
  return <div></div>
}
