import React from 'react'
import type { Metadata } from 'next'
import LoginComponent from '@/components/auth/LoginComponent'
import { headers } from 'next/headers'

export const metadata: Metadata = {
  title: 'Login | Bizdateup',
  description: 'Login to Bizdateup site',
}
const Login = () => {
  const referer = headers().get('referer')
  return <LoginComponent role={'investor'} referer={referer} />
}

export default Login
