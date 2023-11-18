import React from 'react'
import ReduxProvider from '@/store/Provider'
import CaseFreeDrop from '@/app/payment/_components/casefreeDrop'
import { redirect } from 'next/navigation'

type Props = {
  params: { session_id: string }
  searchParams: { order_id: string; startup_id: string }
}
export default function Page({ params, searchParams }: Props) {
  const { session_id } = params
  const order_id = searchParams?.order_id

  if (!order_id || !session_id) {
    return redirect('/invest')
  }
  return (
    <div
      className={
        'scrollbar m-auto grid w-full items-center justify-center overflow-clip rounded pb-0 pt-20 caret-transparent md:h-[100%_-_5rem] md:w-1/4'
      }>
      <ReduxProvider>
        <CaseFreeDrop session_id={session_id} searchParams={searchParams} />
      </ReduxProvider>
    </div>
  )
}
