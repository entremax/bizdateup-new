import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from '@/store'
import { apiUri } from '@/lib/utils'
import { startupApis } from '@/lib/startup'
import { IStartupUpdatesResponse } from '@/types/startup'

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
        console.log(response)
        return response.data
      },
      transformErrorResponse: (response: { status: string | number }) =>
        response.status,
    }),
  }),
})

export const { useFetchStartupUpdatesMutation } = startupsApiSlice
