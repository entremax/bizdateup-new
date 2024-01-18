import Link from 'next/link'
import { useSearchParams, useSelectedLayoutSegment } from 'next/navigation'
import { cn } from '@/lib/utils'
import { useAppSelector } from '@/store/hooks'
import { KYCStatus } from '@/types'
import VerifiedIcon from '@/components/icons/Verified'

export default function KycTabs() {
  const kycType = useSelectedLayoutSegment()
  const query=useSearchParams()
  const sm=Boolean(query.get('sm'))
  const { user, kycStatus } = useAppSelector(({ authUser }) => authUser)
  const small=sm?`?sm=y`:''
  return (
    <div className="border_gray grid grid-cols-2 items-center justify-center divide-gray-400 !border-b-0">
      <Link
        href={'/profile/investor/kyc'+small}
        className={cn(
          `border_gray flex  items-center justify-center gap-2 border-l-2 py-4 text-center font-semibold !text-primary-dark ${
            !kycType ? '!border-0 !bg-white' : '!bg-light-shadow'
          }`,
        )}>
        <span>Aadhaar </span>
        {!user || kycStatus.includes(KYCStatus.aadhar) ? null : <VerifiedIcon />}
      </Link>
      <Link
        href={'/profile/investor/kyc/pan'+small}
        className={cn(
          `border_gray flex items-center  justify-center gap-2 border-l-2  py-4 text-center font-semibold !text-primary-dark ${
            kycType ? '!border-0 !bg-white' : '!bg-light-shadow'
          }`,
        )}>
        PAN
        {!user || kycStatus.includes(KYCStatus.pan) ? null : <VerifiedIcon />}
      </Link>
    </div>
  )
}
