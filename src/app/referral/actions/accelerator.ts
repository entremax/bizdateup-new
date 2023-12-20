'use server'
import { fetch } from 'next/dist/compiled/@edge-runtime/primitives'
import { redirect } from 'next/navigation'
import { acceleratorApis } from '@/lib/accelerator'
import { getCookieData } from '@/action/user'
import { InviteeDetails } from '@/types/referral'
import { cookies } from 'next/headers'

export async function createAccelerator() {
  const { token, user_id, accelerator_id } = await getCookieData()

  if (accelerator_id) {
    return redirect('/referral')
  }

  const res = await fetch(acceleratorApis.create, {
    method: 'POST',
    body: JSON.stringify({ id: user_id }),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      console.log(res)
      return res.json()
    })
    .catch((e) => {
      throw new Error(e)
    })
  console.log('Creating Accelerator', res)
  if (res?.code !== 200) {
    return redirect('/dashboard')
  }
  if (res?.data?.code === 400) {
    return redirect('/referral')
  }
  return res?.data?.code === 200
}

/**
 * Use this method to retrieve the details of an invitee.
 * @returns  @type {Promise<Object>} - A promise that resolves to the invitee details.
 */
export async function getInviteeDetails() {
  let { accelerator_id, referrer_id } = await getCookieData()

  if (!accelerator_id) {
    return redirect('/dashboard')
  }
  console.log(acceleratorApis.inviteeDetails + accelerator_id)
  const res: { data: { data: InviteeDetails } } = await fetch(
    acceleratorApis.inviteeDetails + referrer_id,
  )
    .then((res) => {
      return res.json()
    })
    .catch((e) => {
      throw new Error(e)
    })
  return { ...res.data.data, accelerator_id, referrer_id }
}

export async function setAcceleratorCookies(accelerator: {
  _id: string
  referral_code: string
}) {
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
