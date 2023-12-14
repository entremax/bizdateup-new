'use client'
import { useSearchParams } from 'next/navigation'

export default function SocialLogin() {
  const searchParams = useSearchParams()
  const role = searchParams.get('role')
  const refId = searchParams.get('refid')
  const type = searchParams.get('type')
  const token = searchParams.get('token')

  return (
    <div className="loader-container">
      <div className="loader"></div>
      <div className="loader"></div>
    </div>
  )
}
