'use client'
import React, { createContext, useContext, useEffect, useState } from 'react'
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

// Create User context
const UserContext = createContext<User | null>(null)

const UserProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
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
        const dataUser = localUser.getUserLocal()
        if (!dataUser) return redirect('/login')

        const userInfo = {
          userData: data?.user as DataInner,
          token: data?.token ?? '',
          refId: data?.refId ?? '',
          kycStatus: dataUser.kycStatus,
          premiumMember: data?.user?.membership?.isMember !== 'no',
        }

        setUserState(userInfo)
        dispatch(setUser(userInfo))
      } else {
        const data = localUser.getUserLocal()
        if (!data) return redirect('/login/startup')

        setUserState(data)
        dispatch(
          setUser({
            ...data,
          }),
        )
      }
    }

    fetchUserDetails()
  }, [role, reduxUser])

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>
}
export default UserProvider
// Hook for easy access to the UserContext
export const useUser = () => useContext(UserContext)
