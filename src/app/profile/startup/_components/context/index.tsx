'use client'
import React, { createContext, useContext, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
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
import { notifyUser } from '@/components/notification'
import { fetchUser } from '@/store/features/actions/fetchUser'

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
  const dispatch = useAppDispatch()
  const { user, refId } = useAppSelector(({ authUser }) => authUser)
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
    const updatedData = { ...formData, refId: user?._id }

    setLoading(true)
    switch (updating) {
      case 'company_details':
        updateCompany(formData)
          .unwrap()
          .then(() =>
            notifyUser('success', 'Company Details Updated Successfully'),
          )
          .catch((e) =>
            notifyUser(
              'error',
              "Couldn't update Company Details.",
              
            ),
          )
        break
      case 'mentor':
        updateMentor(formData)
          .unwrap()
          .then(() =>
            notifyUser('success', 'Mentor Details Updated Successfully'),
          )
          .catch((e) =>
            notifyUser(
              'error',
              "Couldn't update Mentor Details.",
        
            ),
          )
        break
      case 'team':
        updateTeam(formData)
          .unwrap()
          .then(() =>
            notifyUser('success', 'Team Details Updated Successfully'),
          )
          .catch((e) =>
            notifyUser(
              'error',
              "Couldn't update Team Details."
            ),
          )
        break
      case 'delete_team':
        deleteTeam(formData)
          .unwrap()
          .then(() =>
            notifyUser('success', 'Team Details Deleted Successfully'),
          )
          .catch((e) =>
            notifyUser(
              'error',
              "Couldn't Delete Team Details."
            ),
          )
        break
      case 'delete_mentor':
        deleteMentor(formData)
          .unwrap()
          .then(() =>
            notifyUser('success', 'Team Details Deleted Successfully'),
          )
          .catch((e) =>
            notifyUser(
              'error',
              "Couldn't Delete Team Details."
            ),
          )
        break
      case 'delete_faq':
        deleteFaq(formData)
          .unwrap()
          .then(() => notifyUser('success', 'FAQ Deleted Successfully'))
          .catch((e) =>
            notifyUser('error', "Couldn't Delete FAQ."),
          )
        break
      case 'delete_event':
        deleteEvent(formData)
          .unwrap()
          .then(() => notifyUser('success', 'Event Deleted Successfully'))
          .catch((e) =>
            notifyUser(
              'error',
              "Couldn't Delete Event."
            ),
          )
        break
      case 'delete_dealfile':
        deleteDealFile(formData)
          .unwrap()
          .then(() => notifyUser('success', 'DealFile Deleted Successfully'))
          .catch((e) =>
            notifyUser(
              'error',
              "Couldn't Delete DealFile."
            ),
          )
        break
      case 'faq':
        updateFaq(formData)
          .unwrap()
          .then(() => notifyUser('success', 'FAQs Updated Successfully'))
          .catch((e) =>
            notifyUser(
              'error',
              "Couldn't Update FAQs."
            ),
          )
        break
      case 'event':
        updateEvent(formData)
          .unwrap()
          .then(() => notifyUser('success', 'Events Updated Successfully'))
          .catch((e) =>
            notifyUser(
              'error',
              "Couldn't Update Events.",
            ),
          )
        break
      case 'pitch':
        updatePitch(formData)
          .unwrap()
          .then(() => notifyUser('success', 'Pitch Updated Successfully'))
          .catch((e) =>
            notifyUser(
              'error',
              "Couldn't Update Pitch.",
              
            ),
          )
        break
      case 'delete_pitch':
        deletePitch(formData)
          .unwrap()
          .then(() => notifyUser('success', 'Pitch Deleted Successfully'))
          .catch((e) =>
            notifyUser(
              'error',
              "Couldn't Deleted Pitch.",
              
            ),
          )
        break
      case 'dealterm':
        dealterm(updatedData)
          .unwrap()
          .then(() => notifyUser('success', 'DealTerms Updated Successfully'))
          .catch((e) =>
            notifyUser(
              'error',
              "Couldn't Update DealTerms.",
              
            ),
          )
        break
      case 'duefile':
        duefile(formData)
          .unwrap()
          .then(() => notifyUser('success', 'Duefile Updated Successfully'))
          .catch((e) =>
            notifyUser(
              'error',
              "Couldn't Update Duefile.",
              
            ),
          )
        break
      default:
        break
    }
    dispatch(fetchUser())
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
