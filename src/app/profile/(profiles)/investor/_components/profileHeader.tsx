import { Button } from 'antd'
import ImageUploader from '@/components/profile/profileImageUploaderCustom'
import ReduxProvider from '@/store/Provider'
import { DataInner } from '@/types'
import { cookies } from 'next/headers'
import { redirect, RedirectType } from 'next/navigation'
import { fetch } from 'next/dist/compiled/@edge-runtime/primitives'
import { apiUri, cn } from '@/lib/utils'

async function getUserDetails() {
  const token = cookies().get('token')?.value
  const user_id = cookies().get('user_id')?.value
  const role = cookies().get('role')?.value

  if (!user_id || !token) {
    redirect('/login', 'push' as RedirectType)
  }
  let url = '/investor/fetchbyid'
  let config: any = {
    next: { revalidate: 0 },
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ refId: user_id }),
  }
  if (role === 'startup') {
    url = '/startup/fetchStartupById?refId=' + user_id
    config = {
      next: { revalidate: 0 },
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  }
  const res = await fetch(apiUri().v0 + url, config)
    .then((res) => {
      console.log(res)
      return res.json()
    })
    .catch((e) => {
      console.log(e)
      throw new Error(e)
    })
  return {
    refId: user_id,
    status: res?.data?.status,
    token: token,
    user: res?.data?.data as DataInner,
  }
}

export default async function ProfileHeader() {
  const { user }: { user: DataInner } = await getUserDetails()

  return (
    <div className={cn(`flex flex-col items-center py-6 md:flex-row`)}>
      <div className="flex items-center gap-4 md:flex-grow">
        <div className="flex h-28 w-28 items-center justify-center">
          <ReduxProvider>
            <ImageUploader />
          </ReduxProvider>
        </div>
        <div className="justify-left grid items-center gap-2">
          <h4 className="text-2xl text-primary-dark md:text-4xl">
            {user?.firstName + ' ' + user?.lastName}
          </h4>
          <p className="font-semibold text-neutral-500">User since 2023</p>
          <p className="font-normal text-neutral-400">{user?.email}</p>
        </div>
      </div>
      <div className="my-4 flex items-center justify-center gap-3 md:m-auto">
        <Button
          type={'default'}
          className={
            'hidden !h-auto !border-none !bg-light-shadow !px-6 !py-2 font-medium !text-primary !outline-none md:inline-block'
          }>
          Check Portfolio
        </Button>
        <Button
          type={'default'}
          className={
            '!h-auto w-full !border-none !bg-primary !px-6 !py-2 !text-white !outline-none md:w-auto'
          }
          block>
          Book a Call
        </Button>
      </div>
    </div>
  )
}
