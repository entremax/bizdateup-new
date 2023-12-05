import { apiUri } from '../utils'

const baseUrl = apiUri().v0

export const acceleratorApis = {
  create: baseUrl + '/accelerator/create',
  acceleratorDetails: baseUrl + '/accelerator/fetchdata?id=',
  inviteeDetails: baseUrl + '/accelerator/invitee?id=',
  redeemCommission: '/accelerator/request_payment',
  verifyAccelerator: '/accelerator/verify',
}

export async function getAcceleratorDetails(user_id: string, token: string) {
  console.log(token)
  console.log(acceleratorApis.acceleratorDetails + user_id)
  const res: any = await fetch(acceleratorApis.acceleratorDetails + user_id, {
    next: { revalidate: 600 },
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      return res.json()
    })
    .catch((e) => {
      console.log(e)
      throw new Error(e)
    })
  console.log('Res', JSON.stringify(res))
  if (res?.code !== 200) {
    return null
  }
  let data = null as { _id: string; referral_code: string } | null
  console.log(res.data.data)
  if (res.data.data) {
    data = {
      _id: res.data.data._id,
      referral_code: res.data.data.referal_code,
    }
  }
  return data
}
