import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import UserAuthForm from "../_components/_user-auth-form";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: ' Signup | Bizdateup ',
  description: 'Create an account to join  Bizdateup.',
}
const Signup = () => {
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
        <h2 className='font-bold text-primary-dark m-0 pt-0'>Create account</h2>
        <p className='text-sm text-gray-400 mx-auto my-2'>
          Take a first step towards investing journey with bizdateup
        </p>
        <UserAuthForm requestType={"signup"}/>
        <div className='flex text-gray-400 text-sm !my-6 justify-center items-center'>
          <p className='flex gap-1'>
            By signing up I agree to
            <Link
              href='/privacy-policy'
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
          <p className='text-md !m-0 !p-0'>Don&apos;t have an account?</p>
          <Link
            href={'/login'}
            className='text-primary'
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
