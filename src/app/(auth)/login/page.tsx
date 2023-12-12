import React from 'react'
import type { Metadata } from 'next'
import LoginComponent from '@/components/auth/LoginComponent'

export const metadata: Metadata = {
  title: 'Login | Bizdateup',
  description: 'Login to Bizdateup site',
}
const Login = () => {
  return <LoginComponent role={'investor'} />
}

export default Login
