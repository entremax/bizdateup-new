import UserAuthForm from '../_components/_user-auth-form';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Login | Bizdateup',
  description: 'Login to Bizdateup site',
}
const Login = () => {
  // const cookieStore = cookies()
  // const token = cookieStore.get('token')
  // if(token){
  //   redirect('/dashboard')
  // }
  return (
    <div className='auth'>
    <div
      className='auth_container'>
      <Image
        className=''
        src='/logo.svg'
        width={80}
        height={60}
        alt='Logo'
      />
      <h2 className='font-bold text-primary-dark'>Log in to your account</h2>
      <p className='text-sm text-gray-400'>
        Take a first step towards investing journey with bizdateup
      </p>
      <UserAuthForm requestType={"login"}/>
      <div className=' warp text-gray-400 text-sm !my-6 justify-center items-center'>
        
          By signing up I agree to
        {" "}
          <Link
            href={'/privacy-policy'}
            className=' underline text-brust'
          >
            Privacy policy
          </Link>
        {" "}
          &
        {" "}
          <Link
            href={'/terms'}
            className=' underline text-brust'
          >
            Terms of Service
          </Link>
      </div>
      <div className=' text-gray-950 font-medium gap-1'>
        Don&apos;t have an account?
        {" "}
        <Link
          href={'/signup'}
          className='text-primary'
        >
          Create account
        </Link>
      </div>
    </div>
  </div>);
};

export default Login;
