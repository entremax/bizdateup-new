'use server'
import { cookies } from 'next/headers'
import { fetch } from 'next/dist/compiled/@edge-runtime/primitives'
import { apiUri } from '@/lib/utils'
import { StartupInvestment } from '@/types'

interface NoUser {
  createdAt: null
  investorName: null
  type: null
  amountBreakdown: {}
}

export default async function getStartupInvestmentDetails(): Promise<StartupInvestment> {
  const token = cookies().get('token')?.value
  const user_id = cookies().get('user_id')?.value
  const role = cookies().get('role')?.value

  if (!user_id || !token) {
    return []
  }

  let url = `/investment/getStartupPortfolio?id=${user_id}`
  let config: any = {
    next: { revalidate: 0 },
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    // body: JSON.stringify({ id: user_id }),
  }

  const res = await fetch(apiUri().v0 + url, config)
    .then((res) => {
      // console.log("🚀 ~ file: index.tsx:41 ~ .then ~ res:", res)
      return res.json()
    })
    .catch((e) => {
      console.log(e)
      throw new Error(e)
    })

  // console.log(res.data.data?.investors);

  const startupInvestments: StartupInvestment = res?.data?.data?.investors || []

  return startupInvestments.map((investmentData) => ({
    createdAt: investmentData?.createdAt || null,
    investorName: investmentData?.investorName || null,
    type: investmentData?.type || null,
    status: investmentData?.status || null,
    amountBreakdown: investmentData?.amountBreakdown || null,
  })) as StartupInvestment
}
