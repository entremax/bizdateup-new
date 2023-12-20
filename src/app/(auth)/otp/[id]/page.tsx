import React from 'react'
import OtpField from '@/components/auth/otp_field'
import Link from 'next/link'
import GoBack from '@/components/back_btn'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: ' Verify OTP | Bizdateup ',
  description: 'Verify your OTP to explore Bizdateup',
}
export default function VerifyEmail({ params }: { params: { id: string } }) {
  const { id } = params
  return (
    <div className="auth">
      <div className="auth_container p-5">
        <div className={'hidden w-full justify-start sm:flex'}>
          <GoBack />
        </div>
        <OtpField id={id} />
        <div className="flex gap-1 py-4 pb-6 font-semibold">
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
