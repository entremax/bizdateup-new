'use client';
import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useRouter, useSearchParams} from 'next/navigation';
import { Button } from 'antd';
import { setUser, setVerify } from '@/store/features/reducers/user/authSlice';
import {
  useSendOtpMutation
} from '@/store/features/services/apiSlice';
import {
  validateEmailOrPhone,
} from '@/lib/utils';
import { setNotification } from '@/store/features/reducers/others/notificationSlice';
import {useVerifyOtpMutation} from "@/store/features/services/NextApiSlice";

interface OtpVerifyData {
  code: string;
  refId: string;
}

export interface NavigationDict {
  [key: string]: {
    error: string;
    route: string;
  };
}

export type NavigationKey = 'profile' | 'pan' | 'aadhar' | 'bank' | 'other';

const navigationData: NavigationDict = {
  profile: {
    error: 'Please complete your profile',
    route: '/layoutprofile/',
  },
  pan: {
    error: 'Please complete your KYC details',
    route: '/layoutprofile/kyc',
  },
  aadhar: {
    error: 'Please complete your KYC details',
    route: '/layoutprofile/kyc',
  },
  bank: {
    error: 'Please complete your bank details',
    route: '/layoutprofile/bankdetail',
  },
  other: {
    error: 'Please complete your profile',
    route: '/layoutprofile/others',
  },
};

/**
 *
 * @constructor
 */
export default function OtpField({ id }: { id: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const dispatch = useAppDispatch();
  const [verifyOtp, { isLoading, error: verificationError }] =
    useVerifyOtpMutation();
  const [otp, setOtp] = useState('');
  const actionType = searchParams.get('type');
  const { temp_auth_medium, investorUserId } = useAppSelector(
    ({ authUser }) => authUser
  );
  const [sendOtp, { isLoading: reSending,error:sendOtpError }] = useSendOtpMutation();

  React.useEffect(() => {
    if (!temp_auth_medium) {
      router.back();
    } else if (id !== investorUserId?.toString()) {
      router.back();
    }
  }, [temp_auth_medium, id, investorUserId]);

  async function handleResend() {
    if (!temp_auth_medium) {
      return;
    }
    const emailOrPhone = validateEmailOrPhone(temp_auth_medium);
    const endpoint =
      emailOrPhone === 'email'
        ? `${actionType === 'login' ? 'login/email' : 'email-signup'}`
        : `${actionType === 'login' ? 'login/phone' : 'phone-signup'}`;
    try {
      const emailData = {
        [emailOrPhone ? emailOrPhone : 'email']: temp_auth_medium,
        role: 'investor',
      };
      await sendOtp({ emailData, url: endpoint });
      dispatch(
        setNotification({
          type: 'success',
          message: 'OTP Sent Successfully',
        })
      );
    } catch (e) {
      console.log(e);
      dispatch(setNotification({ type: 'error', message: '' }));
    }
  }

  async function handleVerifyOtp() {
    if(!investorUserId || otp===''){
      dispatch(setNotification({
        type: 'error',
        message: 'Bad Request',
      }))
      return
    }
    const reqData: OtpVerifyData = {
      code: otp,
      refId: investorUserId,
    };
    const response = await verifyOtp(reqData);
    if('error' in response){
      const error=response.error
      dispatch(setNotification({
        type: 'error',
        message: 'OTP Verification Failed',
        description: `The OTP you entered is invalid. Please check it and try again.(code:${error})`
      }));
    }
    if ('data' in response) {
      const {
        responseCode,
        investorData,
        token,
        refId = investorUserId,
        status,
      } = response.data;
      
      const loginMethod = localStorage.getItem('loginMethod');
      const loginMethod2 = localStorage.getItem('loginMethod2');
      if (loginMethod === 'local' && loginMethod2 === 'signup') {
        dispatch(setVerify(false));
        localStorage.setItem("token",token);
        dispatch(
          setUser({
            userData: investorData,
            token,
            refId,
            kycStatus: [],
          })
        );
        router.push('/dashboard/');
      } else {
        if (responseCode === 200) {
          dispatch(setVerify(true));
          
          dispatch(
            setUser({
              token,
              userData: investorData,
              refId,
              kycStatus: status,
            })
          );
        } else {
          dispatch(setVerify(false));
          return;
        }

        // for (const key in navigationData) {
        //   if (status.length === 0) {
        router.push('/dashboard/');
        //     return;
        //   }
        //   const kycStatus = convertNavigationKeyToKYCStatus(
        //     key as NavigationKey
        //   );
        //
        //   if (kycStatus && status.includes(kycStatus)) {
        //     console.error(navigationData[key].error);
        //     router.push(navigationData[key].route);
        //     break;
        //   }
        // }
      }
    }
  }

  return (
    <>
      <div className='grid justify-center items-center text-center w-full md:min-w-max'>
        <h2 className='text-primary-dark font-bold text-center !m-0'>
          OTP Verification
        </h2>
        <p
          className={
            'text-gray-400 text-sm font-light grid md:flex mt-2 sm:justify-center gap-2'
          }
        >
          Enter your OTP sent to your email <strong>{temp_auth_medium}</strong>
        </p>
        <div className={'flex justify-center items-center otp m-0 p-0 px-6'}>
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
        <div className='px-12 mt-8'>
          <Button
            type={'default'}
            size={'large'}
            disabled={otp===''||isLoading}
            className={'!bg-primary !text-white w-full hover:!text-white'}
            onClick={handleVerifyOtp}
            block
          >
            {isLoading ? 'Verifying...' : 'Continue'}
          </Button>
          <Button
            type={'text'}
            size={'small'}
            disabled={reSending}
            className={
              'bg-transparent !text-primary font-semibold my-4 hover:!bg-transparent hover:!text-primary'
            }
            onClick={handleResend}
          >
            {reSending ? 'Resending...' : 'RESEND OTP'}
          </Button>
        </div>
      </div>
    </>
  );
}
