import React from 'react'
import getUserDetails from '@/action/user'
import EventForm from '@/components/profile/startup/EventForm'
import Event from '@/components/profile/startup/Events'

import type { Metadata } from 'next'

type Props = {
  searchParams: { [key: string]: string | string[] | undefined }
}

export const metadata: Metadata = {
  title: 'Events Details - Profile | Bizdateup',
  description: 'Your Events Details Overview',
}

export default async function Bank({ searchParams }: Props) {
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
    <div className="flex flex-col">
      {!searchParams.edit ? (
        <Event startup={user} />
      ) : (
        <EventForm initialUsers={user} />
      )}
    </div>
  )
}
