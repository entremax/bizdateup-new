'use client'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { setUser } from '@/reducers/user/authSlice'
import getUserDetails from '@/action/user'
import localUser from '@/lib/getToken'
import useCookieLocal from '@/lib/useCookieLocal'
import { DataInner, KYCStatusArray } from '@/types'
import { redirect } from 'next/navigation'

type User = {
  token: string
  userData: DataInner
  refId: string
  kycStatus: KYCStatusArray
  premiumMember: boolean
}

/**
 * Custom hook that provides access to the authenticated user's details.
 *
 * Returns the user object with details.
 */
const useUser = (): User | null => {
  const [user, setUserState] = useState<User | null>(null)
  const role = useCookieLocal('role')
  const { user: reduxUser } = useAppSelector(({ authUser }) => authUser)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const fetchUserDetails = async () => {
      if (reduxUser) return
      if (!role || role === '') return

      if (role === 'investor') {
        const data = await getUserDetails()
        const userInfo = {
          userData: data?.user as DataInner,
          token: data?.token ?? '',
          refId: data?.refId ?? '',
          kycStatus: data?.status ?? null,
          premiumMember: data?.user?.membership?.isMember !== 'no',
        }

        setUserState(userInfo)
        dispatch(setUser(userInfo))
      } else {
        const data = localUser.getUserLocal()
        if (!data) return redirect('/login/startup')

        setUserState(data)
        dispatch(setUser({ ...data }))
      }
    }

    fetchUserDetails()
  }, [role, reduxUser])

  return user
}

export default useUser
