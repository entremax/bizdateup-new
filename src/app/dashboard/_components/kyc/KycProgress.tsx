'use client'
import { Progress } from 'antd'
import React from 'react'
import { useAppSelector } from '@/store/hooks'

export default function KycProgress() {
  const {kycCompletionPercentage } = useAppSelector(({ authUser }) => authUser)
  return (
    <div className="min-h-[2rem]">
      <Progress
        strokeLinecap="butt"
        type="dashboard"
        percent={kycCompletionPercentage}
        size={67}
        gapDegree={0}
      />
    </div>
  )
}
