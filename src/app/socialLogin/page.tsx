'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useRef } from 'react'
import { useOAuthLoginMutation } from '@/services/NextApiSlice'
import { notifyUser } from '@/components/notification'
import { setUser } from '@/reducers/user/authSlice'
import localUser from '@/lib/getToken'
import { useAppDispatch } from '@/store/hooks'

export default function SocialLogin() {
  const { setUserInLocal } = localUser
  const dispatch = useAppDispatch()
  const router = useRouter()
  const renderCount = useRef(0)
  const searchParams = useSearchParams()
  const [OAuthLogin] = useOAuthLoginMutation()
  const role = searchParams.get('role')
  const refId = searchParams.get('refid')
  const authType = searchParams.get('type')
  const token = searchParams.get('token')

  useEffect(() => {
    if (renderCount.current === 0) {
      if (!role || !refId || !authType || !token) {
        return router.push('/login')
      }
      OAuthLogin({
        role,
        refId,
        authType,
        token,
      })
        .unwrap()
        .then(async (response) => {
          //@ts-ignore
          if (response?.responseCode === 200) {
            const { responseCode, investorData, token, refId, status } =
              response
            localStorage.setItem('token', token)
            console.log({
              responseCode,
              investorData,
              token,
              refId,
              status,
              response,
            })

            // if (responseCode === 200) {
            console.log('Call set user')
            await setUserInLocal({
              dispatch,
              setUser,
              user: {
                userData: investorData,
                token,
                refId,
                kycStatus: status,
                premiumMember: investorData.membership.isMember !== 'no',
              },
            })
            return window.location.replace('/dashboard')
          } else {
            notifyUser('error', "Couldn't login please try again")
          }
        })
        .catch((e) => {
          notifyUser('error', "Couldn't login please try again")
        })
    }
  }, [])
  return (
    <div className="loader-container">
      <div className="loader"></div>
      <div className="loader"></div>
    </div>
  )
}
