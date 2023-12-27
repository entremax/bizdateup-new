'use client'
import React, { useState } from 'react'
import { Steps } from 'antd'

const OnboardingSteps: React.FC = () => {
  const [current, setCurrent] = useState(0)

  const onChange = (value: number) => {
    console.log('onChange:', value)
    setCurrent(value)
  }

  return (
    <>
      <Steps
        current={current}
        onChange={onChange}
        direction="vertical"
        items={[
          {
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
            description: <p>Register with email</p>,
          },
          {
            title: (
              <span
                className={`hover:text-light-shadow text-xl font-bold ${
                  current === 1 ? 'text-primary' : ''
                }`}>
                Complete KYC & Bank details
              </span>
            ),
            description: (
              <p className="whitespace-wrap text-[14px] font-normal text-[#6E6E73]">
                Get on a Quick 15 min's Zoom Call with our Experts to understand
                the Process & Terms for Selections & Investment.
              </p>
            ),
          },
          {
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
            description: 'Description',
          },
        ]}
      />
    </>
  )
}

export default OnboardingSteps
