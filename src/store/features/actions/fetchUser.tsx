import getUserDetails from '@/action/user'
import { DataInner, InvestorUserPayload, StartupUserPayload } from '@/types'
import { setUser } from '@/reducers/user/authSlice'
import { notifyUser } from '@/components/notification'
import localUser from '@/lib/localUser'
import { store } from '@/store'
export const fetchUser = () => {
  return async () => {
    console.log('Fetching....')
    let role: string | null = null
    const name = 'role' + '='
    const decodedCookie = decodeURIComponent(document.cookie)
    const cookieArray = decodedCookie.split(';')
    console.log(decodedCookie, cookieArray)
    for (let i = 0; i < cookieArray.length; i++) {
      let cookie = cookieArray[i]
      while (cookie.charAt(0) == ' ') {
        cookie = cookie.substring(1)
      }
      if (cookie.indexOf(name) === 0) {
        role = cookie.substring(name.length, cookie.length)
      }
    }
    if (!role || role === '') {
      return
    }
    // const authMethod = localStorage.getItem('loginMethod') ?? ''
    // const authAction = localStorage?.getItem('loginMethod2') ?? ''

    // if (
    //   authMethod === 'local' &&
    //   authAction === 'signup' &&
    //   role === 'startup'
    // ) {
    //   const localData = localUser.getUserLocal()
    //   console.log(localData)
    //   if (!localData || localData.role !== 'startup') {
    //     return
    //   }
    //   store.dispatch(setUser(localData))
    //   return
    // }

    try {
      const data = await getUserDetails()

      if (!data || !data.role || !data.user) {
        console.log('Redirecting to login')
        return notifyUser('error', 'HGdjky')
      }
      console.log('Data', data)
      if (data.role === 'investor') {
        if ((data && data.role !== 'investor') || !data.user) {
          return notifyUser('error', 'HGdjky')
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
    } catch (e) {
      return notifyUser('error', 'HGdjky')
    }
  }
}
