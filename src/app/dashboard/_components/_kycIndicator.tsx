import React from 'react'
import IncompleteProfile from '@/components/dashboard/kyc/IncompleteProfile'
import CompletedProfile from '@/components/dashboard/kyc/CompletedProfile'
import { DataInner, KYCStatusArray } from '@/types'

type Props = {
  token: string
  user: DataInner
  className?: string
  hidden?: boolean
  status: KYCStatusArray
}

const KycIndicator = ({ token, status, user, className, hidden }: Props) => {
  
  return (
    <>
      {user && status.length !== 0 ? (
        <IncompleteProfile className={className} hidden={hidden} />
      ) : (
        user && (
          <CompletedProfile
            token={token}
            user_id={user._id}
            className={className}
            hidden={hidden}
          />
        )
      )}
    </>
  )
}
export default KycIndicator
