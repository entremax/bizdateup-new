'use client'
import React, { createContext, useContext, useState } from 'react'
import { useUser } from '@/hooks/useUser'
import { useAppDispatch } from '@/store/hooks'
import { setNotification } from '@/reducers/others/notificationSlice'
import {
  useDeleteDealfileMutation,
  useDeleteEventMutation,
  useDeleteFaqMutation,
  useDeleteMentorMutation,
  useDeletePitchMutation,
  useDeleteTeamMutation,
  useUpdateCompanyDetailsMutation,
  useUpdateDealtermMutation,
  useUpdateDuefileMutation,
  useUpdateEventMutation,
  useUpdateFaqMutation,
  useUpdateMentorMutation,
  useUpdatePitchMutation,
  useUpdateTeamMutation,
} from '@/services/startupApiSlice'

type UpdateType =
  | 'company_details'
  | 'team'
  | 'delete_team'
  | 'delete_mentor'
  | 'delete_faq'
  | 'delete_event'
  | 'delete_dealfile'
  | 'mentor'
  | 'faq'
  | 'event'
  | 'dealterm'
  | 'duefile'
  | 'pitch'
  | 'logo'
  | 'delete_pitch'

type ContextProps = {
  loading: boolean
  handleUpdate: (formData: any, updating: UpdateType) => any
}
const UpdateContext = createContext<ContextProps>({} as ContextProps)

export const useStartupUpdateContext = () => useContext(UpdateContext)

const UpdateContextProvider = ({ children }: { children: React.ReactNode }) => {
  const { user } = useUser()
  const dispatch = useAppDispatch()
  const [loading, setLoading] = useState(false)
  const [updateCompany] = useUpdateCompanyDetailsMutation()
  const [updateTeam] = useUpdateTeamMutation()
  const [updateMentor] = useUpdateMentorMutation()
  const [updatePitch] = useUpdatePitchMutation()
  const [dealterm] = useUpdateDealtermMutation()
  const [duefile] = useUpdateDuefileMutation()
  const [updateFaq] = useUpdateFaqMutation()
  const [updateEvent] = useUpdateEventMutation()
  const [deleteMentor] = useDeleteMentorMutation()
  const [deleteTeam] = useDeleteTeamMutation()
  const [deleteFaq] = useDeleteFaqMutation()
  const [deleteEvent] = useDeleteEventMutation()
  const [deleteDealFile] = useDeleteDealfileMutation()
  const [deletePitch] = useDeletePitchMutation()

  const handleUpdate = (formData: any, updating: UpdateType) => {
    if (!user) {
      dispatch(
        setNotification({
          type: 'warning',
          message: 'No logged in user found',
          description: 'A refresh might fix this issue',
        }),
      )
      return
    }
    const updatedData = { ...formData, refId: user.refId }

    setLoading(true)
    if (updating === 'company_details') {
      setLoading(true)
      updateCompany(formData)
        .unwrap()
        .then((res) => {
          console.log('🚀 ~ file: index.tsx:62 ~ .then ~ res:', res)
          setLoading(false)
          return res
        })
        .catch((e) => {
          dispatch(
            setNotification({
              type: 'error',
              message: "Couldn't Update Company Details",
              description: e.message,
            }),
          )
          setLoading(false)
          console.log(e)
        })
    }
    if (updating === 'mentor') {
      setLoading(true)
      updateMentor(formData)
        .unwrap()
        .then((res) => {
          setLoading(false)
          return res
        })
        .catch((e) => {
          dispatch(
            setNotification({
              type: 'error',
              message: "Couldn't Update Mentor",
              description: e.message,
            }),
          )
          setLoading(false)
          console.log(e)
        })
    }
    if (updating === 'team') {
      setLoading(true)
      updateTeam(formData)
        .unwrap()
        .then((res) => {
          setLoading(false)
          return res
        })
        .catch((e) => {
          dispatch(
            setNotification({
              type: 'error',
              message: "Couldn't Update Mentor",
              description: e.message,
            }),
          )
          setLoading(false)
          console.log(e)
        })
    }
    if (updating === 'delete_team') {
      setLoading(true)
      deleteTeam(formData)
        .unwrap()
        .then((res) => {
          setLoading(false)
          return res
        })
        .catch((e) => {
          dispatch(
            setNotification({
              type: 'error',
              message: "Couldn't Delete Team",
              description: e.message,
            }),
          )
          setLoading(false)
          console.log(e)
        })
    }
    if (updating === 'delete_mentor') {
      setLoading(true)
      deleteMentor(formData)
        .unwrap()
        .then((res) => {
          setLoading(false)
          return res
        })
        .catch((e) => {
          dispatch(
            setNotification({
              type: 'error',
              message: "Couldn't Delete Mentor",
              description: e.message,
            }),
          )
          setLoading(false)
          console.log(e)
        })
    }
    if (updating === 'delete_faq') {
      setLoading(true)
      deleteFaq(formData)
        .unwrap()
        .then((res) => {
          setLoading(false)
          return res
        })
        .catch((e) => {
          dispatch(
            setNotification({
              type: 'error',
              message: "Couldn't Delete faq",
              description: e.message,
            }),
          )
          setLoading(false)
          console.log(e)
        })
    }
    if (updating === 'delete_event') {
      setLoading(true)
      deleteEvent(formData)
        .unwrap()
        .then((res) => {
          setLoading(false)
          return res
        })
        .catch((e) => {
          dispatch(
            setNotification({
              type: 'error',
              message: "Couldn't Delete event",
              description: e.message,
            }),
          )
          setLoading(false)
          console.log(e)
        })
    }
    if (updating === 'delete_dealfile') {
      setLoading(true)
      deleteDealFile(formData)
        .unwrap()
        .then((res) => {
          setLoading(false)
          return res
        })
        .catch((e) => {
          dispatch(
            setNotification({
              type: 'error',
              message: "Couldn't Delete dealFile",
              description: e.message,
            }),
          )
          setLoading(false)
          console.log(e)
        })
    }
    if (updating === 'faq') {
      setLoading(true)
      updateFaq(formData)
        .unwrap()
        .then((res) => {
          setLoading(false)
          return res
        })
        .catch((e) => {
          dispatch(
            setNotification({
              type: 'error',
              message: "Couldn't Update Faq",
              description: e.message,
            }),
          )
          setLoading(false)
          console.log(e)
        })
    }
    if (updating === 'event') {
      setLoading(true)
      updateEvent(formData)
        .unwrap()
        .then((res) => {
          setLoading(false)
          return res
        })
        .catch((e) => {
          dispatch(
            setNotification({
              type: 'error',
              message: "Couldn't Update Event",
              description: e.message,
            }),
          )
          setLoading(false)
          console.log(e)
        })
    }
    if (updating === 'pitch') {
      setLoading(true)
      updatePitch(formData)
        .unwrap()
        .then((res) => {
          setLoading(false)
          return res
        })
        .catch((e) => {
          dispatch(
            setNotification({
              type: 'error',
              message: "Couldn't Update Pitch",
              description: e.message,
            }),
          )
          setLoading(false)
          console.log(e)
        })
    }
    if (updating === 'delete_pitch') {
      setLoading(true)
      deletePitch(formData)
        .unwrap()
        .then((res) => {
          setLoading(false)
          return res
        })
        .catch((e) => {
          dispatch(
            setNotification({
              type: 'error',
              message: "Couldn't Update Pitch",
              description: e.message,
            }),
          )
          setLoading(false)
          console.log(e)
        })
    }
    if (updating === 'dealterm') {
      setLoading(true)
      dealterm(updatedData)
        .unwrap()
        .then((res) => {
          setLoading(false)
          return res
        })
        .catch((e) => {
          dispatch(
            setNotification({
              type: 'error',
              message: "Couldn't Update Event",
              description: e.message,
            }),
          )
          setLoading(false)
          console.log(e)
        })
    }
    if (updating === 'duefile') {
      setLoading(true)
      duefile(formData)
        .unwrap()
        .then((res) => {
          setLoading(false)
          return res
        })
        .catch((e) => {
          dispatch(
            setNotification({
              type: 'error',
              message: "Couldn't Update Event",
              description: e.message,
            }),
          )
          setLoading(false)
          console.log(e)
        })
    }

    setLoading(false)
  }
  return (
    <UpdateContext.Provider
      value={{
        loading,
        handleUpdate,
      }}>
      {children}
    </UpdateContext.Provider>
  )
}

export default UpdateContextProvider
