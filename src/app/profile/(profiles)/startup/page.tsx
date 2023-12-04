import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Startup Profile | Bizdateup',
  description: 'This pages holds your startup details.',
}
export default function StartupProfile() {
  return <div className="h1 p-20">Startup Profile</div>
}
