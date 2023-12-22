import Startup from '@/components/referral/table/Startup'
import Investor from '@/components/referral/table/Investor'
import SearchAndFilter from '@/components/referral/table/search'

import { getInviteeDetails } from '@/action/accelerator'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import ExportButton from '@/components/referral/table/ExportButton'

type Props = {
  searchParams: { [key: string]: string | string[] | undefined }
}
export default async function ReferralTransactions({ searchParams }: Props) {
  const tableType = searchParams?.tab
  const accelerator = await getInviteeDetails()
  const links = [
    { label: 'Investors', tab: 'investor' },
    { label: 'Startups', tab: 'startups' },
  ]
  return (
    <div className="flex scroll-pt-20 flex-col gap-4 p-4">
      <div className="flex items-center justify-between">
        <div className="flex h-full gap-4">
          {links.map(({ label, tab }) => (
            <Link
              scroll={false}
              href={{ href: `/referral`, query: { tab } }}
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

      <SearchAndFilter acceleratorData={accelerator} />
      {!tableType || tableType !== 'startups' ? <Investor /> : <Startup />}
    </div>
  )
}
