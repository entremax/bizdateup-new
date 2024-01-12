'use client'
import React from 'react'
import Pdf from '@/components/common/Pdf'
import PitchForm from '@/components/profile/startup/PitchForm'
import { useAppSelector } from '@/store/hooks'
import { useSearchParams } from 'next/navigation'

export default function Pitch() {
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
    <div className="flex h-full w-full flex-col">
      {editState ? (
        // <div className="grid grid-cols-1 w-full">
        <Pdf pitch={user.pitch} />
      ) : (
        // </div>
        <PitchForm initialUsers={user} />
      )}
    </div>
  )
}
