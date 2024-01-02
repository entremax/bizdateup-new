'use client'
import { Button } from 'antd'
import React, { useRef } from 'react'
import { InputRef } from 'antd/lib/input'
import Input from '@/components/form/Input'
import UploadCheck from '@/components/profile/dropCheck'
import { DataInner } from '@/types'
import { useUpdateContext } from '@/components/profile/context'
import { useRouter } from 'next/navigation'
import { notifyUser } from '@/components/notification'

export default function PanForm({ user }: { user: DataInner }) {
  const { handleUpdate, loading } = useUpdateContext()
  const router = useRouter()
  const refs = {
    panNo: useRef<InputRef | null>(null),
  }

  const handleBankUpdate = async () => {
    const panNumber = refs.panNo?.current?.input?.value ?? ''
    const panRegex = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z])$/

    if (!panRegex.test(panNumber)) {
      return notifyUser('error', 'Invalid PAN')
    }
    const formData = {
      panNo: user.pan.panNo === '' ? panNumber : user.pan.panNo,
    }
    await handleUpdate(formData, 'pan')
    return router.refresh()
  }

  return (
    <div className="grid grid-cols-1">
      <div className="grid grid-cols-1 gap-8 p-8">
        <Input
          defaultValue={user.pan.panNo === '' ? undefined : user.pan.panNo}
          //@ts-ignore
          ref={refs.panNo}
          name={'panNo'}
          label={'Document Number'}
          placeholder={`Enter your PAN Number`}
        />
      </div>
      <div className="mt-3 grid  items-center gap-8 p-8 py-0 xl:grid-cols-2">
        <div className="grid gap-2">
          <p className="font-medium leading-[1.6] !text-gray-900">
            Upload Font Side
          </p>
          <div className="g">
            <UploadCheck />
          </div>
        </div>
        <div className="grid gap-2">
          <p className="font-medium leading-[1.6] !text-gray-900">
            Upload Back Side
          </p>
          <div className="g">
            <UploadCheck />
          </div>
        </div>
      </div>
      <div className="grow"></div>
      <div className=" my-4 flex items-center justify-end px-8 pb-8">
        <Button
          loading={loading}
          disabled={loading}
          type={'default'}
          onClick={handleBankUpdate}
          className={
            '!h-auto !border-none !bg-light-shadow !px-6 !py-2 font-medium !text-primary !outline-none md:inline-block md:!bg-primary'
          }
          block>
          Verify
        </Button>
      </div>
    </div>
  )
}
