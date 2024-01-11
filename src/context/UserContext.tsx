'use client'
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
} from 'react'
import { setUser } from '@/reducers/user/authSlice'
import getUserDetails from '@/action/user'
import localUser from '@/lib/getToken'
import useCookieLocal from '@/lib/useCookieLocal'
import { DataInner, InvestorUserPayload, StartupUserPayload } from '@/types'
import { usePathname, useRouter } from 'next/navigation'
import { store } from '@/store'

type State = {
  user: InvestorUserPayload | StartupUserPayload | null
  loading: boolean
}

type Action =
  | {
      type: 'SET_USER'
      payload: InvestorUserPayload | StartupUserPayload | null
    }
  | { type: 'SET_LOADING'; payload: boolean }

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload }
    case 'SET_LOADING':
      return { ...state, loading: action.payload }
    default:
      return state
  }
}

const UserContext = createContext<State>({ user: null, loading: false })

const UserProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const router = useRouter()
  const path = usePathname()
  const [state, dispatch] = useReducer(reducer, { user: null, loading: false })
  const role = useCookieLocal('role')
  
  const fetchUserDetails = useCallback(async () => {
    if (!role || role === '') return

    if (role === 'startup') {
      const authMethod = localStorage.getItem('loginMethod') ?? ''
      const authAction = localStorage.getItem('loginMethod2') ?? ''

      if (authMethod === 'local' && authAction === 'signup') {
        const localData = localUser.getUserLocal()
        if (!localData || localData.role !== 'startup')
          return router.push('/login/startup')
        dispatch({ type: 'SET_USER', payload: localData })
        store.dispatch(setUser(localData))
        return
      }
    }

    const data = await getUserDetails()

    if (!data || !data.role || !data.user) {
      console.log('Redirecting to login')
      return router.push('/login')
    }

    if (data.role === 'investor') {
      dispatch({ type: 'SET_LOADING', payload: true })
      if ((data && data.role !== 'investor') || !data.user)
        return router.push('/login')

      const localData = localUser.getUserLocal()
      if (!localData) return router.push('/login')

      const userInfo: InvestorUserPayload = {
        role: data.role,
        userData: data?.user as DataInner,
        token: data?.token ?? '',
        refId: data?.refId ?? '',
        kycStatus: data?.status,
        premiumMember: data?.user?.membership?.isMember !== 'no',
      }
      store.dispatch(setUser(userInfo))
    } else {
      const userInfo: StartupUserPayload = {
        role: data.role,
        userData: data.user,
        token: data.token ?? '',
        refId: data.refId ?? '',
        premiumMember: false,
      }
      dispatch({ type: 'SET_USER', payload: userInfo })
      store.dispatch(setUser(userInfo))
    }
  }, [role, path])

  useEffect(() => {
    console.log('running effect')
    fetchUserDetails()
  }, [role, path])

  return <UserContext.Provider value={state}>{children}</UserContext.Provider>
};

export default UserProvider

// Hook for easy access to the UserContext
export const useUser = () => useContext(UserContext)