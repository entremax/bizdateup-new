import React from 'react'
import getUserDetails from '@/action/user'
import TeamForm from './_components/TeamForm'
import TeamMembers from './_components/TeamMembers'
import type { Metadata } from 'next'

type Props = {
  searchParams: { [key: string]: string | string[] | undefined }
}

export const metadata: Metadata = {
  title: 'Team Details - Profile | Bizdateup',
  description: 'Your Team Details',
}

export default async function TeamMember({ searchParams }: Props) {
  const editState: boolean = !searchParams.edit

  const { role, user } = await getUserDetails()
  if (!user || role !== 'startup') {
    return <>Loading</>
  }

  return (
    <div className="flex flex-col">
      {!searchParams.edit ? (
        <TeamMembers startup={user} />
      ) : (
        <TeamForm initialUsers={user} />
      )}
    </div>
  )
}
