'use client'
import React, { createContext, useContext } from 'react'
import { DataInner } from '@/types'
import useUser from '@/context/useUser'
import { useAppDispatch } from '@/store/hooks'
import { setNotification } from '@/reducers/others/notificationSlice'
import {
  useUpdateBankDetailsMutation,
  useUpdateOtherDetailsMutation,
  useUpdateUserMutation,
} from '@/services/apiSlice'

type UpdateType = 'general' | 'bank' | 'other' | 'aadhar' | 'pan'

type ContextProps = {
  handleUpdate: (formData: DataInner | unknown, updating: UpdateType) => any
}
const UpdateContext = createContext<ContextProps>({} as ContextProps)

export const useUpdateContext = () => useContext(UpdateContext)

const UpdateContextProvider = ({ children }: { children: React.ReactNode }) => {
  const user = useUser()
  const dispatch = useAppDispatch()
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
    const updatedData = { ...formData, refId: user._id }
    console.log('Updated Data', updatedData)
    if (updating === 'general') {
      updateUser(updatedData)
        .unwrap()
        .then((res) => {
          console.log(res)
          dispatch(
            setNotification({
              type: 'success',
              message: 'Profile Updated Successfully',
            }),
          )
          return res
        })
        .catch((e) => {
          console.log(e)
        })
    }
    if (updating === 'other') {
      updateOtherDetails(updatedData)
        .unwrap()
        .then((res: any) => {
          dispatch(
            setNotification({
              type: 'success',
              message: 'Other Details Updated Successfully',
            }),
          )
          return res
        })
        .catch((e) => {
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
      updateBankDetails(updatedData)
        .unwrap()
        .then((res) => {
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
          console.log(e)
        })
    }
  }
  return (
    <UpdateContext.Provider
      value={{
        handleUpdate,
      }}>
      {children}
    </UpdateContext.Provider>
  )
}

export default UpdateContextProvider
