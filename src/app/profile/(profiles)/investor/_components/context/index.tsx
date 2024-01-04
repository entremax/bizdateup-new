'use client'
import React, { createContext, useContext, useState } from 'react'
import { DataInner, KYCStatus } from '@/types'
import { useUser } from '@/hooks/useUser'
import { useAppDispatch } from '@/store/hooks'
import { setNotification } from '@/reducers/others/notificationSlice'
import {
  useUpdateBankDetailsMutation,
  useUpdateOtherDetailsMutation,
  useUpdateUserMutation,
} from '@/services/apiSlice'
import { useRouter } from 'next/navigation'

type UpdateType = 'general' | 'bank' | 'other' | 'aadhar' | 'pan'

type ContextProps = {
  loading: boolean
  handleUpdate: (formData: DataInner | unknown, updating: UpdateType) => any
}
const UpdateContext = createContext<ContextProps>({} as ContextProps)

export const useUpdateContext = () => useContext(UpdateContext)

const UpdateContextProvider = ({ children }: { children: React.ReactNode }) => {
  const { user } = useUser()
  const router = useRouter()
  const dispatch = useAppDispatch()
  const [loading, setLoading] = useState(false)
  const [updateUser] = useUpdateUserMutation()
  const [updateOtherDetails] = useUpdateOtherDetailsMutation()
  const [updateBankDetails] = useUpdateBankDetailsMutation()

  function navigateNext(updated: UpdateType) {
    const findNextPendingStep = () => {
      const pendingSteps = [
        { status: KYCStatus.aadhar, route: '/profile/investor/kyc' },
        { status: KYCStatus.pan, route: '/profile/investor/kyc/pan' },
        { status: KYCStatus.bank, route: '/profile/investor/bank' },
        { status: KYCStatus.other, route: '/profile/investor/other' },
      ]

      const startIndex = pendingSteps.findIndex(
        (step) => step.status === updated,
      )

      for (let i = startIndex + 1; i < pendingSteps.length; i++) {
        const nextStep = pendingSteps[i]
        if (user?.kycStatus.includes(nextStep.status)) {
          return nextStep.route
        }
      }

      return null // No, pending KYC steps
    }

    const nextPendingStep = findNextPendingStep()

    if (nextPendingStep) {
      router.push(nextPendingStep)
    }
  }

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
    let failed = false
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
          failed = true
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
          failed = true
          dispatch(
            setNotification({
              type: 'error',
              message: "Couldn't Update Details",
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
          dispatch(
            setNotification({
              type: 'info',
              message: res.message ?? '',
            }),
          )
          return res
        })
        .catch((e) => {
          console.log('Error', e)
          failed = true
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
          failed = true
          dispatch(
            setNotification({
              type: 'error',
              message: "Couldn't Update PAN Details",
              description: e.message,
            }),
          )
          setLoading(false)
          console.log(e)
        })
    }
    console.log(failed, user)

    if (!failed) {
      navigateNext(updating)
      router.refresh()
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
