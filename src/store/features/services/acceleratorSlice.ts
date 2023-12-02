import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from '@/store'
import { apiUri } from '@/lib/utils'
import { acceleratorApis } from '@/lib/accelerator'
import { RedeemResponse } from '@/types/referral'

const baseUrl = apiUri().v0
const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).authUser.token

    if (token) {
      headers.set('authorization', `Bearer ${token}`)
    }
    return headers
  },
})

export const acceleratorApi = createApi({
  reducerPath: 'accelerator-api',
  baseQuery,
  endpoints: (builder) => ({
    redeemCommission: builder.mutation({
      query: (data) => ({
        url: acceleratorApis.redeemCommission,
        method: 'POST',
        body: data,
      }),
      transformResponse: (response: RedeemResponse) => {
        console.log(response)
        return response.data
      },
      transformErrorResponse: (response: { status: string | number }) =>
        response.status,
    }),
  }),
})

export const { useRedeemCommissionMutation } = acceleratorApi
