import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  ITotalInvestmentResponse,
  IInvestmentDataResponse,
  ISendOtpResponseData,
} from '@/types';
import { RootState } from '@/store';
const baseUrl = `${process.env.NEXT_PUBLIC_APP_TEST_URL}/`;
const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).authUser.token;
    
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

export const api = createApi({
  baseQuery,
  endpoints: (builder) => ({
    sendOtp: builder.mutation({
      query: ({ emailData, url }) => ({
        url: 'auth/' + url,
        method: 'POST',
        body: emailData,
      }),
      transformResponse: (
        response: { data: ISendOtpResponseData },
      ) => {
        return response.data;
      },
      transformErrorResponse: (
        response: { status: string | number },
      ) => response.status,
    }),
    verifyOtp: builder.mutation({
      query: (otpData) => ({
        url: baseUrl + 'auth/verify-register-otp',
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
        };
      },
      transformErrorResponse: (
        response: { status: string | number },
      ) => response.status,
    }),
    getTotalInvestment: builder.query({
      query: (refId) => ({
        url: baseUrl + 'investment/totalInvestmentbyinvestor',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        params: {
          investor: refId,
        },
      }),
      transformResponse: (response: ITotalInvestmentResponse,) =>response.data.length > 0 ? response.data[0].data.totalamount : 0,
      transformErrorResponse: (
        response: { status: string | number },
       
      ) => response.status,
    }),
    getInvestmentDetails: builder.query({
      query: (refId) => ({
        url: baseUrl + 'investment/investmentbyinvestor',
        headers: {
          'Content-Type': 'application/json',
        },
        params: {
          investor: refId,
        },
      }),
      transformResponse: (response: IInvestmentDataResponse) => {
        return response.data.data;
      },
      transformErrorResponse: (
        response: { status: string | number },
      ) => response.status,
    }),
  }),
});

export const {
  useSendOtpMutation,
  useVerifyOtpMutation,
  useGetTotalInvestmentQuery,
  useGetInvestmentDetailsQuery,
} = api;
