import React from "react";
import OtpField from "@/app/(auth)/_components/_otpField";
import Link from "next/link";
import GoBack from "../_backBtn";
import ReduxProvider from "@/store/Provider";

export default function VerifyEmail({params}:{params:{id:string}}) {
  const {id}=params
  return (
    <div className='auth'>
      <div
        className='auth_container p-5'>
        <ReduxProvider>
          <GoBack/>
          <OtpField id={id}/>
        </ReduxProvider>
        <div className="flex font-semibold gap-1">
          <p className={"reset"}>Already have an account?</p>{"  "}
          <Link href={"/auth/login"} className={"text-primary"}>Login</Link>
        </div>
      </div>
    </div>
  )
}
