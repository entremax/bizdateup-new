import React from 'react'
import getUserDetails from '@/action/user'
import FaqForm from '@/components/profile/startup/FaqForm'
import type { Metadata } from 'next'
import Faq from '@/components/faq'

type Props = {
  searchParams: { [key: string]: string | string[] | undefined }
}

export const metadata: Metadata = {
  title: 'Bank Details - Profile | Bizdateup',
  description: 'Your Bank Details Overview',
}

export default async function Bank({ searchParams }: Props) {
  const editState: boolean = !searchParams.edit

  const { role, user } = await getUserDetails()
  if (!user || role !== 'startup') {
    return <>Loading</>
  }
  const data = [
    {
      label: 'Pitch',
      value: user.pitch,
    },
  ]

  return (
    <div className="flex flex-col">
      {!searchParams.edit ? (
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
