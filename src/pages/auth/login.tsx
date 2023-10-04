import UserAuthForm from './components/_user-auth-form';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {store} from '@/store'

const Login = () => {
  const {authUser} = store.getState()
  const {temp_email} = authUser
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
        <div className='flex text-gray-400 text-sm !my-6 justify-center items-center'>
          <p className='flex gap-1 '>
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
          <p className='text-md'>Don&apos;t have an account? </p>
          {" "}
          <Link
            href={'/auth/sign-up'}
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
