'use client'
import React from 'react'
import { useAppSelector } from '@/store/hooks'
import { useDispatch } from 'react-redux'
import { setUser } from '@/reducers/user/authSlice'
import getUserDetails from '@/lib/helpers/getUserDetails'
import { DataInner } from '@/types'

const useUser = () => {
  const dispatch = useDispatch()
  const { user } = useAppSelector(({ authUser }) => authUser)

  React.useEffect(() => {
    const fetchUserDetails = async () => {
      if (!user) {
        const data = await getUserDetails()
        console.log(data)
        dispatch(
          setUser({
            userData: data?.user as DataInner,
            token: data?.token ?? '',
            refId: data?.refId ?? '',
            kycStatus: data?.status ?? null,
            premiumMember: data?.user.membership.isMember !== 'no',
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
