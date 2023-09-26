import { UserAuthForm } from '@/components/user-auth-form';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const Login = () => {
  return (
    <div className='p-4 min-h-full flex justify-center items-center w-screen flex-col'>
      <div className='md:mx-auto border md:border flex p-6 flex-col justify-center items-center space-y-6 bg-white shadow-lg rounded-2xl mt-32'>
        <Image
          className=''
          src='/logo.svg'
          width={100}
          height={80}
          alt='Logo'
        />
        <h2 className='font-bold text-primary'>Create account</h2>
        <p className='text-md'>
          Take a first step towards investing journey with bizdateup
        </p>
        <UserAuthForm />
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
          <p className='text-md'>Don&apos;t have an account?</p>
          <Link
            href={'/log-in'}
            className='text-primary'
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
