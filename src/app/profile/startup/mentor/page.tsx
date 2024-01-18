'use client'
import React from 'react'
import MemberForm from './_components/MentorForm'
import Mentors from './_components/Mentors'
import { useAppSelector } from '@/store/hooks'
import { useSearchParams } from 'next/navigation'

export default function Mentor() {
  const { user, token, role } = useAppSelector(({ authUser }) => authUser)
  const searchParams = useSearchParams()
  const editState = Boolean(searchParams?.get('edit'))

  if (!user || role !== 'startup' || !token) {
    return null
  }

  return (
    <div className="flex flex-col">
      {!editState ? (
        <Mentors startup={user} />
      ) : (
        <MemberForm initialUsers={user} />
      )}
    </div>
  )
}
