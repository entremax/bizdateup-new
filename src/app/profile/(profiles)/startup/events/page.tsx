'use client'
import React from 'react'
import getUserDetails from '@/action/user'
import EventForm from '@/components/profile/startup/EventForm'
import Event from '@/components/profile/startup/Events'
import { useAppSelector } from '@/store/hooks'
import { useSearchParams } from 'next/navigation'


export default async function Bank() {
  const {user,token,role}=useAppSelector(({authUser})=>authUser)
  const searchParams=useSearchParams()
  const editState=Boolean(searchParams.get('edit'))
  
  if (!user||role!=='startup'||!token) {
    return null
  }
  const data = [
    {
      label: 'Pitch',
      value: user.pitch,
    },
  ]

  return (
    <div className="flex flex-col">
      {editState ? (
        <Event startup={user} />
      ) : (
        <EventForm initialUsers={user} />
      )}
    </div>
  )
}
