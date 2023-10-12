import {
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import {ISendOtpResponseData} from '@/types';

const baseUrl = `${process.env.NEXT_PUBLIC_APP_TEST_URL}/auth/`;
const baseQuery = fetchBaseQuery({baseUrl});

export const api = createApi({
  baseQuery,
  // extractRehydrationInfo(action, { reducerPath }) {
  //   // when persisting the root reducer
  //   if (action.type === REHYDRATE) {
  //     return action.payload[reducerPath]
  //   }
  //
  //   // when persisting the api reducer
  //   if (
  //     action.type === REHYDRATE &&
  //     action.key === 'root'
  //   ) {
  //     return action.payload
  //   }
  // },
  endpoints: (builder) => ({
    sendOtp: builder.mutation({
      query: ({emailData, url}) => ({
        url,
        method: 'POST',
        body: emailData,
      }),
      transformResponse: (
        response: { data: ISendOtpResponseData },
        meta,
        arg
      ) => response.data,
      transformErrorResponse: (
        response: { status: string | number },
        meta,
        arg
      ) => response.status,
    }),
    verifyOtp: builder.mutation({
      query: (otpData) => (
        {
          url: baseUrl + 'verify-register-otp',
          method: 'POST',
          body: otpData,
          headers: {
            'Content-Type': 'application/json',
          },
        }),
      transformResponse: (
        response: ISendOtpResponseData,
        meta,
        arg
      ) => {
        console.log(response)
        return {
          responseCode: response.data.code,
          token: response.data.token,
          refId: response.refId,
          
          status: response.data.status,
          investorData: {
            ...response.data.data
          }
        }
      },
      transformErrorResponse: (
        response: { status: string | number },
        meta,
        arg
      ) => response.status
    }),
    getInvestorsTotalInvestment:builder.mutation({
      query: (refId) => (
        {
          url: baseUrl + 'investment/totalInvestmentbyinvestor',
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          params:refId
        }),
      transformResponse: (
        response: ISendOtpResponseData,
        meta,
        arg
      ) => {
        console.log(response)
        return {
          responseCode: response.data.code,
          token: response.data.token,
          refId: response.refId,
          
          status: response.data.status,
          investorData: {
            ...response.data.data
          }
        }
      },
      transformErrorResponse: (
        response: { status: string | number },
        meta,
        arg
      ) => response.status
    })
  }),
});

export const {useSendOtpMutation, useVerifyOtpMutation} = api;
