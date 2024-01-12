'use client'
import React from 'react'
import TeamForm from './_components/TeamForm'
import TeamMembers from './_components/TeamMembers'
import { useAppSelector } from '@/store/hooks'
import { useSearchParams } from 'next/navigation'

export default function TeamMember() {
  const {user,token,role}=useAppSelector(({authUser})=>authUser)
  const searchParams=useSearchParams()
  const editState=Boolean(searchParams.get('edit'))
  
  if (!user||role!=='startup'||!token) {
    return null
  }

  return (
    <div className="flex flex-col">
      {editState ? (
        <TeamMembers startup={user} />
      ) : (
        <TeamForm initialUsers={user} />
      )}
    </div>
  )
}
