//This file will be deleted as localstorage will be no longer be use
import { DataInner, KYCStatusArray } from '@/types'
import { StartupData } from '@/types/invest'
import { store } from '@/store'
import { setUser } from '@/reducers/user/authSlice'

function getUserLocal(): {
  role: 'investor' | 'startup'
  token: string
  userData: DataInner
  refId: string
  kycStatus: KYCStatusArray
  premiumMember: boolean
} | null {
  const user = localStorage.getItem('user')
  // If 'user' is not null then parse and dispatch
  if (user) {
    return JSON.parse(user)
  }
  return null
}

async function setUserInLocal({
  dispatch,
  user,
}: {
  dispatch: any
  setUser: any
  user: {
    role: 'investor' | 'startup'
    token: string
    userData: DataInner | StartupData
    refId: string
    kycStatus: KYCStatusArray
    premiumMember: boolean
  }
}) {
  console.log('Setting users')
  localStorage.setItem('user', JSON.stringify(user))
  store.dispatch(setUser({ ...user }))
}

const localUser = { getUserLocal, setUserInLocal }
export default localUser
