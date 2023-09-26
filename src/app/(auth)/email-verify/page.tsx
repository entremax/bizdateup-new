import React from "react";
import OtpField from "./_otpField";
import {Icons} from '@/icons'

export default function VerifyEmail() {
  return (
    <div className='p-4 min-h-full flex justify-center items-center w-screen flex-col'>
      <div
        className='mx-auto border min-w-[32rem] md:border flex p-6 flex-col justify-center items-center space-y-6 bg-white shadow-lg rounded-2xl mt-32'>
        <div className={"w-full flex justify-start"}>
          <Icons.ArrowLeft/>
        </div>
        <div className="grid justify-center w-full">
          <OtpField/>
        </div>
      
      </div>
    </div>
  )
}