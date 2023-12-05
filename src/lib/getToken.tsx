//This file will be deleted as localstorage will be no longer be use
import { DataInner, KYCStatusArray } from '@/types'

export function setUserInLocal({
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
  localStorage.setItem('user', JSON.stringify(user))
  dispatch(setUser({ ...user }))
}
