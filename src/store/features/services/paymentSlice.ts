import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from '@/store'
import { apiUri } from '@/lib/utils'
import {
  IPaymentResponse,
  OfflinePayments,
  OnlinePaymentData,
} from '@/types/invest'
import { acceleratorApis } from '@/lib/accelerator'
import { RedeemResponse } from '@/types/referral'

const baseUrl = apiUri().v0

type IPaymentRequest = {
  payment_mode: 'online' | 'offline'
  paymentData: OnlinePaymentData | OfflinePayments
}
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

export const paymentApi = createApi({
  reducerPath: 'payment',
  baseQuery,
  endpoints: (builder) => ({
    // offlinePayment: builder.mutation({
    //   query: (paymentData :OnlinePaymentData|OfflinePayments) => ({
    //     url: 'createofflineOrder',
    //     method: 'POST',
    //     body: paymentData,
    //   }),
    //   transformResponse: (
    //     response,
    //   ) => {
    //     return response;
    //   },
    //   transformErrorResponse: (
    //     response: { status: string | number },
    //   ) => response.status,
    // }),
    // onlinePayment: builder.mutation({
    //   query: (paymentData:OnlinePaymentData|OfflinePayments) => ({
    //     url: 'createOrder',
    //     method: 'POST',
    //     body: paymentData,
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //   }),
    //   transformResponse: (response) => {
    //     return response;
    //   },
    //   transformErrorResponse: (
    //     response: { status: string | number },
    //   ) => response.status,
    // }),
    payment: builder.mutation({
      query: ({ payment_mode = 'online', paymentData }: IPaymentRequest) => ({
        url: payment_mode === 'offline' ? 'createofflineOrder' : 'createOrder',
        method: 'POST',
        body: paymentData,
      }),
      transformResponse: (response: IPaymentResponse) => {
        return response.data
      },
      transformErrorResponse: (response: {
        status?: string | number
        data?: any
        error?: string
      }) => response,
    }),
    onlinePaymentVerify: builder.mutation({
      query: ({ order_id }: { order_id: string }) => ({
        url: '/payment/verifyPaymentOrder',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: { order_id },
      }),
      transformResponse: (response: {
        data: { code: number; message: string }
      }) => {
        return response.data
      },
      transformErrorResponse: (response: {
        status?: string | number
        data?: any
        error?: string
      }) => response,
    }),
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

export const {
  usePaymentMutation,
  useOnlinePaymentVerifyMutation,
  useRedeemCommissionMutation,
} = paymentApi
