import type { Metadata } from 'next'
import getUserDetails from '@/action/user'
import React from 'react'

export const metadata: Metadata = {
  title: 'Startup Profile | Bizdateup',
  description: 'This pages holds your startup details.',
}
export default async function StartupProfile() {
  const { role, user } = await getUserDetails()
  if (!user) {
    return <>Loading</>
  }
  if (role !== 'startup') {
    return
  }

  return <div className="h1 p-20">{user?.companyName}</div>
}
