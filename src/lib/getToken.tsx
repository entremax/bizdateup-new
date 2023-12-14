//This file will be deleted as localstorage will be no longer be use
import { DataInner, KYCStatusArray } from '@/types'

function getUserLocal(): {
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
  setUser,
  user,
}: {
  dispatch: any
  setUser: any
  user: {
    token: string
    userData: DataInner
    refId: string
    kycStatus: KYCStatusArray
    premiumMember: boolean
  }
}) {
  console.log('Setting users')
  localStorage.setItem('user', JSON.stringify(user))
  dispatch(setUser({ ...user }))
}

const localUser = { getUserLocal, setUserInLocal }
export default localUser
