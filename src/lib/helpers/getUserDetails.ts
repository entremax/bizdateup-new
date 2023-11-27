'use server'
import { cookies } from 'next/headers'
import { apiUri } from '../utils'
import { redirect, RedirectType } from 'next/navigation'

async function getUserDetails() {
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
      throw new Error('Something went wrong')
    })
  return {
    refId: user_id,
    status: res?.data?.status,
    token: token,
    user: res?.data?.data,
  }
}

export default getUserDetails
