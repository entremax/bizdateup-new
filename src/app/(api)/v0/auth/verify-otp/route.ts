import {NextRequest, NextResponse} from "next/server";
import {ISendOtpResponseData} from "@/types";
import {cookies} from "next/headers";
const baseUrl = `${process.env.NEXT_PUBLIC_APP_TEST_URL}`;

interface OtpVerifyData {
  code: string;
  refId: string;
}
export async function POST(req:NextRequest){
    const otpData=(await req.json()) as OtpVerifyData
    if(!otpData){
      return NextResponse.json({
        status:false,
        message:'Otp Data Not Found'
      })
    }
    const res=await fetch(
      `${baseUrl}/auth/verify-register-otp`,
      {
        method: 'POST',
        headers:{
          'Content-Type': 'application/json',
        },
        body:JSON.stringify(otpData)
      }
    )
      const data = (await res.json()) as ISendOtpResponseData
    if(data.data.code===200){
      cookies().set({
        name:'token',
        value:data.data.token,
        httpOnly:true,
        path:'/',
        maxAge:60*60
      })
      cookies().set({
        name:'logged-in',
        value:'true',
        maxAge:60*60
      })
      return NextResponse.json(data)
    }else{
      return NextResponse.json(data.data)
    }
}