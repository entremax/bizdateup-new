import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  ITotalInvestmentResponse,
  IInvestmentDataResponse,
  ISendOtpResponseData, ILogoutStatus,
} from '@/types';
import { RootState } from '@/store';
const baseUrl = `/`;
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

export const NextApi = createApi({
  reducerPath:'NextApi',
  baseQuery,
  endpoints: (builder) => ({
    verifyOtp: builder.mutation({
      query: (otpData) => ({
        url: baseUrl + 'v0/auth/verify-otp',
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
    logout: builder.mutation({
      query: () => ({
        url: 'v0/auth/logout',
        headers: {
          'Content-Type': 'application/json',
        },
      }),
      transformErrorResponse: (
        response: ILogoutStatus,
      ) => response,
    }),
  }),
});

export const {
  useVerifyOtpMutation,useLogoutMutation
} = NextApi;
