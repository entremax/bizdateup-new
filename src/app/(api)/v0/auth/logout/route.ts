import {NextRequest, NextResponse} from "next/server";
import {cookies, headers} from "next/headers";

export async function GET(req:NextRequest){
  try{
    if(!req.cookies.has('token')){
      return NextResponse.json({
        success:false,
        message:"You are not authenticated"
      },{status:401})
    }
    cookies().delete('logged-in')
    cookies().delete('token')
    
    return NextResponse.json({
      success:true,
      message:"Logout"
    })
  }catch(e){
    return NextResponse.json({
      success:false,
      error:e
    },{status:500})
  }
}