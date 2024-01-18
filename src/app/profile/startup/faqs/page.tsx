'use client'
import React from 'react'
import FaqForm from '@/components/profile/startup/FaqForm'
import Faq from '@/components/faq'
import { useAppSelector } from '@/store/hooks'
import { useSearchParams } from 'next/navigation'

export default function Bank() {
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
    <div className="flex flex-col">
      {!editState ? (
        <div className="grid grid-cols-1">
          <Faq custom faqData={user.faq} />
        </div>
      ) : (
        <FaqForm initialUsers={user} />
      )}
    </div>
  )
}
