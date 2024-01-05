import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'
import { apiUri } from '@/lib/utils'
import { VerifyOtpServerResponse } from '@/types'
import { fetch } from 'next/dist/compiled/@edge-runtime/primitives'
import { getAcceleratorDetails } from '@/lib/accelerator'

interface OtpVerifyData {
  code: string
  refId: string
}

export async function POST(req: NextRequest) {
  try {
    const baseUrl = apiUri().v0
    let referedUrl = req.headers.get('referer')
    const otpData = (await req.json()) as OtpVerifyData
    if (referedUrl) {
      const url = new URL(
        referedUrl ?? 'https://bizdateup-uat.vercel.app/referral',
      )
      referedUrl = url.pathname
    }
    if (!otpData) {
      return Response.json({
        status: false,
        message: 'Otp Data Not Found',
      })
    }
    try {
      const res = await fetch(`${baseUrl}/auth/verify-register-otp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(otpData),
      })
      const response = (await res.json()) as VerifyOtpServerResponse
      if (!response.data && 'status' in response) {
        return NextResponse.json(
          { success: false, error: response.status, message: 'Invalid Code' },
          { status: parseInt(response.status) },
        )
      } else if (
        response.data &&
        'token' in response.data &&
        'code' in response.data &&
        response.data.code === 200 &&
        'refId' in response.data
      ) {
        cookies().set({
          name: 'user_id',
          value: response.data.refId as string,
          httpOnly: true,
          path: '/',
          maxAge: 60 * 60,
        })

        if (
          //@ts-ignore
          (response.data.data?.role === 'investor' &&
            //@ts-ignore
            response.data.data.isAccelerator) ??
          false
        ) {
          const accelerator = await getAcceleratorDetails(
            //@ts-ignore
            response.data.data._id,
            //@ts-ignore
            response.data.token,
          )

          cookies().set({
            name: 'accelerator_id',
            value: accelerator?._id as string,
            httpOnly: true,
            path: '/',
            maxAge: 60 * 60,
          })
          cookies().set({
            name: 'referrer_id',
            value: accelerator?.referral_code as string,
            httpOnly: true,
            path: '/',
            maxAge: 60 * 60,
          })
        }
        cookies().set({
          name: 'token',
          value: response.data?.token as string,
          httpOnly: true,
          path: '/',
          maxAge: 60 * 60,
        })
        cookies().set('logged-in', 'true', { maxAge: 60 * 60 })
        //@ts-ignore
        cookies().set('role', response.data.data?.role ?? 'startup', {
          maxAge: 60 * 60,
        })
        console.log('Cookies set successfully')
        return NextResponse.json({
          success: true,
          data: { ...response.data, referedUrl },
        })
      } else if (
        response.data &&
        'error' in response.data &&
        response.data.error
      ) {
        return NextResponse.json(
          { status: false, error: response.data.message },
          { status: response.data.httpCode },
        )
      } else {
        return NextResponse.json({
          success: true,
          data: { ...response, referedUrl },
        })
      }
    } catch (e) {
      console.log(e)
      return NextResponse.json(
        { status: false, error: 'Something went wrong' },
        { status: 500 },
      )
    }
  } catch (e) {
    console.log(e)
    return NextResponse.json(
      { status: false, error: 'Something went wrong!' },
      { status: 500 },
    )
  }
}
