'use client'
import React, { createContext, useContext, useState } from 'react'
import { DataInner } from '@/types'
import { useUser } from '@/hooks/useUser'
import { useAppDispatch } from '@/store/hooks'
import { setNotification } from '@/reducers/others/notificationSlice'
import {
  useUpdateBankDetailsMutation,
  useUpdateOtherDetailsMutation,
  useUpdateUserMutation,
} from '@/services/apiSlice'

type UpdateType = 'general' | 'bank' | 'other' | 'aadhar' | 'pan'

type ContextProps = {
  loading: boolean
  handleUpdate: (formData: DataInner | unknown, updating: UpdateType) => any
}
const UpdateContext = createContext<ContextProps>({} as ContextProps)

export const useUpdateContext = () => useContext(UpdateContext)

const UpdateContextProvider = ({ children }: { children: React.ReactNode }) => {
  const user = useUser()
  const dispatch = useAppDispatch()
  const [loading, setLoading] = useState(false)
  const [updateUser] = useUpdateUserMutation()
  const [updateOtherDetails] = useUpdateOtherDetailsMutation()
  const [updateBankDetails] = useUpdateBankDetailsMutation()

  const handleUpdate = (formData: DataInner | any, updating: UpdateType) => {
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
    const updatedData = { ...formData, refId: user.userData._id }
    setLoading(true)
    setTimeout(() => {}, 3000)
    if (updating === 'general') {
      setLoading(true)
      updateUser(updatedData)
        .unwrap()
        .then((res) => {
          dispatch(
            setNotification({
              type: 'success',
              message: 'Profile Updated Successfully',
            }),
          )
          setLoading(false)
          return res
        })
        .catch((e) => {
          console.log(e)
          setLoading(false)
          dispatch(
            setNotification({
              type: 'error',
              message: "Couldn't Update Profile",
            }),
          )
        })
    }
    if (updating === 'other') {
      setLoading(true)
      updateOtherDetails(updatedData)
        .unwrap()
        .then((res: any) => {
          dispatch(
            setNotification({
              type: 'success',
              message: 'Details Updated Successfully',
            }),
          )
          setLoading(false)
          return res
        })
        .catch((e) => {
          setLoading(false)
          dispatch(
            setNotification({
              type: 'error',
              message: "Couldn't Update bank Details",
              description: e?.message ?? undefined,
            }),
          )
          console.log(e)
        })
    }
    if (updating === 'bank') {
      setLoading(true)
      updateBankDetails(updatedData)
        .unwrap()
        .then((res) => {
          setLoading(false)
          return res
        })
        .catch((e) => {
          dispatch(
            setNotification({
              type: 'error',
              message: "Couldn't Update bank Details",
              description: e.message,
            }),
          )
          setLoading(false)
          console.log(e)
        })
    }
    if (updating === 'pan') {
      setLoading(true)
      updateBankDetails(updatedData)
        .unwrap()
        .then((res) => {
          setLoading(false)
          return res
        })
        .catch((e) => {
          dispatch(
            setNotification({
              type: 'error',
              message: "Couldn't Update bank Details",
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
