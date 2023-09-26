'use client';
import React, {useState} from 'react';
import {Button, Divider} from 'antd';
import Image from 'next/image';
import 'antd/dist/reset.css';

import {tempEmail} from "@/store/features/authSlice";
import {useRouter} from "next/navigation";
import {useAppDispatch} from '@/store/hooks';

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {
}

export function UserAuthForm({className, ...props}: UserAuthFormProps) {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const [withEmail, setWithEmail] = useState(false)
  const emailRef = React.useRef<HTMLInputElement | null>(null);
  
  function validateEmailOrPhone(value: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;
    if (emailRegex.test(value)) {
      return 'email';
    } else if (phoneRegex.test(value)) {
      return 'phone';
    } else {
      return false;
    }
  }
  
  const registerGoogle = () => {
    localStorage.removeItem('loginMethod2');
    localStorage.removeItem('loginMethod');
    localStorage.setItem('loginMethod2', 'logingoogle2');
    localStorage.setItem('loginMethod', 'social');
    window.open(
      `${process.env.REACT_APP_TEST_URL}/v1/auth/login/investor/google`,
      '_self'
    );
  };
  const registerFacebook = () => {
    localStorage.removeItem('loginMethod2');
    localStorage.removeItem('loginMethod');
    localStorage.setItem('loginMethod2', 'logingoogle2');
    localStorage.setItem('loginMethod', 'social');
    window.open(
      `${process.env.REACT_APP_TEST_URL}/v1/auth/login/investor/facebook`,
      '_self'
    );
  };
  const handleLoginWithEmail = () => {
    const email = emailRef.current?.value as string
    if (email === undefined) {
      return
    } else if (validateEmailOrPhone(email) === 'email') {
      dispatch(tempEmail(email))
      router.push('/email-verify',)
    }
  }
  return (
    <div className='grid col-6 w-full'>
      <form>
        <div className='grid gap-2'>
          <Button
            onClick={registerGoogle}
            type='default'
            block
            size='large'
            className='py-4 !flex !justify-between gap-2'
          >
            <Image
              src={'/google.svg'}
              className='place-self-start'
              alt='Google'
              height={28}
              width={28}
            />
            <div className="grow"></div>
            <span className='text-gray-950 !justify-self-stretch'>Continue with Google</span>
            <div className="grow"></div>
          </Button>
          <Button
            onClick={registerGoogle}
            type='default'
            block
            size='large'
            className='py-4 !flex !justify-between gap-2'
          >
            <Image
              src={'/facebook.svg'}
              className='place-self-start'
              alt='Facebook'
              height={28}
              width={28}
            />
            <div className="grow"></div>
            <span className='text-gray-950 !justify-self-stretch'>Continue with Google</span>
            <div className="grow"></div>
          </Button>
        </div>
        <Divider>
          <span className='bg-background px-2 text-textPrimary'>
            OR
          </span>
        </Divider>
        {withEmail ?
          <React.Fragment>
            <div className="grid w-full">
              <div className="relative mb-3">
                <input
                  type="email"
                  className="peer block min-h-[auto] outline-gray-300 w-full text-black rounded border-0 bg-transparent px-3 py-[0.28rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-400"
                  id="exampleFormControlInputEmail"
                  ref={emailRef}
                  placeholder="Example label"/>
                <label
                  htmlFor="exampleFormControlInputEmail"
                  className="bg-white pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-950 transition-all duration-200 ease-out -translate-y-[1.1rem] scale-[0.8] text-primary"
                >Email
                </label>
              </div>
              <Button
                type='default'
                block
                size='middle'
                className='py-4 !flex !justify-between gap-2'
                onClick={handleLoginWithEmail}
              >
                <div className="grow"></div>
                <span className='text-primary !justify-self-stretch'>Send OTP</span>
                <div className="grow"></div>
              </Button>
            </div>
          </React.Fragment> : null
        }
        {!withEmail && <Button
            type='default'
            block
            size='large'
            className='py-4 !flex !justify-between gap-2'
            onClick={() => setWithEmail(!withEmail)}
        >
            <Image
                src={'/e-mail.svg'}
                className='place-self-start'
                alt='email'
                height={26}
                width={26}
            />
            <div className="grow"></div>
            <span className='text-primary !justify-self-stretch'>Continue with Email</span>
            <div className="grow"></div>
        </Button>}
      </form>
    </div>
  );
}