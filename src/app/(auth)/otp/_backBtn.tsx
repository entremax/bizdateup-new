'use client'
import React from 'react'
import { Button } from 'antd'
import { Icons } from '@/components/icons/icon'
import { useRouter } from 'next/navigation'

const GoBack = () => {
  const router = useRouter()
  return (
    <div className={'flex w-full justify-start'}>
      <Button
        className={'hidden outline-none sm:inline-block'}
        type={'default'}
        icon={<Icons.ArrowLeft height={13} width={13} />}
        onClick={() => router.back()}
      />
    </div>
  )
}
export default GoBack
