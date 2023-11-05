import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '@/store';
import {apiUri} from "@/lib/utils";
import {PaymentData} from "@/types";

const baseUrl = apiUri().v0

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

export const paymentApi = createApi({
  reducerPath:'paymentApi',
  baseQuery,
  endpoints: (builder) => ({
    offlinePayment: builder.mutation({
      query: (paymentData :PaymentData) => ({
        url: 'createofflineOrder',
        method: 'POST',
        body: paymentData,
      }),
      transformResponse: (
        response,
      ) => {
        return response;
      },
      transformErrorResponse: (
        response: { status: string | number },
      ) => response.status,
    }),
    onlinePayment: builder.mutation({
      query: (paymentData:PaymentData) => ({
        url: 'createOrder',
        method: 'POST',
        body: paymentData,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
      transformResponse: (response) => {
        return response;
      },
      transformErrorResponse: (
        response: { status: string | number },
      ) => response.status,
    }),
  }),
});

export const {
  useOfflinePaymentMutation,
  useOnlinePaymentMutation
} = paymentApi;
