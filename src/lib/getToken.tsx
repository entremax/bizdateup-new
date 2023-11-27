import { DataInner, KYCStatusArray } from '@/types'

export function getUserData(dispatch: any, setUser: any, useAppSelector: any) {
  let userData
  console.log('Redux', userData)
  const storedUser = localStorage.getItem('user')
  if (storedUser) {
    userData = JSON.parse(storedUser)
    dispatch(setUser({ ...userData }))
  }

  return userData
}

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

export function getUser() {}
