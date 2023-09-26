'use client'
import React, {useState} from 'react';
import OtpInput from 'react-otp-input';
import {useAppSelector} from "@/store/hooks";

export default function OtpField() {
  const [otp, setOtp] = useState('');
  const {temp_email} = useAppSelector(({authUser}) => authUser)
  
  return (
    <>
      <h4>Enter your OTP sent to email {temp_email}</h4>
      <OtpInput
        value={otp}
        onChange={setOtp}
        numInputs={4}
        inputStyle={{
          minWidth: '3rem !important',
          maxWidth: '3rem  !important',
          height: '3rem',
          margin: '0 1rem',
          fontSize: '2rem',
          borderRadius: ' 4px',
          border: '1px solid rgba(0, 0, 0, 0.3)'
        }}
        renderSeparator={<span>  </span>}
        renderInput={(props) => <input {...props} />}
        shouldAutoFocus
      />
    </>
  );
}