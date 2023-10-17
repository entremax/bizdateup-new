import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  IInvestmentApiResponse,
  IInvestmentDataResponse,
  ISendOtpResponseData,
} from '@/types';
import { RootState } from '@/store';
const baseUrl = `${process.env.NEXT_PUBLIC_APP_TEST_URL}/`;
const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).authUser.token;
    console.log(token);
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

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
        console.log(response);
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
      transformResponse: (response: IInvestmentApiResponse,) => {
        return response.data.data[0].totalamount;
      },
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
