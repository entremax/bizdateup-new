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
 * @returns {Promise<InviteeDetails>} - A promise that resolves to the invitee details.
 */
export async function getInviteeDetails(): Promise<InviteeDetails> {
  try {
    const { accelerator_id, referrer_id } = await getCookieData()

    if (!accelerator_id) {
      // Assuming redirect is a function to handle redirection
      return redirect('/dashboard')
    }

    const response = await fetch(acceleratorApis.inviteeDetails + referrer_id)

    if (!response.ok) {
      throw new Error(
        `Failed to fetch invitee details. Status: ${response.status}`,
      )
    }

    const res: { data: { data: InviteeDetails } } = await response.json()

    return { ...res.data.data, accelerator_id, referrer_id }
  } catch (error) {
    console.error('Error in getInviteeDetails:', error)
    throw new Error('Failed to fetch invitee details.')
  }
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
    maxAge: 60 * 60 * 24,
  })
  cookies().set({
    name: 'referrer_id',
    value: accelerator?.referral_code as string,
    httpOnly: true,
    path: '/',
    maxAge: 60 * 60 * 24,
  })
}
