import { cn } from '@/lib/utils'
import { Space } from 'antd'
import Link from 'next/link'
import React from 'react'
import KycProgress from '@/components/dashboard/kyc/KycProgress'

type Props = {
  className?: string
  hidden?: boolean
}

export default function IncompleteProfile({ className, hidden }: Props) {
  return (
    <>
      <div
        className={cn(
          'border_gray grid gap-2 rounded-xl bg-light-shadow p-5' +
            ' ' +
            className +
            (hidden ? 'hidden' : ''),
        )}>
        <div className={'flex'}>
          <div className="grid">
            <h5 className={'reset text-lg font-semibold text-black-lighter'}>
              Complete your KYC
            </h5>
            <p className={'!m-0 !p-0 text-sm text-typography-gray-400'}>
              To allow payments we require you to complete KYC
            </p>
          </div>
          <div className="grow"></div>
          <Space wrap>
            <KycProgress />
          </Space>
        </div>
        <Link
          href={'/profile/investor'}
          className={'!primary_link !my-3 !mb-0 !text-sm !text-white'}>
          Continue procedure
        </Link>
      </div>
    </>
  )
}
