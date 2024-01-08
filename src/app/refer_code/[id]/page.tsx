'use client'
import LoadingComponent from '@/components/LoadingComponent'
import { redirect } from 'next/navigation'

export default function ReferedUser({
  params: { id },
}: {
  params: { id: string }
}) {
  const referedUser = /^\/?(su|in)\d+[a-z]*\d*[a-z]*\d*$/
  console.log(referedUser.test(id))
  if (referedUser.test(id)) {
    sessionStorage.setItem('refer_code', id)
    const url = id.startsWith('su') ? '/signup/startup' : '/signup'
    return redirect(url)
  }
  return <LoadingComponent />
}
