'use client'
import React from 'react'
import { Button } from 'antd'
import { Icons } from '@/icons'
import { useRouter } from 'next/navigation'

const GoBack = () => {
  const router = useRouter()
  return (
    <div className={'w-full flex justify-start'}>
      <Button
        className={'outline-none hidden sm:inline-block'}
        type={'default'}
        icon={<Icons.ArrowLeft height={13} width={13} />}
        onClick={() => router.back()}
      />
    </div>
  )
}
export default GoBack
