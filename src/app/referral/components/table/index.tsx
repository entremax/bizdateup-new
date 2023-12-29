'use client'
import Startup from '@/components/referral/table/Startup'
import Investor from '@/components/referral/table/Investor'
import SearchAndFilter from '@/components/referral/table/search'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import ExportButton from '@/components/referral/table/ExportButton'
import { useSearchParams } from 'next/navigation'
import { useAppSelector } from '@/store/hooks'

type Props = {
  searchParams: { [key: string]: string | string[] | undefined }
}
export default function ReferralTransactions() {
  const searchParams = useSearchParams()
  const tableType = searchParams?.get('tab')
  const { accelerator } = useAppSelector(({ accelerator }) => accelerator)
  const links = [
    { label: 'Investors', tab: 'investor' },
    { label: 'Startups', tab: 'startups' },
  ]
  return (
    <div className="flex scroll-pt-20 flex-col gap-4 p-4">
      <div className="my-2 flex items-center justify-between">
        <div className="flex h-full gap-4">
          {links.map(({ label, tab }) => (
            <Link
              key={tab}
              scroll={false}
              href={`/referral${tab ? '?tab=' + tab : ''}`}
              className={cn(
                `text-lg font-semibold text-neutral-500 ${
                  (tableType === tab || (!tableType && tab === 'investor')) &&
                  'border-0 border-b-4 border-solid border-b-primary text-primary '
                } `,
              )}>
              {label}
            </Link>
          ))}
        </div>
        <div className="font-medium text-primary">
          <ExportButton table={tableType} />
        </div>
      </div>

      {accelerator && <SearchAndFilter acceleratorData={accelerator} />}
      {!tableType || tableType !== 'startups' ? <Investor /> : <Startup />}
    </div>
  )
}
