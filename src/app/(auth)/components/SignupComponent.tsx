import Image from 'next/image'
import UserAuthForm from '@/components/auth/_user-auth-form'
import Link from 'next/link'
import React from 'react'
import { UserRole } from '@/types'

type Props = {
  role: UserRole
}
const roleBasedSetup: {
  [key in UserRole]: {
    login: string
    role: UserRole
  }
} = {
  investor: {
    login: '/login/investor',
    role: 'investor',
  },
  admin: {
    login: '/login/admin',
    role: 'admin',
  },
  startup: {
    login: '/login/startup',
    role: 'startup',
  },
}
export default function SignupComponent({ role }: Props) {
  const setup = roleBasedSetup[role]
  return (
    <div className="auth">
      <div className="auth_container">
        <Image className="" src="/logo.svg" width={80} height={60} alt="Logo" />
        <h2 className="m-0 pt-0 font-bold text-primary-dark">Create account</h2>
        <p className="mx-auto my-2 text-sm text-gray-400">
          Take a first step towards investing journey with bizdateup
        </p>
        <UserAuthForm requestType={'signup'} role={setup.role} />
        <div className="!my-6 flex items-center justify-center text-sm text-gray-400">
          <p className="flex gap-1">
            By signing up I agree to
            <Link href="/privacy-policy" className=" text-brust underline">
              Privacy policy
            </Link>
            &
            <Link href={'/terms'} className=" text-brust underline">
              Terms of Service
            </Link>
          </p>
        </div>
        <div className="flex gap-1 font-medium text-gray-950">
          <p className="text-md !m-0 !p-0">Don&apos;t have an account?</p>
          <Link href={setup.login} className="text-primary">
            Login
          </Link>
        </div>
      </div>
    </div>
  )
}
