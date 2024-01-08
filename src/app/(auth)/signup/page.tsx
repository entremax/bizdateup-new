import React from 'react'
import type { Metadata } from 'next'
import SignupComponent from '@/components/auth/SignupComponent'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

type Props = {
  searchParams: { [key: string]: string | string[] | undefined }
}
export const metadata: Metadata = {
  title: ' Signup | Bizdateup ',
  description: 'Create an account to join  Bizdateup as an investor.',
}

const Signup = ({ searchParams }: Props) => {
  const referer = headers().get('referer')
  const isNewUser = Boolean(searchParams.new_user)

  function checkReferer() {
    if (!referer) {
      return isNewUser
    }
    const url = new URL(referer).pathname
    console.log(url)
    if (url === '/login' && isNewUser) return false
    if (url !== '/login' && isNewUser) return true
    return url === '/signup' && isNewUser
  }

  if (checkReferer()) {
    return redirect('/signup')
  }

  return <SignupComponent role={'investor'} />
}
export default Signup