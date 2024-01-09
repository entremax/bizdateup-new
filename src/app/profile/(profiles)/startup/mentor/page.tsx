import React from 'react'
import getUserDetails from '@/action/user'
import MemberForm from './_components/MentorForm'
import Mentors from './_components/Mentors'
import type { Metadata } from 'next'

type Props = {
  searchParams: { [key: string]: string | string[] | undefined }
}

export const metadata: Metadata = {
  title: 'Mentor - Profile | Bizdateup',
  description: 'Mentor Adding',
}

export default async function Mentor({ searchParams }: Props) {
  const editState: boolean = !searchParams.edit

  const { role, user } = await getUserDetails()
  if (!user || role !== 'startup') {
    return <>Loading</>
  }

  return (
    <div className="flex flex-col">
      {!searchParams.edit ? (
        <Mentors startup={user} />
      ) : (
        <MemberForm initialUsers={user} />
      )}
    </div>
  )
}
