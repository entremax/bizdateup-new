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
      query: (token) => ({
        url: startupApis.fetchStartupsUpdate,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      transformResponse: (response: IStartupUpdatesResponse) => {
        // console.log(response)
        return response.data??undefined
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
        return response.data??undefined
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
        return response.data??undefined
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

    updateCompanyDetails: builder.mutation({
      query: (updatedData) => ({
        url: baseUrl + '/startup/general-details',
        method: 'POST',
        body: updatedData,
        // headers: {
        //   'Content-Type': 'application/json',
        // },
      }),
      transformResponse: (response: any) => {
        console.log('🚀 ~ file: startupApiSlice.ts:106 ~ response:', response)
        return {
          responseCode: response.data.code,
          message: response.data.message,
          status: response.data.status,
        }
      },
      transformErrorResponse: (response: { status: string | number }) =>
        response,
    }),
    updatePitch: builder.mutation({
      query: (updatedData) => ({
        url: baseUrl + '/startup/pitch',
        method: 'POST',
        body: updatedData,
        // headers: {
        //   'Content-Type': 'application/json',
        // },
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
    updateTeam: builder.mutation({
      query: (updatedData) => ({
        url: baseUrl + '/startup/teams',
        method: 'POST',
        body: updatedData,
        // headers: {
        //   'Content-Type': 'application/json',
        // },
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
    updateMentor: builder.mutation({
      query: (updatedData) => ({
        url: baseUrl + '/startup/mentors',
        method: 'POST',
        body: updatedData,
        // headers: {
        //   'Content-Type': 'application/json',
        // },
      }),
      transformResponse: (response: any) => {
        return {
          responseCode: response?.data?.code,
          message: response?.data?.message,
          status: response?.data?.status,
        }
      },
      transformErrorResponse: (response: { status: string | number }) =>
        response,
    }),

    deleteMentor: builder.mutation({
      query: (mentorData) => ({
        url: `${baseUrl}/startup/mentor?refId=${mentorData.refId}&delId=${mentorData.delId}`,
        method: 'DELETE',
        data: mentorData,
      }),
      transformResponse: (response: any) => {
        return {
          responseCode: response?.data?.code,
          message: response?.data?.message,
          status: response?.data?.status,
        }
      },
      transformErrorResponse: (response) => response,
    }),

    deleteTeam: builder.mutation({
      query: (teamData) => ({
        url: `${baseUrl}/startup/team?refId=${teamData.refId}&delId=${teamData.delId}`,
        method: 'DELETE',
        data: teamData,
      }),
      transformResponse: (response: any) => {
        return {
          responseCode: response?.data?.code,
          message: response?.data?.message,
          status: response?.data?.status,
        }
      },
      transformErrorResponse: (response) => response,
    }),
    deleteEvent: builder.mutation({
      query: (teamData) => ({
        url: `${baseUrl}/startup/event?refId=${teamData.refId}&delId=${teamData.delId}`,
        method: 'DELETE',
        data: teamData,
      }),
      transformResponse: (response: any) => {
        return {
          responseCode: response?.data?.code,
          message: response?.data?.message,
          status: response?.data?.status,
        }
      },
      transformErrorResponse: (response) => response,
    }),
    deleteFaq: builder.mutation({
      query: (teamData) => ({
        url: `${baseUrl}/startup/faq?refId=${teamData.refId}&delId=${teamData.delId}`,
        method: 'DELETE',
        data: teamData,
      }),
      transformResponse: (response: any) => {
        return {
          responseCode: response?.data?.code,
          message: response?.data?.message,
          status: response?.data?.status,
        }
      },
      transformErrorResponse: (response) => response,
    }),
    deleteDealfile: builder.mutation({
      query: (teamData) => ({
        url: `${baseUrl}/startup/due_file?refId=${teamData.refId}&delId=${teamData.delId}`,
        method: 'DELETE',
        data: teamData,
      }),
      transformResponse: (response: any) => {
        return {
          responseCode: response?.data?.code,
          message: response?.data?.message,
          status: response?.data?.status,
        }
      },
      transformErrorResponse: (response) => response,
    }),

    updateFaq: builder.mutation({
      query: (updatedData) => ({
        url: baseUrl + '/startup/faqs',
        method: 'POST',
        body: updatedData,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
      transformResponse: (response: any) => {
        return {
          responseCode: response?.data?.code,
          message: response?.data.message,
          status: response?.data?.status,
        }
      },
      transformErrorResponse: (response: { status: string | number }) =>
        response,
    }),
    updateEvent: builder.mutation({
      query: (updatedData) => ({
        url: baseUrl + '/startup/events',
        method: 'POST',
        body: updatedData,
        // headers: {
        //   'Content-Type': 'application/json',
        // },
      }),
      transformResponse: (response: any) => {
        return {
          responseCode: response?.data?.code,
          message: response?.data?.message,
          status: response?.data?.status,
        }
      },
      transformErrorResponse: (response: { status: string | number }) =>
        response,
    }),
    updateDealterm: builder.mutation({
      query: (updatedData) => ({
        url: baseUrl + '/startup/deal-terms',
        method: 'POST',
        body: updatedData,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
      transformResponse: (response: any) => {
        return {
          responseCode: response?.data?.code,
          message: response?.data?.message,
          status: response?.data?.status,
        }
      },
      transformErrorResponse: (response: { status: string | number }) =>
        response,
    }),
    updateDuefile: builder.mutation({
      query: (updatedData) => ({
        url: baseUrl + '/startup/addDueFiles',
        method: 'POST',
        body: updatedData,
        // headers: {
        //   'Content-Type': 'application/json',
        // },
      }),
      transformResponse: (response: any) => {
        return {
          responseCode: response?.data?.code,
          message: response?.data?.message,
          status: response?.data?.status,
        }
      },
      transformErrorResponse: (response: { status: string | number }) =>
        response,
    }),
    updateLogo: builder.mutation({
      query: (updatedData) => ({
        url: baseUrl + '/startup/addDueFile',
        method: 'POST',
        body: updatedData,
        // headers: {
        //   'Content-Type': 'application/json',
        // },
      }),
      transformResponse: (response: any) => {
        return {
          responseCode: response?.data?.code,
          message: response?.data?.message,
          status: response?.data?.status,
        }
      },
      transformErrorResponse: (response: { status: string | number }) =>
        response,
    }),
    deletePitch: builder.mutation({
      query: (updatedData) => ({
        url: `${baseUrl}/startup/due_file?refId=${updatedData.refId}`,
        method: 'DELETE',
        data: updatedData,
        // headers: {
        //   'Content-Type': 'application/json',
        // },
      }),
      transformResponse: (response: any) => {
        return {
          responseCode: response?.data?.code,
          message: response?.data?.message,
          status: response?.data?.status,
        }
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

  useUpdateCompanyDetailsMutation,
  useUpdateTeamMutation,
  useUpdateMentorMutation,
  useUpdatePitchMutation,
  useUpdateDealtermMutation,
  useUpdateDuefileMutation,
  useUpdateFaqMutation,
  useUpdateEventMutation,
  useUpdateLogoMutation,

  useDeleteMentorMutation,
  useDeleteTeamMutation,
  useDeleteEventMutation,
  useDeleteFaqMutation,
  useDeleteDealfileMutation,
  useDeletePitchMutation,
} = startupsApiSlice
