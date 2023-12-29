'use client'
import React from 'react'
import { Button } from 'antd'
import { Icons } from '@/icons/icon'
import { useRouter } from 'next/navigation'

const GoBack = () => {
  const router = useRouter()
  return (
    <>
      <Button
        className={' outline-none'}
        type={'default'}
        icon={<Icons.ArrowLeft height={13} width={13} />}
        onClick={() => router.back()}
      />
    </>
  )
}
export default GoBack
