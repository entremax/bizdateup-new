import {UserAuthForm} from '@/components/user-auth-form';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import store from '@/store'

const Login = () => {
  const {authUser} = store.getState()
  const {temp_email} = authUser
  console.log(temp_email)
  return (
    <div className='p-4 min-h-full flex justify-center items-center w-screen flex-col'>
      <div
        className='mx-auto border md:border flex p-6 flex-col justify-center items-center space-y-6 bg-white shadow-lg rounded-2xl mt-32'>
        <Image
          className=''
          src='/logo.svg'
          width={100}
          height={80}
          alt='Logo'
        />
        <h2 className='font-bold text-primary'>Log in to your account</h2>
        <p className='text-md'>
          Take a first step towards investing journey with bizdateup
        </p>
        <UserAuthForm/>
        <div className='flex text-gray-400'>
          <p className='flex gap-1'>
            By signing up I agree to
            <Link
              href='/privacy-policy'
              className='font-medium underline'
            >
              Privacy policy
            </Link>
            &
            <Link
              href={'/terms'}
              className='font-medium underline'
            >
              Terms of Service
            </Link>
          </p>
        </div>
        <div className='flex text-gray-950 font-medium'>
          <p className='text-md'>Don&apos;t have an account? </p>
          {" "}
          <Link
            href={'/sign-up'}
            className='text-primary'
          >
            Create account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
