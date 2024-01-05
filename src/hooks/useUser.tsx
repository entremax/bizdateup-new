'use client'
import React, { createContext, useCallback, useContext, useEffect, useReducer } from 'react'
import { useAppSelector } from '@/store/hooks'
import { setUser } from '@/reducers/user/authSlice'
import getUserDetails from '@/action/user'
import localUser from '@/lib/getToken'
import useCookieLocal from '@/lib/useCookieLocal'
import { DataInner, KYCStatusArray } from '@/types'
import { useRouter } from 'next/navigation'
import { store } from '@/store'

type User = {
  token: string
  userData: DataInner
  refId: string
  kycStatus: KYCStatusArray
  premiumMember: boolean
}

type State = {
  user: User | null
  loading: boolean
}

type Action =
  | { type: 'SET_USER'; payload: User }
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
  const router = useRouter();
  onst [state, dispatch] = useReducer(reducer, { user: null, loading: false });
  onst role = useCookieLocal('role');
  onst { reduxUser } = useAppSelector(({ authUser }) => authUser);
    console.log('Running Context (User)');
    const fetchUserDetails = useCallback(async () => {
    if (!role || role === '') return;
   
    if (role === 'investor') {
      dispatch({ type: 'SET_LOADING', payload: true });
     const data = await getUserDetails();
     if ((data && data.role !== 'investor') || !data.user) return router.push('/login');
     
      const dataUser = localUser.getUserLocal();
     if (!dataUser) return router.push('/login');
     
      const userInfo = {
        role: data.role,
        userData: data?.user as DataInner,
        token: data?.token ?? '',
        refId: data?.refId ?? '',
        kycStatus: data?.status,
        premiumMember: data?.user?.membership?.isMember !== 'no',
      };
     
      dispatch({ type: 'SET_USER', payload: userInfo });
     store.dispatch(setUser(userInfo))
    } else {
      const data = localUser.getUserLocal();
     if (!data) return router.push('/login/startup');
     
      dispatch({ type: 'SET_USER', payload: data });
     store.dispatch(setUser(data))
    }
  }, [role, router]);
  
  useEffect(() => {
    fetchUserDetails()
  }, [fetchUserDetails])
  
  // console.log('USER HOOK RENDER_COUNT:', renderCount);
  // if (reduxUser && renderCount.current > 3) {
  //   return null; // Or some other logic, e.g., return a loading spinner
  // }
  
  return <UserContext.Provider value={state}>{children}</UserContext.Provider>
};

export default UserProvider

// Hook for easy access to the UserContext
export const useUser = () => useContext(UserContext)