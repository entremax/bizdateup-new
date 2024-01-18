//This file will be deleted as localstorage will be no longer be use
import { InvestorUserPayload, StartupUserPayload } from '@/types'
import { store } from '@/store'
import { setUser } from '@/reducers/user/authSlice'

function getUserLocal(): InvestorUserPayload | StartupUserPayload | null {
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
  user: InvestorUserPayload | StartupUserPayload
}) {
  // console.log('Setting users')
  localStorage.setItem('user', JSON.stringify(user))
  store.dispatch(setUser({ ...user }))
}

const localUser = { getUserLocal, setUserInLocal }
export default localUser
