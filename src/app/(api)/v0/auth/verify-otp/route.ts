import {cookies} from "next/headers";
import {VerifyOtpServerResponse} from "@/types";
import { NextRequest } from "next/server";
interface OtpVerifyData {
  code: string;
  refId: string;
}
export async function POST(req: NextRequest) {
  try {
    const baseUrl = `${process.env.NEXT_PUBLIC_APP_TEST_URL}`;
  const otpData = (await req.json()) as OtpVerifyData;
  if (!otpData) {
    return Response.json({
      status: false,
      message: 'Otp Data Not Found'
    });
  }
  try{
  const res = await fetch(
    `${baseUrl}/auth/verify-register-otp`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(otpData)
    }
  );
  const response = (await res.json()) as VerifyOtpServerResponse;
  if(!response.data && 'status' in response  ){
    return Response.json({ success: false, error: response.status,message:'Invalid Code' },{status:parseInt(response.status)});
  }
   else if(response.data && 'token' in response.data && 'code' in response.data && response.data.code === 200){
    cookies().set({
      name: 'token',
      value: response.data.token as string,
      httpOnly: true,
      path: '/',
      maxAge: 60 * 60
    });
    cookies().set('logged-in', 'true', { maxAge: 60 * 60 });
    return Response.json({ success: true, data: response.data });
  }else if (response.data && 'error' in response.data && response.data.error) {
    return Response.json({status: false, error: response.data.message },{status:response.data.httpCode});
  }else{
    return Response.json({ success: true, data: response });
  }}
  catch (e) {
    console.log(e)
    return Response.json({status:false,error:"Something went wrong"},{status:500});
  }
  }catch (e) {
    console.log(e)
    return Response.json({status:false,error:"Something went wrong!"},{status:500})
  }
}