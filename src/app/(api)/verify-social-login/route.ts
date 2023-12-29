import { NextRequest, NextResponse } from 'next/server'
import { apiUri } from '@/lib/utils'
import { SocialLoginBody } from '@/types/socialLogin'
import { VerifyOtpServerResponse } from '@/types'
import { cookies } from 'next/headers'
import { getAcceleratorDetails } from '@/lib/accelerator'

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as SocialLoginBody | undefined | null
    if (!body) {
      return Response.json({
        status: false,
        message: 'Request details not found.',
      })
    }
    const { refId, token } = body
    const response = await fetch(apiUri().v0 + '/auth/verify-socialLogin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        refId,
      }),
    })
    if (!response.ok) {
      return Response.json(
        {
          status: false,
          message: 'Something went wrong',
        },
        { status: 500 },
      )
    }
    let apiResponse: VerifyOtpServerResponse
    try {
      apiResponse = (await response.json()) as VerifyOtpServerResponse
      console.log(apiResponse)
      if (
        apiResponse.data &&
        'token' in apiResponse.data &&
        'code' in apiResponse.data &&
        apiResponse.data.code === 200 &&
        'refId' in apiResponse.data
      ) {
        cookies().set({
          name: 'user_id',
          value: apiResponse.data.refId as string,
          httpOnly: true,
          path: '/',
          maxAge: 60 * 60,
        })
        //@ts-ignore
        if (apiResponse.data.data.isAccelerator) {
          const accelerator = await getAcceleratorDetails(
            //@ts-ignore
            apiResponse.data.data._id,
            //@ts-ignore
            apiResponse.data.token,
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
          value: apiResponse.data?.token as string,
          httpOnly: true,
          path: '/',
          maxAge: 60 * 60,
        })
        cookies().set('logged-in', 'true', { maxAge: 60 * 60 })
        //@ts-ignore
        cookies().set('role', apiResponse.data.data?.role ?? '', {
          maxAge: 60 * 60,
        })
        console.log('Cookies set successfully')
        return NextResponse.json({ success: true, data: apiResponse.data })
      } else if (
        apiResponse.data &&
        'error' in apiResponse.data &&
        apiResponse.data.error
      ) {
        return NextResponse.json(
          { status: false, error: apiResponse.data.message },
          { status: apiResponse.data.httpCode },
        )
      } else {
        return NextResponse.json({ success: true, data: apiResponse })
      }
    } catch (e) {
      console.error('Error parsing JSON:', e)
      return Response.json(
        {
          status: false,
          message: 'Error parsing JSON',
        },
        { status: 404 },
      )
    }
  } catch (e) {
    return Response.json(
      {
        status: false,
        message: 'Server Error',
      },
      { status: 500 },
    )
  }
}
