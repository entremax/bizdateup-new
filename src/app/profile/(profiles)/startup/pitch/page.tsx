import React from 'react'
import getUserDetails from '@/action/user'
import type { Metadata } from 'next'
import Pdf from '@/components/common/Pdf'
import PitchForm from '@/components/profile/startup/PitchForm'

type Props = {
  searchParams: { [key: string]: string | string[] | undefined }
}

export const metadata: Metadata = {
  title: 'Bank Details - Profile | Bizdateup',
  description: 'Your Bank Details Overview',
}

export default async function Pitch({ searchParams }: Props) {
  const editState: boolean = !searchParams.edit

  const { role, user } = await getUserDetails()
  if (!user || role !== 'startup') {
    return <>Loading</>
  }
  const data = [
    {
      label: 'Pitch',
      value: user.pitch,
    },
  ]

  return (
    <div className="flex h-full w-full flex-col">
      {!searchParams.edit ? (
        // <div className="grid grid-cols-1 w-full">
        <Pdf pitch={user.pitch} />
      ) : (
        // </div>
        <PitchForm initialUsers={user} />
      )}
    </div>
  )
}
