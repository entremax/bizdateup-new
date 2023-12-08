'use client'
import React, { useState } from 'react'
import OtpInput from 'react-otp-input'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { useRouter, useSearchParams } from 'next/navigation'
import { Button } from 'antd'
import { setUser } from '@/reducers/user/authSlice'
import { useSendOtpMutation } from '@/services/apiSlice'
import { validateEmailOrPhone } from '@/lib/utils'
import { setNotification } from '@/reducers/others/notificationSlice'
import { useVerifyOtpMutation } from '@/services/NextApiSlice'
import localUser from '@/lib/getToken'

interface OtpVerifyData {
  code: string
  refId: string
}

export type NavigationKey = 'profile' | 'pan' | 'aadhar' | 'bank' | 'other'

// const navigationData: NavigationDict = {
//   profile: {
//     error: 'Please complete your profile',
//     route: '/layoutprofile/',
//   },
//   pan: {
//     error: 'Please complete your KYC details',
//     route: '/layoutprofile/kyc',
//   },
//   aadhar: {
//     error: 'Please complete your KYC details',
//     route: '/layoutprofile/kyc',
//   },
//   bank: {
//     error: 'Please complete your bank details',
//     route: '/layoutprofile/bankdetail',
//   },
//   other: {
//     error: 'Please complete your profile',
//     route: '/layoutprofile/others',
//   },
// };

/**
 *
 * @constructor
 */
export default function OtpField({ id }: { id: string }) {
  const { setUserInLocal } = localUser
  const router = useRouter()
  const searchParams = useSearchParams()
  const dispatch = useAppDispatch()
  const [verifyOtp, { isLoading }] = useVerifyOtpMutation()
  const [otp, setOtp] = useState('')
  const actionType = searchParams.get('type')
  const userRole = searchParams.get('role')
  const { temp_auth_medium, investorUserId } = useAppSelector(
    ({ authUser }) => authUser,
  )
  const [sendOtp, { isLoading: reSending }] = useSendOtpMutation()

  React.useEffect(() => {
    if (!temp_auth_medium) {
      router.back()
    } else if (id !== investorUserId?.toString()) {
      router.back()
    }
  }, [temp_auth_medium, id, investorUserId])

  async function handleResend() {
    if (!temp_auth_medium) {
      return
    }
    const emailOrPhone = validateEmailOrPhone(temp_auth_medium)
    const endpoint =
      emailOrPhone === 'email'
        ? `${actionType === 'login' ? 'login/email' : 'email-signup'}`
        : `${actionType === 'login' ? 'login/phone' : 'phone-signup'}`
    try {
      const emailData = {
        [emailOrPhone ? emailOrPhone : 'email']: temp_auth_medium,
        role: userRole,
      }
      await sendOtp({ emailData, url: endpoint })
      dispatch(
        setNotification({
          type: 'success',
          message: 'OTP Sent Successfully',
        }),
      )
    } catch (e) {
      console.log(e)
      dispatch(setNotification({ type: 'error', message: '' }))
    }
  }

  // TODO - Fix redirection issue (partially fixed)
  async function handleVerifyOtp() {
    if (!investorUserId || otp === '') {
      dispatch(
        setNotification({
          type: 'error',
          message: 'Bad Request',
        }),
      )
      return
    }

    // TODO- Refactor the use of verifyOTP api
    const reqData: OtpVerifyData = {
      code: otp,
      refId: investorUserId,
    }
    const response = await verifyOtp(reqData)
    if (response) {
      setOtp('')
    }
    if ('error' in response) {
      const error = response.error
      dispatch(
        setNotification({
          type: 'error',
          message: 'OTP Verification Failed',
          description: `The OTP you entered is invalid. Please check it and try again.(code:${error})`,
        }),
      )
    }
    if ('data' in response) {
      const {
        responseCode,
        investorData,
        token,
        refId = investorUserId,
        status,
      } = response.data

      const loginMethod = localStorage.getItem('loginMethod')
      const loginMethod2 = localStorage.getItem('loginMethod2')
      if (loginMethod === 'local' && loginMethod2 === 'signup') {
        localStorage.setItem('token', token)
        // dispatch(
        //   setUser({
        //     userData: investorData,
        //     token,
        //     refId,
        //     kycStatus: status,
        //     premiumMember: investorData.membership.isMember !== 'no',
        //   }),
        // )
        setUserInLocal({
          dispatch,
          setUser,
          user: {
            userData: investorData,
            token,
            refId,
            kycStatus: status,
            premiumMember: investorData.membership.isMember !== 'no',
          },
        })
        return router.push('/dashboard')
      } else {
        if (responseCode === 200) {
          // dispatch(
          //   setUser({
          //     token,
          //     userData: investorData,
          //     refId,
          //     kycStatus: status,
          //     premiumMember: investorData.membership.isMember !== 'no',
          //   }),
          // )

          setUserInLocal({
            dispatch,
            setUser,
            user: {
              userData: investorData,
              token,
              refId,
              kycStatus: status,
              premiumMember: investorData.membership.isMember !== 'no',
            },
          })
          router.refresh()
          return router.push('/dashboard')
        }
      }
    }
  }

  return (
    <>
      <div className="grid w-full items-center justify-center text-center md:min-w-max">
        <h2 className="!m-0 text-center font-bold text-primary-dark">
          OTP Verification
        </h2>
        <p
          className={
            'my-2 grid gap-2 text-sm font-light text-gray-400 sm:justify-center md:flex'
          }>
          Enter your OTP sent to your email <strong>{temp_auth_medium}</strong>
        </p>
        <div className={'otp m-0 flex items-center justify-center p-0 px-6'}>
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={4}
            inputStyle={{
              margin: '0 1rem',
              fontSize: '2rem',
              borderRadius: ' 4px',
              border: '1px solid rgba(0, 0, 0, 0.3)',
            }}
            renderSeparator={<span> </span>}
            renderInput={(props) => <input {...props} />}
            shouldAutoFocus
          />
        </div>
        <div className="mt-8 px-12">
          <Button
            type={'default'}
            size={'large'}
            disabled={otp === '' || isLoading}
            className={'w-full !bg-primary !text-white hover:!text-white'}
            onClick={handleVerifyOtp}
            block>
            {isLoading ? 'Verifying...' : 'Continue'}
          </Button>
          <Button
            type={'text'}
            size={'small'}
            disabled={reSending}
            className={
              'my-4 bg-transparent font-semibold !text-primary hover:!bg-transparent hover:!text-primary'
            }
            onClick={handleResend}>
            {reSending ? 'Resending...' : 'RESEND OTP'}
          </Button>
        </div>
      </div>
    </>
  )
}
