'use client'
import CustomModal from '@/components/modal/customModal'
import { useAppSelector } from '@/store/hooks'
import React, { useEffect, useState } from 'react'
import { StartupUpdate } from '@/types/startup'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { apiUri, cn } from '@/lib/utils'
import Link from 'next/link'

export default function StartupUpdateDetails({
  params: { id },
}: {
  params: { id: string }
}) {
  const router = useRouter()
  const { updates } = useAppSelector((state) => state.startup)
  const [update, setUpdate] = useState<StartupUpdate | null>(null)
  const [open, setOpen] = useState(true)
  useEffect(() => {
    const updateDetails = updates.find((item) => item._id === id) ?? null
    setUpdate(updateDetails)
  }, [updates, id])
  const handleClose = () => {
    setOpen(false)
    return router.back()
  }
  return (
    <CustomModal
      open={open}
      className={'!startup-update'}
      onCancel={handleClose}
      title={
        <h5 className="m-0 p-0 px-2 py-3 text-2xl font-bold leading-normal text-black-lighter">
          Community Developer Call
        </h5>
      }
      closable
      closeIcon
      centered>
      <div className="mb-2 flex items-center gap-3">
        <div className="border_gray relative h-16  max-h-[4rem] w-[4.4rem] overflow-clip  rounded-xl">
          <Image
            alt={'companyImage'}
            src={apiUri().base + 'v1/logo/' + update?.logo}
            sizes={'100%'}
            fill
          />
        </div>
        <div
          className={cn('flex max-w-[16rem] flex-grow flex-col md:max-w-fit')}>
          ,{' '}
          <Link
            href={`/invest/startup/${update?._id}?name=${update?.company_name}`}
            className="text-lg font-semibold !text-black-lighter">
            {update?.title}
          </Link>
          <p className={'text-sm font-light'}>
            Start-up:{' '}
            <span className={'font-semibold text-gray-400'}>
              {update?.company_name}
            </span>
          </p>
        </div>
      </div>
      <p className="text-sm italic text-[#828F99]">{update?.content}</p>
    </CustomModal>
  )
}
