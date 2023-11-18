import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import UserAuthForm from '../_components/_user-auth-form'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: ' Signup | Bizdateup ',
  description: 'Create an account to join  Bizdateup.',
}
const Signup = () => {
  return (
    <div className="auth">
      <div className="auth_container">
        <Image className="" src="/logo.svg" width={80} height={60} alt="Logo" />
        <h2 className="m-0 pt-0 font-bold text-primary-dark">Create account</h2>
        <p className="mx-auto my-2 text-sm text-gray-400">
          Take a first step towards investing journey with bizdateup
        </p>
        <UserAuthForm requestType={'signup'} />
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
          <Link href={'/login'} className="text-primary">
            Login
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Signup
