import getUserDetails from '@/action/user'
import { DataInner, InvestorUserPayload, StartupUserPayload } from '@/types'
import { setUser } from '@/reducers/user/authSlice'
import { notifyUser } from '@/components/notification'
import localUser from '@/lib/getToken'
import getCookieLocal from '@/lib/useCookieLocal'
import { store } from '@/store'
export const FetchUser=()=>{
  return async()=>{
    const role=getCookieLocal('role')
    if (role === 'startup') {
      const authMethod = localStorage.getItem('loginMethod') ?? ''
      const authAction = localStorage?.getItem('loginMethod2') ?? ''
      
      if (authMethod === 'local' && authAction === 'signup') {
        const localData = localUser.getUserLocal()
        if (!localData || localData.role !== 'startup') {
          return
        }
        store.dispatch(setUser(localData))
        return
      }
    }
    try{
      const data = await getUserDetails()
      
      if (!data || !data.role || !data.user) {
        console.log('Redirecting to login')
        return notifyUser('error','HGdjky')
      }
      
      if (data.role === 'investor') {
        if ((data && data.role !== 'investor') || !data.user) {
          return notifyUser('error','HGdjky')
        }
        
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
        store.dispatch(setUser(userInfo))
      }
    }catch (e) {
      return notifyUser('error','HGdjky')
    }
  }
}