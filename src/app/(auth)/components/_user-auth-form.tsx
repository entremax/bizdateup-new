'use client'
import React, { useState } from 'react'
import { Button, Divider, Input } from 'antd'
import { useRouter } from 'next/navigation'
import { useAppDispatch } from '@/store/hooks'
import { Icons } from '@/components/icons/icon'
import { setInvestorId, temp_values } from '@/reducers/user/authSlice'
import { validateEmailOrPhone } from '@/lib/utils'
import { useSendOtpMutation } from '@/services/apiSlice'
import { setNotification } from '@/reducers/others/notificationSlice'
import { UserRole } from '@/types'
import { notifyUser } from '@/components/notification'

interface UserAuthFormProps {
  className?: string
  requestType: 'login' | 'signup'
  role: UserRole
}

export default function UserAuthForm({
  className,
  requestType,
  role,
}: UserAuthFormProps) {
  const router = useRouter()
  const dispatch = useAppDispatch()

  const baseUrl = `${process.env.NEXT_PUBLIC_APP_TEST_URL}/auth/`
  const url = requestType === 'login' ? `${baseUrl}login/` : baseUrl

  const [withEmail, setWithEmail] = useState(false)
  const [email, setEmail] = useState('')
  const [loader, setLoader] = useState(false) // Fix variable name

  const [sendOtp, { isLoading }] = useSendOtpMutation()

  const setLocalStorageValues = () => {
    if (requestType === 'login') {
      localStorage.removeItem('loginMethod2')
      localStorage.removeItem('loginMethod')
      localStorage.setItem('loginMethod2', 'logingoogle2')
      localStorage.setItem('loginMethod', 'social')
    } else {
      localStorage.setItem('loginMethod2', 'signupGoogle')
      localStorage.setItem('loginMethod', 'social')
    }
  }

  const redirectToUrl = (urlPath: string) => {
    window.open(`${url}${urlPath}`, '_self')
  }

  const usingGoogle = () => {
    setLocalStorageValues()
    redirectToUrl('investor/google')
  }

  const usingFacebook = () => {
    setLocalStorageValues()
    redirectToUrl('investor/facebook')
  }

  async function performAuthentication(actionType: string) {
    localStorage.setItem('loginMethod', 'local')
    localStorage.setItem('loginMethod2', actionType)

    if (email === '') {
      return
    }

    const emailOrPhone = validateEmailOrPhone(email)
    if (emailOrPhone) {
      dispatch(temp_values(email))
      const endpoint =
        emailOrPhone === 'email'
          ? `${actionType === 'login' ? 'login/email' : 'email-signup'}`
          : `${actionType === 'login' ? 'login/phone' : 'phone-signup'}`
      const emailData = { [emailOrPhone]: email, role: role }
      sendOtp({ emailData, url: endpoint })
        .unwrap()
        .then((res) => {
          if (res.code === 200) {
            notifyUser('success', 'OTP Sent Successfully')
            setLoader(false)
            dispatch(
              setInvestorId(res.data?.refId ? res.data.refId : res.refId),
            )
            router.push(
              `/otp/${
                res.data?.refId ?? res.refId
              }?type=${actionType}?role=${role}`,
            )
          } else if (res.code === 404) {
            notifyUser(
              'error',
              res.message ?? 'Something went wrong',
              `Please create an account using ${
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? 'email' : 'phone'
              } ${email} before proceeding.`,
            )
            setLoader(false)
          } else if (res.code === 401 && res.message === 'ALREADY_EXIST') {
            notifyUser(
              'error',
              'OTP Delivery Failed',
              'This user already exists. Please try to log in instead.',
            )
          } else {
            notifyUser(
              'error',
              'Something is wrong!!',
              res.message ?? undefined,
            )
          }
        })
        .catch((e) => {
          notifyUser('error', 'Something Went wrong', e.message ?? undefined)
        })
    } else {
      dispatch(
        setNotification({
          type: 'error',
          message: 'Invalid input',
          description: 'Please enter a valid email or phone number.',
        }),
      )
    }
  }

  async function handleRegister() {
    await performAuthentication('signup')
  }

  async function handleLogin() {
    await performAuthentication('login')
  }

  return (
    <div className={`col-6 grid w-full px-12 ${className}`}>
      <div className="mt-4 grid gap-4">
        <Button
          onClick={usingGoogle}
          type="default"
          block
          size="large"
          className="!flex !h-12 items-center !justify-between gap-2 !text-gray-900">
          <Icons.Google height={22} width={22} />
          <div className="grow"></div>
          <span className=" !justify-self-stretch font-semibold">
            Continue with Google
          </span>
          <div className="grow"></div>
        </Button>
        <Button
          onClick={usingFacebook}
          type="default"
          block
          size="large"
          className="!flex !h-12 items-center !justify-between gap-2 !text-gray-900">
          <Icons.Facebook height={22} width={22} />
          <div className="grow"></div>
          <span className=" !justify-self-stretch font-semibold">
            Continue with Facebook
          </span>
          <div className="grow"></div>
        </Button>
      </div>
      <Divider className="my-3">
        <span className="bg-background text-textPrimary px-2">OR</span>
      </Divider>
      {withEmail ? (
        <div className="grid w-full">
          <div className="relative mb-6">
            <Input
              size="large"
              type={'text'}
              className="focus:placeholder:opacity-400 data-[te-input-state-active]:!placeholder:opacity-400 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-600 peer block min-h-[auto] w-full rounded-sm border-0 bg-transparent px-3 py-[0.28rem] font-medium leading-[1.6] text-[#000] outline-none !outline-gray-300 transition-all duration-200 ease-linear focus:border-sky-500 focus:outline-none peer-focus:text-black-lighter motion-reduce:transition-none dark:text-neutral-500 dark:placeholder:text-neutral-400 dark:peer-focus:text-primary"
              id="FormControlInputEmail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email or phone number"
            />

            <label
              htmlFor="FormControlInputEmailLabel"
              className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] -translate-y-[1.1rem] scale-[0.8] truncate bg-white pt-[0.37rem] font-medium leading-[1.6] !text-gray-900 text-black transition-all duration-200 ease-out">
              {email !== ''
                ? validateEmailOrPhone(email) === false
                  ? 'Email/Phone'
                  : validateEmailOrPhone(email) === 'email'
                    ? 'Email'
                    : 'Phone'
                : 'Email/Phone'}
            </label>
          </div>
          <Button
            type="default"
            size="large"
            disabled={
              (email === '' && validateEmailOrPhone(email) !== false) ||
              isLoading
            }
            className="!flex !h-10 !justify-between gap-2 !bg-primary disabled:text-primary"
            onClick={requestType === 'login' ? handleLogin : handleRegister}>
            <div className="grow"></div>
            <span className="!justify-self-stretch text-primary text-white">
              {loader ? 'Sending OTP' : 'Send OTP'}
            </span>
            <div className="grow"></div>
          </Button>
        </div>
      ) : null}
      {!withEmail && (
        <Button
          type="default"
          block
          size="large"
          className="!flex !h-12 items-center !justify-between gap-2 !bg-light-shadow"
          onClick={() => setWithEmail(!withEmail)}>
          <Icons.Email height={22} width={22} />
          <div className="grow"></div>
          <span className="!justify-self-stretch text-primary">
            Continue with Email/Phone
          </span>
          <div className="grow"></div>
        </Button>
      )}
    </div>
  )
}
