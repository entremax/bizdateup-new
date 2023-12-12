import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default function StartupDashboard() {
  const role = cookies().get('role')?.value
  if (role && role !== 'startup') {
    return redirect('/dashboard')
  }
  return <div>Startup Dashboard</div>
}
