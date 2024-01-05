import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import { cn } from '@/lib/utils'

export default function KycTabs() {
  const kycType = useSelectedLayoutSegment()

  // console.log(kycType)
  return (
    <div className="border_gray grid grid-cols-2 items-center justify-center divide-gray-400 !border-b-0">
      <Link
        href={'/profile/investor/kyc'}
        className={cn(
          `border_gray border-l-2   py-4 text-center font-semibold !text-primary-dark ${
            !kycType ? '!border-0 !bg-white' : '!bg-light-shadow'
          }`,
        )}>
        Aadhaar
      </Link>
      <Link
        href={'/profile/investor/kyc/pan'}
        className={cn(
          `border_gray border-l-2   py-4 text-center font-semibold !text-primary-dark ${
            kycType ? '!border-0 !bg-white' : '!bg-light-shadow'
          }`,
        )}>
        PAN
      </Link>
    </div>
  )
}
