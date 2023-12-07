'use client'
import React from 'react'
import { useAppSelector } from '@/store/hooks'
import { useDispatch } from 'react-redux'
import { setUser } from '@/reducers/user/authSlice'
import { DataInner } from '@/types'
import getUserDetails from '@/action/user'
import { redirect } from 'next/navigation'
import localUser from '@/lib/getToken'
import { getCookieLocal } from '@/lib/utils'

/**
 * Custom hook that provides access to the authenticated user's details.
 *
 * The user object with details.
 */
const useUser = () => {
  const dispatch = useDispatch()
  const { user } = useAppSelector(({ authUser }) => authUser)

  React.useEffect(() => {
    const fetchUserDetails = async () => {
      const role = getCookieLocal('role')
      console.log('Role', role)
      if (!user) {
        if (role === 'investor') {
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
        } else {
          const data = localUser.getUserLocal()
          if (!data) {
            return redirect('/login/startup')
          }
          dispatch(setUser({ ...data }))
        }
      }
    }
    fetchUserDetails()
      .then(() => {
        console.log('User Fetched')
      })
      .catch((e) => console.log(e))
    // Returning a cleanup function is optional. You may omit the return statement if not needed.
  }, [])

  return user
}

export default useUser
