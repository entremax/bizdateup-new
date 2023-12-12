import React from 'react'
import type { Metadata } from 'next'
import LoginComponent from '@/components/auth/LoginComponent'

export const metadata: Metadata = {
  title: 'Startup Login | Bizdateup',
  description: 'Login to Bizdateup site as startup',
}
const Login = () => {
  return <LoginComponent role={'startup'} />
}

export default Login
