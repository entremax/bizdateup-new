'use client'
import React from 'react'
import FaqForm from '@/components/profile/startup/FaqForm'
import Faq from '@/components/faq'
import { useAppSelector } from '@/store/hooks'
import { useSearchParams } from 'next/navigation'

export default  function Bank() {
  const {user,token,role}=useAppSelector(({authUser})=>authUser)
  const searchParams=useSearchParams()
  const editState=Boolean(searchParams.get('edit'))
  
  if (!user||role!=='startup'||!token) {
    return null
  }
  const data = [
    {
      label: 'Pitch',
      value: user.pitch,
    },
  ]

  return (
    <div className="flex flex-col">
      {editState ? (
        <div className="grid grid-cols-1">
          {/* <div className="grid grid-cols-1 gap-8 p-8 xl:grid-cols-3">
            {data.map(({ label, value }) => (
              <React.Fragment key={label}>
                <div className="grid gap-2">
                  <p className="text-md text-gray-400">{label}</p>
                  <p className="text-md font-bold">{value}</p>
                </div>
              </React.Fragment>
            ))}
          </div> */}
          <Faq custom faqData={user.faq} />
          {/* <div className="h-1 w-full bg-light-shadow"></div> */}
        </div>
      ) : (
        <FaqForm initialUsers={user} />
        // <BankForm user={user} />
      )}
    </div>
  )
}
