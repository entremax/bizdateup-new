import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'

export default function Profile() {
  const role = cookies().get('role')?.value ?? ''
  return redirect(`/profile${role === 'investor' ? '/investor' : '/startup'}`)
}
