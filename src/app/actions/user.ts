'use server'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { fetch } from 'next/dist/compiled/@edge-runtime/primitives'
import { apiUri } from '@/lib/utils'
import { Cookies } from '@/types/referral'
import { InvestorUserData, KYCStatusArray, StartupUserData } from '@/types'

interface NoUser {
  role: undefined
  refId: ''
  status: KYCStatusArray
  token: null
  user: null
}

export default async function getUserDetails(): Promise<
  InvestorUserData | StartupUserData | NoUser
> {
  const token = cookies().get('token')?.value
  const user_id = cookies().get('user_id')?.value
  const role = cookies().get('role')?.value

  if (!user_id || !token) {
    return { user: null, role: undefined, status: [], token: null, refId: '' }
  }

  let url = '/investor/fetchbyid'
  let config: any = {
    next: { revalidate: 0 },
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ refId: user_id }),
  }
  if (role === 'startup') {
    url = '/startup/fetchStartupByRef?refId=' + user_id
    config = {
      next: { revalidate: 0 },
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  }
  const res = await fetch(apiUri().v0 + url, config)
    .then((res) => {
      return res.json()
    })
    .catch((e) => {
      console.log(e)
      throw new Error(e)
    })
  return {
    role: role as 'investor' | 'startup' | undefined,
    refId: user_id,
    status: res?.data?.status,
    token: token,
    user: res?.data?.data,
  } as InvestorUserData | StartupUserData
}

/**
 * Retrieves the cookie data. Don't use in client components
 *
 * The cookie data containing token, user_id, accelerator_id, and isLoggedin.
 * If the token or user_id cookie is missing, the function will redirect to the login page.
 *
 *
 * @example
 * const cookieData = await getCookieData();
 *
 * if (cookieData) {
 *   // access the cookie data
 *   console.log(cookieData.token);
 *   console.log(cookieData.user_id);
 *   console.log(cookieData.accelerator_id);
 *   console.log(cookieData.isLoggedin);
 * }
 */
export async function getCookieData() {
  const token = cookies().get('token')?.value
  const user_id = cookies().get('user_id')?.value
  const accelerator_id = cookies().get('accelerator_id')?.value
  const referrer_id = cookies().get('referrer_id')?.value
  const role = cookies().get('role')?.value
  if (
    !token ||
    !user_id ||
    (role !== 'startup' && !(accelerator_id && referrer_id)) ||
    !role
  ) {
    return redirect('/login')
  }
  return {
    token,
    user_id,
    accelerator_id,
    referrer_id,
    role,
  } as Cookies
}
