import { apiUri } from '@/lib/utils'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  try {
    const token = cookies().get('token')?.value
    const user_id = cookies().get('user_id')?.value

    if (!token || !user_id) {
      return NextResponse.json(
        {
          success: false,
          message: 'You are not authenticated',
        },
        { status: 401 },
      )
    }

    const res = await fetch(apiUri().v0 + '/investor/fetchbyid', {
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
    return NextResponse.json({
      success: true,
      data: {
        refId: user_id,
        status: res?.data?.status,
        token: token,
        user: res?.data?.data,
      },
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
