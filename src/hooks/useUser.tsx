'use client'
import React from 'react'
import { useAppSelector } from '@/store/hooks'
import { useDispatch } from 'react-redux'
import { setUser } from '@/reducers/user/authSlice'
import { DataInner } from '@/types'
import getUserDetails from '@/action/user'

/**
 * Custom hook that provides access to the authenticated user's details.
 *
 * @returns {DataInner|null} The user object with details.
 */
const useUser = (): DataInner | null => {
  const dispatch = useDispatch()
  const { user } = useAppSelector(({ authUser }) => authUser)

  React.useEffect(() => {
    const fetchUserDetails = async () => {
      if (!user) {
        const data = await getUserDetails()

        dispatch(
          setUser({
            userData: data?.user as DataInner,
            token: data?.token ?? '',
            refId: data?.refId ?? '',
            kycStatus: data?.status ?? null,
            premiumMember: data?.user?.membership?.isMember !== 'no',
          }),
        )
      }
    }
    fetchUserDetails()
    // Returning a cleanup function is optional. You may omit the return statement if not needed.
  }, [])

  return user
}

export default useUser
