import React from 'react'
import type { Metadata } from 'next'
import SignupComponent from '@/components/auth/SignupComponent'

export const metadata: Metadata = {
  title: 'Startup Signup | Bizdateup ',
  description: 'Create an account to join  Bizdateup as a startup.',
}
const Signup = () => {
  return <SignupComponent role={'startup'} />
}

export default Signup
