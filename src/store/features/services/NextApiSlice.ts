import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ILogoutStatus, ISendOtpResponseData } from '@/types'

const baseUrl = `/`
const baseQuery = fetchBaseQuery({
  baseUrl,
})

export const NextApi = createApi({
  reducerPath: 'NextApi',
  baseQuery,
  endpoints: (builder) => ({
    verifyOtp: builder.mutation({
      query: (otpData) => ({
        url: baseUrl + 'v0/verify-otp',
        method: 'POST',
        body: otpData,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
      transformResponse: (response: ISendOtpResponseData) => {
        return {
          responseCode: response.data.code,
          token: response.data.token,
          refId: response.refId,
          
          status: response.data.status,
          investorData: {
            ...response.data.data,
          },
        }
      },
      transformErrorResponse: (response: {
        status: number
        data: { error: string; message?: string }
      }) => response,
    }),
    logout: builder.mutation({
      query: () => ({
        url: 'v0/logout',
        headers: {
          'Content-Type': 'application/json',
        },
      }),
      transformErrorResponse: (response: ILogoutStatus) => response,
    }),
    getUser: builder.mutation<any, void>({
      query: () => ({
        url: baseUrl + 'v0/me',
        headers: {
          'Content-Type': 'application/json',
        },
      }),
      transformResponse: (response: any) => {
        return {
          token: response.data.token,
          refId: response.data.refId,
          
          status: response.data.status ?? [],
          investorData: {
            ...response.data.user,
          },
        }
      },
      transformErrorResponse: (response: {
        status: number
        data: { error: string; message?: string }
      }) => response,
    }),
  }),
})

export const { useVerifyOtpMutation, useLogoutMutation, useGetUserMutation } =
  NextApi
