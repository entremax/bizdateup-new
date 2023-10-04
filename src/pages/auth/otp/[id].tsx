import React from "react";
import OtpField from "@/pages/auth/components/_otpField";
import Link from "next/link";
import GoBack from "@/pages/auth/otp/_backBtn";

export default function VerifyEmail() {
  return (
    <div className='auth'>
      <div
        className='auth_container'>
        <GoBack/>
        <OtpField/>
        <div className="flex font-semibold gap-1">
          <p>Already have an account?</p>{"  "}
          <Link href={"/auth/login"} className={"text-primary"}>Login</Link>
        </div>
      </div>
    </div>
  )
}
