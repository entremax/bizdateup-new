import UserAuthForm from '../_components/_user-auth-form';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next'
import ReduxProvider from "@/store/Provider";

export const metadata: Metadata = {
  title: 'Login | Bizdateup',
  description: 'Login to Bizdateup site',
}
const Login = () => {
  return (<div className='auth'>
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
      <ReduxProvider>
        <UserAuthForm requestType={"login"}/>
      </ReduxProvider>
      <div className='flex text-gray-400 text-sm !my-6 justify-center items-center'>
        <p className='flex gap-1 '>
          By signing up I agree to
          <Link
            href='/privacy_policy'
            className=' underline text-brust'
          >
            Privacy policy
          </Link>
          &
          <Link
            href={'/terms'}
            className=' underline text-brust'
          >
            Terms of Service
          </Link>
        </p>
      </div>
      <div className='flex text-gray-950 font-medium gap-1'>
        <p className='text-md !p-0 !m-0'>Don&apos;t have an account? </p>
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
