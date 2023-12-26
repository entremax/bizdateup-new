import type { Metadata } from 'next'
import { DataInner } from '@/types'
import getUserDetails from '@/action/user'

export const metadata: Metadata = {
  title: 'Startup Profile | Bizdateup',
  description: 'This pages holds your startup details.',
}
export default async function StartupProfile() {
  const { user }: { user: DataInner } = await getUserDetails()
  console.log(user)
  return <div className="h1 p-20">Startup Profile</div>
}
