import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {ISendOtpResponseData} from '@/types';

const baseUrl = `${process.env.NEXT_PUBLIC_APP_TEST_URL}/auth/`;
const baseQuery = fetchBaseQuery({baseUrl});

export const api = createApi({
  baseQuery,
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
      query: ({otpData}) => ({
        url: baseUrl + 'verify-register-otp',
        method: 'POST',
        body: otpData,
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
  }),
});

export const {useSendOtpMutation, useVerifyOtpMutation} = api;
