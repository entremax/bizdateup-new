import Image from 'next/image'
import UserAuthForm from '@/components/auth/_user-auth-form'
import Link from 'next/link'
import React from 'react'
import { UserRole } from '@/types'

type Props = {
  role: UserRole
  referer?: string | null
}

const roleBasedSetup = {
  investor: {
    signup: '/signup',
    role: 'investor',
  },
  admin: {
    signup: '/signup/admin',
    role: 'admin',
  },
  startup: {
    signup: '/signup/startup',
    role: 'startup',
  },
}
export default function LoginComponent({ role, referer }: Props) {
  const setup = roleBasedSetup[role]
  return (
    <div className="auth">
      <div className="auth_container">
        <Image className="" src="/logo.svg" width={80} height={60} alt="Logo" />
        <h2 className="font-bold text-primary-dark">Log in to your account</h2>
        <p className="text-sm text-gray-400">
          Take a first step towards investing journey with bizdateup
        </p>
        <UserAuthForm requestType={'login'} role={role} referer={referer} />
        <div className=" warp !my-6 items-center justify-center text-sm text-gray-400">
          By signing up I agree to{' '}
          <Link href={'/privacy-policy'} className=" text-brust underline">
            Privacy policy
          </Link>{' '}
          &{' '}
          <Link href={'/terms'} className=" text-brust underline">
            Terms of Service
          </Link>
        </div>
        <div className=" gap-1 font-medium text-gray-950">
          Don&apos;t have an account?{' '}
          <Link href={setup.signup} className="text-primary">
            Create account
          </Link>
        </div>
      </div>
    </div>
  )
}
