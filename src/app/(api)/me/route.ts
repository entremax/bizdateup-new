import { apiUri } from '@/lib/utils'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'
import { getAcceleratorDetails } from '@/lib/accelerator'

export async function GET(req: NextRequest) {
  try {
    const token = cookies().get('token')?.value
    const user_id = cookies().get('user_id')?.value
    const accelerator_id = cookies().get('accelerator_id')?.value
    const role = cookies().get('role')?.value
    if (!token || !user_id || !role) {
      return NextResponse.json(
        {
          success: false,
          message: 'You are not authenticated',
        },
        { status: 401 },
      )
    }
    let url = '/investor/fetchbyid'
    if (role === 'startup') {
      url = '/startup/fetchStartupById'
    }
    const res = await fetch(apiUri().v0 + url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ refId: user_id }),
    })
      .then((res) => {
        return res.json()
      })
      .catch((e) => {
        console.log(e)
        return NextResponse.json(
          {
            success: false,
            error: e,
          },
          { status: 500 },
        )
      })
    const resData = {
      refId: user_id,
      status: res?.data?.status,
      token: token,
      user: res?.data?.data,
    }
    // checking if user is a new accelerator
    if (res?.data?.data.isAccelerator && !accelerator_id) {
      const accelerator = await getAcceleratorDetails(user_id, token)
      if (!accelerator) {
        return
      }
      /**
       * Represents the ID of an invitee.
       */
      cookies().set({
        name: 'accelerator_id',
        value: accelerator?.referral_code as string,
        httpOnly: true,
        path: '/',
        maxAge: 60 * 60,
      })
    }
    return NextResponse.json({
      success: true,
      data: resData,
      message: 'User Fetched Successfully',
    })
  } catch (e) {
    return NextResponse.json(
      {
        success: false,
        error: e,
      },
      { status: 500 },
    )
  }
}
