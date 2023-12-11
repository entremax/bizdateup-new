import React from 'react'
import type { Metadata } from 'next'
import SignupComponent from '@/components/auth/SignupComponent'

export const metadata: Metadata = {
  title: ' Signup | Bizdateup ',
  description: 'Create an account to join  Bizdateup as an investor.',
}
const Signup = () => {
  return <SignupComponent role={'investor'} />
}

export default Signup
