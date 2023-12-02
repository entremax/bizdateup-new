import React from 'react'
import OtpField from '../../components/otp_field'
import Link from 'next/link'
import GoBack from '../_backBtn'

export default function VerifyEmail({ params }: { params: { id: string } }) {
  const { id } = params
  return (
    <div className="auth">
      <div className="auth_container p-5">
        <GoBack />
        <OtpField id={id} />
        <div className="flex gap-1 font-semibold">
          <p className={'reset'}>Already have an account?</p>
          {'  '}
          <Link href={'/login'} className={'text-primary'}>
            Login
          </Link>
        </div>
      </div>
    </div>
  )
}
