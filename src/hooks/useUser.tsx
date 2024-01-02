'use client'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { setUser } from '@/reducers/user/authSlice'
import getUserDetails from '@/action/user'
import localUser from '@/lib/getToken'
import useCookieLocal from '@/lib/useCookieLocal'
import { DataInner, KYCStatusArray } from '@/types'
import { useRouter } from 'next/navigation'

type User = {
  token: string
  userData: DataInner
  refId: string
  kycStatus: KYCStatusArray
  premiumMember: boolean
}
type Props = {
  user: User | null
  loading: boolean
}
const UserContext = createContext<Props>({ user: null, loading: false })

const UserProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const router = useRouter()
  const [user, setUserState] = useState<User | null>(null)
  const role = useCookieLocal('role')
  const { user: reduxUser } = useAppSelector(({ authUser }) => authUser)
  const [loading, setLoading] = useState(false)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal
    const fetchUserDetails = async () => {
      if (reduxUser) return
      if (!role || role === '') return

      if (role === 'investor') {
        setLoading(true)
        const data = await getUserDetails()
        if (data && data.role !== 'investor') return router.push('/login')

        const dataUser = localUser.getUserLocal()
        if (!dataUser) return router.push('/login')

        const userInfo = {
          role: data.role,
          userData: data?.user as DataInner,
          token: data?.token ?? '',
          refId: data?.refId ?? '',
          kycStatus: data?.status,
          premiumMember: data?.user?.membership?.isMember !== 'no',
        }

        setUserState(userInfo)
        dispatch(setUser(userInfo))
      } else {
        const data = localUser.getUserLocal()
        if (!data) return router.push('/login/startup')

        setUserState(data)
        dispatch(
          setUser({
            ...data,
          }),
        )
      }
    }
    fetchUserDetails()
  }, [role, reduxUser, dispatch])

  return (
    <UserContext.Provider value={{ user, loading }}>
      {children}
    </UserContext.Provider>
  )
}
export default UserProvider
// Hook for easy access to the UserContext
export const useUser = () => useContext(UserContext)
