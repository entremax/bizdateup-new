'use client'
import React, { createContext, useContext, useState } from 'react'
import { DataInner, KYCStatus } from '@/types'
import { setUser } from '@/reducers/user/authSlice'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { setNotification } from '@/reducers/others/notificationSlice'
import {
  useUpdateAadharMutation,
  useUpdateBankDetailsMutation,
  useUpdateOtherDetailsMutation,
  useUpdatePanMutation,
  useUpdateUserMutation,
} from '@/services/apiSlice'
import { useRouter } from 'next/navigation'
import { notifyUser } from '@/components/notification'
import { useUser } from '@/context/UserContext'
import {
  InvestorUserPayload,
  StartupUserPayload,
  InvestorUserState,
} from '@/types'

type UpdateType = 'general' | 'bank' | 'other' | 'aadhar' | 'pan'

type ContextProps = {
  loading: boolean
  handleUpdate: (formData: DataInner | any, updating: UpdateType) => any
}
const UpdateContext = createContext<ContextProps>({} as ContextProps)

export const useUpdateContext = () => useContext(UpdateContext)

const UpdateContextProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const { setUpdate } = useUser()
  const authUser = useAppSelector(({ authUser }) => authUser)
  const { user, kycStatus } = authUser
  const [loading, setLoading] = useState(false)
  const [updateUser] = useUpdateUserMutation()
  const [updateOtherDetails] = useUpdateOtherDetailsMutation()
  const [updateBankDetails] = useUpdateBankDetailsMutation()
  const [updateAadharDetails] = useUpdateAadharMutation()
  const [updatePanDetails] = useUpdatePanMutation()

  function navigateNext(updated: UpdateType) {
    if (authUser?.user && 'role' in authUser?.user) {
      return
    }
    const findNextPendingStep = () => {
      const pendingSteps = [
        { status: KYCStatus.profile, route: '/profile/investor' },
        { status: KYCStatus.aadhar, route: '/profile/investor/kyc' },
        { status: KYCStatus.pan, route: '/profile/investor/kyc/pan' },
        { status: KYCStatus.bank, route: '/profile/investor/bank' },
        { status: KYCStatus.other, route: '/profile/investor/other' },
      ]

      const startIndex = pendingSteps.findIndex(
        (step) => step.status === (updated === 'general' ? 'profile' : updated),
      )

      for (
        let i = updated === 'other' ? 0 : startIndex + 1;
        i < pendingSteps.length;
        i++
      ) {
        const nextStep = pendingSteps[i]
        if (authUser?.kycStatus?.includes(nextStep.status)) {
          return nextStep.route
        }
      }
      router.refresh()
      return pendingSteps[startIndex].route // No, pending KYC steps
    }

    const nextPendingStep = findNextPendingStep()

    if (nextPendingStep) {
      return router.push(nextPendingStep)
    }
  }

  const handleUpdate = (formData: any | DataInner, updating: UpdateType) => {
    if (!user) {
      return notifyUser(
        'warning',
        'No logged in user found',
        'A refresh might fix this issue',
      )
    }

    let updatedData = { ...formData, refId: user._id }
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
          const updatedUser = res.investorData
          const mergedUser = {
            ...authUser,
            userData: updatedUser,
          } as InvestorUserPayload
          dispatch(setUser(mergedUser))
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

      updateBankDetails(formData)
        .unwrap()
        .then((res) => {
          setLoading(false)
          dispatch(
            setNotification({
              type: 'info',
              message: res.message ?? '',
              description: 'Please add you atm pin and number too',
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

    if (updating === 'aadhar') {
      setLoading(true)
      updateAadharDetails(formData)
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
              message: "Couldn't Update Aadhar Details",
              description: e.message,
            }),
          )
          setLoading(false)
          console.log(e)
        })
    }

    if (updating === 'pan') {
      setLoading(true)
      console.log(formData)
      updatePanDetails(formData)
        .unwrap()
        .then((res) => {
          setLoading(false)
          dispatch(
            setNotification({
              type: 'success',
              message: 'Tanq for your private details',
              description: res.message,
            }),
          )
          return res
        })
        .catch((e) => {
          failed = true
          dispatch(
            setNotification({
              type: 'error',
              message: "Couldn't Update Pan Details ",
              description: e.message ?? 'We missed an oppourtunity to collect your data please try again',
            }),
          )
          setLoading(false)
          console.log(e)
        })
    }

    if (!failed) {
      navigateNext(updating)
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
