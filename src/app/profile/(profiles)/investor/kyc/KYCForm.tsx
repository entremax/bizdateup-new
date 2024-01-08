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
import OfflineKyc from '@/app/profile/(profiles)/investor/kyc/OfflineKyc'

export default function AadharForm({ user }: { user: DataInner }) {
  const { handleUpdate, loading } = useUpdateContext()
  const router = useRouter()
  const refs = {
    aadharNo: useRef<InputRef | null>(null),
  }

  const handleAadhar = async () => {
    const aadharNo = refs.aadharNo?.current?.input?.value ?? ''
    const aadharRegExp = /^[2-9][0-9]{3}\\s[0-9]{4}\\s[0-9]{4}$/

    if (!aadharRegExp.test(aadharNo)) {
      return notifyUser('error', 'Invalid Aadhar Number')
    }
    const formData = {
      aadharNo: aadharNo ? aadharNo : user.aadhar.aadharNo,
    }
    await handleUpdate(formData, 'aadhar')
    return router.refresh()
  }

  return (
    <>
      <div className="grid grid-cols-1">
        <div className="grid grid-cols-1 gap-8 p-8">
          <Input
            defaultValue={
              user.aadhar.aadharNo === '' ? undefined : user.aadhar.aadharNo
            }
            ref={refs.aadharNo}
            name={'aadhar-no'}
            label={'Aadhar Number'}
            placeholder={`Enter your Aadhar Number`}
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
        <div className=" my-6 flex items-center justify-self-end px-8 md:w-1/6">
          <Button
            loading={loading}
            disabled={loading}
            type={'default'}
            onClick={handleAadhar}
            className={
              '!h-auto !border-none !bg-light-shadow !px-6 !py-2 font-medium !text-primary !outline-none md:inline-block md:!bg-primary md:!text-white'
            }
            block>
            Verify
          </Button>
        </div>
      </div>
      <OfflineKyc />
    </>
  )
}
