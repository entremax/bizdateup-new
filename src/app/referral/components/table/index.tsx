'use client'
import Startup from '@/components/referral/table/Startup'
import Investor from '@/components/referral/table/Investor'
import SearchAndFilter from '@/components/referral/table/search'
import { cn } from '@/lib/utils'
import ExportButton from '@/components/referral/table/ExportButton'
import { useAppSelector } from '@/store/hooks'
import { useState } from 'react'
import { Button } from 'antd'

const links = [
  { label: 'Investors', tab: 'investor' },
  { label: 'Startups', tab: 'startups' },
]
export default function ReferralTransactions() {
  const [tabType, setTab] = useState(links[0].tab)
  const { accelerator } = useAppSelector(({ accelerator }) => accelerator)

  return (
    <div className="flex scroll-pt-20 flex-col gap-4 p-4">
      <div className="my-2 flex items-center justify-between">
        <div className="flex h-full gap-4">
          {links.map(({ label, tab }) => (
            <Button
              key={tab}
              onClick={() => setTab(tab)}
              className={cn(
                `text-lg font-semibold text-neutral-500 ${
                  (tabType === tab || (!tabType && tabType === 'investor')) &&
                  'border-0 border-b-4 border-solid border-b-primary text-primary '
                } `,
              )}>
              {label}
            </Button>
          ))}
        </div>
        <div className="font-medium text-primary">
          <ExportButton table={tabType} />
        </div>
      </div>

      {accelerator && <SearchAndFilter acceleratorData={accelerator} />}
      {!tabType || tabType !== 'startups' ? <Investor /> : <Startup />}
    </div>
  )
}
