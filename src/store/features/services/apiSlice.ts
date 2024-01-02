import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {
  IInvestmentDataResponse,
  ISendOtpResponseData,
  ITotalInvestmentResponse,
} from '@/types'
import { RootState } from '@/store'
import { apiUri } from '@/lib/utils'
import { addInterest } from '@/lib/api_endpoint'
import {
  IInterestCheckResponse,
  IStartupFeedBackResponse,
} from '@/types/invest'

const baseUrl = apiUri().base
const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).authUser.token

    if (token) {
      headers.set('authorization', `Bearer ${token}`)
      headers.get('cookie')
    }
    return headers
  },
})

export const api = createApi({
  baseQuery,
  endpoints: (builder) => ({
    sendOtp: builder.mutation({
      query: ({ emailData, url }) => ({
        url: 'v0/auth/' + url,
        method: 'POST',
        body: emailData,
      }),
      transformResponse: (response: { data: ISendOtpResponseData }) => {
        return response.data
      },
      transformErrorResponse: (response: { status: string | number }) =>
        response.status,
    }),
    verifyOtp: builder.mutation({
      query: (otpData) => ({
        url: baseUrl + 'v0/auth/verify-register-otp',
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
      transformErrorResponse: (response: { status: string | number }) =>
        response.status,
    }),
    getTotalInvestment: builder.query({
      query: (refId) => ({
        url: baseUrl + 'v0/investment/totalInvestmentbyinvestor',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        params: {
          investor: refId,
        },
      }),
      transformResponse: (response: ITotalInvestmentResponse) =>
        response.data.length > 0 ? response.data[0].data.totalamount : 0,
      transformErrorResponse: (response: { status: string | number }) =>
        response.status,
    }),
    getInvestmentDetails: builder.query({
      query: (refId) => ({
        url: baseUrl + 'v0/investment/investmentbyinvestor',
        headers: {
          'Content-Type': 'application/json',
        },
        params: {
          investor: refId,
        },
      }),
      transformResponse: (response: IInvestmentDataResponse) => {
        return response.data.data
      },
      transformErrorResponse: (response: { status: string | number }) =>
        response.status,
    }),
    startupFeedback: builder.mutation({
      query: (data: IInterestCheckResponse) => {
        return {
          url: addInterest(),
          method: 'POST',
          body: {
            ...data,
          },
        }
      },
      transformResponse: (response: IStartupFeedBackResponse) => {
        if (response.data?.code === 200) {
          return response.data
        } else {
          return response.data?.message
            ? response.data?.message
            : 'Thank you for your feedback!'
        }
      },
      transformErrorResponse: (response: { status: string | number }) =>
        response.status,
    }),
    updateUser: builder.mutation({
      query: (updatedData) => ({
        url: baseUrl + 'v0/auth/email-signup-complete',
        method: 'POST',
        body: updatedData,
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
      transformErrorResponse: (response: { status: string | number }) =>
        response.status,
    }),
    updateOtherDetails: builder.mutation({
      query: (updatedData) => ({
        url: baseUrl + '/kyc/add_other',
        method: 'POST',
        body: updatedData,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
      transformResponse: (response: any) => {
        return {
          responseCode: response.data.code,
          message: response.data.message,
          status: response.data.status,
        }
      },
      transformErrorResponse: (response: { status: string | number }) =>
        response,
    }),
    updateBankDetails: builder.mutation({
      query: (updatedData) => ({
        url: baseUrl + '/kyc/verify_and_add_bank',
        method: 'POST',
        body: updatedData,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
      transformResponse: (response: ISendOtpResponseData) => {
        return {
          message: response.data.message,
          status: response.data.status,
        }
      },
      transformErrorResponse: (response: { status: string | number }) =>
        response,
    }),
    updateProfileImage: builder.mutation({
      query: (body) => ({
        url: 'v0/investor/profile_pic',
        method: 'POST',
        body,
      }),
      transformResponse: (response: any) => {
        console.log(response)
        return response.data
      },
      transformErrorResponse: (response: { status: string | number }) =>
        response,
    }),
    checkRisk: builder.mutation({
      query: (acknowledgement) => ({
        url: 'v0/investor/add_acknowledgement',
        method: 'POST',
        body: {
          acknowledgement,
        },
      }),
      transformResponse: (response: any) => {
        console.log(response)
        return response.data
      },
      transformErrorResponse: (response: { status: string | number }) =>
        response,
    }),
  }),
})

export const {
  useSendOtpMutation,
  useGetTotalInvestmentQuery,
  useGetInvestmentDetailsQuery,
  useStartupFeedbackMutation,
  useUpdateUserMutation,
  useUpdateOtherDetailsMutation,
  useUpdateBankDetailsMutation,
  useUpdateProfileImageMutation,
  useCheckRiskMutation,
} = api
