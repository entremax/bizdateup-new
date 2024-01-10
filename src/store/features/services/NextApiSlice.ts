import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ILogoutStatus, ISendOtpResponseData } from '@/types'
import { SocialLoginBody } from '@/types/socialLogin'
// there's a bug here if you add '/api' here the end url will be look like this 'http://127.0.0.1:3000/api/api/v0/verify-otp'
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
        url: baseUrl + 'verify-otp',
        method: 'POST',
        body: otpData,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
      transformResponse: (response: ISendOtpResponseData) => {
        console.log(response)
        return {
          responseCode: response.data.code,
          token: response.data.token,
          refId: response.refId,

          status: response.data.status,
          investorData: {
            ...response.data.data,
          },
          referedUrl: response.referedUrl,
        }
      },
      transformErrorResponse: (response: {
        status: number
        data: { error: string; message?: string }
      }) => response,
    }),
    logout: builder.mutation({
      query: () => ({
        url: 'logout',
        headers: {
          'Content-Type': 'application/json',
        },
      }),
      transformErrorResponse: (response: ILogoutStatus) => response,
    }),
    getUser: builder.mutation<any, void>({
      query: () => ({
        url: baseUrl + 'me',
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
    OAuthLogin: builder.mutation<any, SocialLoginBody>({
      query: (body) => ({
        url: '/verify-social-login',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body,
      }),
      transformResponse: (response: ISendOtpResponseData) => {
        return {
          responseCode: response.data.code,
          token: response.data.token,
          refId: response.data.refId,
          status: response.data.status ?? [],
          investorData: response.data.data,
          referedUrl: response.referedUrl,
        }
      },
      transformErrorResponse: (response: {
        status: number
        data: { error: string; message?: string }
      }) => response,
    }),
  }),
})

export const {
  useVerifyOtpMutation,
  useLogoutMutation,
  useOAuthLoginMutation,
  useGetUserMutation,
} = NextApi
