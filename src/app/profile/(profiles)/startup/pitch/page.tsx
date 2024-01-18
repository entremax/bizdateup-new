'use client'
import React from 'react'
import Pdf from '@/components/common/Pdf'
import PitchForm from '@/components/profile/startup/PitchForm'
import { useAppSelector } from '@/store/hooks'
import { useSearchParams } from 'next/navigation'
import { cn } from '@/lib/utils'

export default function Pitch() {
  const { user, token, role } = useAppSelector(({ authUser }) => authUser)
  const searchParams = useSearchParams()
  const editState = Boolean(searchParams?.get('edit'))

  if (!user || role !== 'startup' || !token) {
    return null
  }
  const data = [
    {
      label: 'Pitch',
      value: user.pitch,
    },
  ]

  return (
    <div
      className={cn(
        `flex h-[calc(100vh-10rem)] w-full flex-col ${
          !editState ? 'items-center justify-center' : ''
        }`,
      )}>
      {!editState ? (
        <>
          <Pdf pitch={user.pitch} />
        </>
      ) : (
        <PitchForm initialUsers={user} />
      )}
    </div>
  )
}
