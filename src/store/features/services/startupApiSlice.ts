import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from '@/store'
import { apiUri } from '@/lib/utils'
import { startupApis } from '@/lib/startup'
import { IStartupUpdatesResponse, StartupParameters } from '@/types/startup'
import { FetchClosedStartupResponse } from '@/types/invest'

const baseUrl = apiUri().v0
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

export const startupsApiSlice = createApi({
  reducerPath: 'startup-api',
  baseQuery,
  endpoints: (builder) => ({
    fetchStartupUpdates: builder.mutation({
      query: () => ({
        url: startupApis.fetchStartupsUpdate,
        method: 'GET',
      }),
      transformResponse: (response: IStartupUpdatesResponse) => {
        // console.log(response)
        return response.data
      },
      transformErrorResponse: (response: { status: string | number }) =>
        response.status,
    }),
    onboarding: builder.mutation({
      query: (body) => ({
        url: startupApis.onboarding,
        method: 'POST',
        body,
      }),
      transformResponse: (response: any) => {
        // console.log(response)
        return response.data
      },
      transformErrorResponse: (response: { status: string | number }) =>
        response,
    }),
    fetchForm: builder.mutation({
      query: (refId) => ({
        url: startupApis.fetchForm + '?refId=' + refId,
        method: 'GET',
      }),
      transformResponse: (response: any) => {
        return response.data
      },
      transformErrorResponse: (response: { status: string | number }) =>
        response,
    }),
    fetchByType: builder.mutation({
      query: (param: StartupParameters) => ({
        url: startupApis.fetchByType + param,
        method: 'GET',
      }),
      transformResponse: (response: any) => {
        return response.data
      },
      transformErrorResponse: (response: { status: string | number }) =>
        response,
    }),
    closedDeals: builder.mutation({
      query: () => ({
        url: startupApis.closedStartupDeals,
        method: 'GET',
      }),
      transformResponse: ({ data }: { data: FetchClosedStartupResponse }) => {
        return data.data
      },
      transformErrorResponse: (response: { status: string | number }) =>
        response,
    }),
  }),
})

export const {
  useFetchStartupUpdatesMutation,
  useOnboardingMutation,
  useFetchFormMutation,
  useFetchByTypeMutation,
  useClosedDealsMutation,
} = startupsApiSlice
