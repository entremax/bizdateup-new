'use client'
import React from 'react'
import { useAppSelector } from '@/store/hooks'
import { useDispatch } from 'react-redux'
import { setUser } from '@/reducers/user/authSlice'
import { DataInner, KYCStatusArray } from '@/types'
import getUserDetails from '@/action/user'
import { redirect } from 'next/navigation'
import localUser from '@/lib/getToken'
import getCookieLocal from '@/lib/useCookieLocal'

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
 * The user object with details.
 */
const useUser = (): User | null => {
  const [userL, setUserL] = React.useState<User | null>(null)
  const dispatch = useDispatch()
  const role = getCookieLocal('role')

  const { user: reduxUser } = useAppSelector(({ authUser }) => authUser)
  React.useEffect(() => {
    const fetchUserDetails = async () => {
      if (!reduxUser && role) {
        if (role === 'investor') {
          const data = await getUserDetails()
          setUserL({
            userData: data?.user as DataInner,
            token: data?.token ?? '',
            refId: data?.refId ?? '',
            kycStatus: data?.status ?? null,
            premiumMember: data?.user?.membership?.isMember !== 'no',
          })
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
          setUserL(data)
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
  }, [role, reduxUser])

  return userL
}

export default useUser
