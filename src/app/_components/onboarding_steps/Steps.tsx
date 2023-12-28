'use client'
import React from 'react'
import { Steps } from 'antd'
import { cn } from '@/lib/utils'

type Props = { current: number; onChange: (value: number) => void }
const OnboardingSteps: React.FC<Props> = ({ onChange, current }) => {
  return (
    <>
      <Steps
        className={'onboarding-steps'}
        current={current}
        onChange={onChange}
        direction="vertical"
        items={[
          {
            icon: (
              <IconWrapper
                className={cn(
                  `${current === 0 ? 'bg-primary text-white' : ''}`,
                )}>
                1
              </IconWrapper>
            ),
            title: (
              <div className="flex items-center gap-x-6">
                <span
                  className={`hover:text-light-shadow text-xl font-bold ${
                    current === 0 ? 'text-primary' : ''
                  }`}>
                  Register with email or social logins
                </span>
              </div>
            ),
            description: current === 0 && (
              <p className={'delay-200'}>Register with email</p>
            ),
          },
          {
            icon: (
              <IconWrapper
                className={cn(
                  `${current === 1 ? 'bg-primary text-white' : ''}`,
                )}>
                2
              </IconWrapper>
            ),
            title: (
              <span
                className={`hover:text-light-shadow text-xl font-bold ${
                  current === 1 ? 'text-primary' : ''
                }`}>
                Complete KYC & Bank details
              </span>
            ),
            description: current === 1 && (
              <p className="whitespace-wrap text-[14px] font-normal text-[#6E6E73] delay-200">
                Get on a Quick 15 min&#39;s Zoom Call with our Experts to
                understand the Process & Terms for Selections & Investment.
              </p>
            ),
          },
          {
            icon: (
              <IconWrapper
                className={cn(
                  `${current === 2 ? 'bg-primary text-white' : ''}`,
                )}>
                3
              </IconWrapper>
            ),
            title: (
              <div className="flex items-center gap-x-6">
                <span
                  className={`hover:text-light-shadow text-xl font-bold ${
                    current === 2 ? 'text-primary' : ''
                  }`}>
                  Start investing in start ups
                </span>
              </div>
            ),
            description: current === 2 && (
              <p className="whitespace-wrap text-[14px] font-normal text-[#6E6E73] delay-200">
                Get on a Quick 15 min&#39;s Zoom Call with our Experts to
                understand the Process & Terms for Selections & Investment.
              </p>
            ),
          },
        ]}
      />
    </>
  )
}

export default OnboardingSteps
const IconWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode
  className: string
}) => {
  return (
    <div
      className={cn(
        `rounded-xl bg-light-shadow p-2 py-2 text-sm font-semibold ${className}`,
      )}>
      {children}
    </div>
  )
}
