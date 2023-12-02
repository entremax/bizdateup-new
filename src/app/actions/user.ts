'use server'
import { cookies } from 'next/headers'
import { redirect, RedirectType } from 'next/navigation'
import { fetch } from 'next/dist/compiled/@edge-runtime/primitives'
import { apiUri } from '@/lib/utils'
import { DataInner } from '@/types'
import { Cookies } from '@/types/referral'

export default async function getUserDetails() {
  const token = cookies().get('token')?.value
  const user_id = cookies().get('user_id')?.value
  if (!user_id || !token) {
    redirect('/login', 'push' as RedirectType)
  }
  const res = await fetch(apiUri().v0 + '/investor/fetchbyid', {
    next: { revalidate: 0 },
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
      throw new Error(e)
    })
  return {
    refId: user_id,
    status: res?.data?.status,
    token: token,
    user: res?.data?.data as DataInner,
  }
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

  if (!token || !user_id || !(accelerator_id && referrer_id)) {
    return redirect('/login')
  }
  return {
    token,
    user_id,
    accelerator_id,
    referrer_id,
  } as Cookies
}