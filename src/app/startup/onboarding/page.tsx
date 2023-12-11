import React from 'react'
import dynamic from 'next/dynamic'

const OnboardingForm = dynamic(() => import('../components/RegisterForm'), {
  ssr: false,
})

export default function StartupOnboarding() {
  return (
    <div className="">
      <OnboardingForm />
    </div>
  )
}
