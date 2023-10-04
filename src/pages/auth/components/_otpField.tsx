import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useRouter } from 'next/router';
import { Button } from 'antd';
import { setVerify } from '@/store/features/reducers/user/authSlice';
import { setInvestor } from '@/store/features/reducers/user/investor';
import { useVerifyOtpMutation } from '@/store/features/apiSlice';

interface OtpVerifyData {
  code: string;
  refId: string;
}

interface reqToVerify {
  url: string;
  reqData: OtpVerifyData;
  method: 'POST' | 'PUT' | 'DELETE';
}

/**
 *
 * @constructor
 */
export default function OtpField() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [verifyOtp] = useVerifyOtpMutation();
  const [otp, setOtp] = useState('');
  const { id } = router.query;
  const { temp_auth_medium, investorUserId } = useAppSelector(
    ({ authUser }) => authUser
  );
  React.useEffect(() => {
    if (!temp_auth_medium) {
      router.back();
    } else if (id !== investorUserId.toString()) {
      router.back();
    }
  }, [temp_auth_medium, id, investorUserId]);

  async function handleVerifyOtp() {
    const reqData: OtpVerifyData = {
      code: otp,
      refId: investorUserId,
    };

    const response = await verifyOtp(reqData);

    if ('data' in response) {
      const data = response.data;
      console.log(data);
      if (response.data.code === 200) {
        const loginMethod = localStorage.getItem('loginMethod');
        const loginMethod2 = localStorage.getItem('loginMethod2');

        if (loginMethod === 'local' && loginMethod2 === 'signup') {
          localStorage.removeItem('tokenInvestor');
          localStorage.removeItem('authDataInvestor');
          localStorage.removeItem('authRefInvestor');
          dispatch(setVerify({ isVerified: false }));
          dispatch(
            setInvestor({
              authDataInvestor: data.data?.data,
              tokenInvestor: data.data?.token,
              authRefINvestor: data.data?.refId,
            })
          );
        }
      }
    }
  }

  return (
    <>
      <div className='grid justify-center items-center text-center w-full md:max-w-[32rem] md:min-w-max'>
        <h2 className='text-primary-dark font-bold text-center !m-0'>
          OTP Verification
        </h2>
        <p
          className={
            'text-gray-400 text-sm font-light grid md:flex mt-2 sm:justify-center gap-2'
          }
        >
          Enter your OTP sent to your email{' '}
          <strong>kalyanborah456@gamil.com</strong>
        </p>
        <div
          className={
            'flex md:w-[32rem] justify-center items-center otp m-0 p-0 px-6'
          }
        >
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
        <div className='md:w-[32rem] px-12 mt-8'>
          <Button
            type={'default'}
            size={'large'}
            className={'bg-primary text-white w-full hover:!text-white'}
            onClick={handleVerifyOtp}
          >
            Continue
          </Button>
          <Button
            type={'text'}
            size={'small'}
            className={
              'bg-transparent text-primary font-semibold my-4 hover:!bg-transparent hover:!text-primary'
            }
          >
            RESEND OTP
          </Button>
        </div>
      </div>
    </>
  );
}
