import { Button } from 'antd'
import ImageUploader from '@/components/profile/profileImageUploaderCustom'
import ReduxProvider from '@/store/Provider'
import { DataInner , DataStartup } from '@/types'
import { cookies } from 'next/headers'
import { redirect, RedirectType } from 'next/navigation'
import { fetch } from 'next/dist/compiled/@edge-runtime/primitives'
import { apiUri, cn } from '@/lib/utils'

async function getUserDetails(role) {
  const token = cookies().get('token')?.value
  // console.log("🚀 ~ file: profileHeader.tsx:12 ~ getUserDetails ~ token:", token)
  const user_id = cookies().get('user_id')?.value
  // console.log("🚀 ~ file: profileHeader.tsx:13 ~ getUserDetails ~ user_id:", user_id)
  // const role = cookies().get('role')?.value
  // console.log("🚀 ~ file: profileHeader.tsx:15 ~ getUserDetails ~ role:", role)

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
    url = '/startup/fetchStartupByRef?refId=' + user_id
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
      // console.log("🚀 ~ file: profileHeader.tsx:41 ~ .then ~ res:", res)
      return res.json()
    })
    .catch((e) => {
      console.log("🚀 ~ file: profileHeader.tsx:46 ~ getUserDetails ~ e:", e)
      throw new Error(e)
    })
    const data = {
      refId: user_id,
      status: 200,
      token: token,
      user: res?.data?.data as any,
    }
    // console.log("🚀 ~ file: profileHeader.tsx:58 ~ getUserDetails ~ data:", data)
  return data;
}

export default async function ProfileHeader() {
  const role = cookies().get('role')?.value
  const { user }: { user: any } = await getUserDetails(role)
  // console.log("🚀 ~ file: profileHeader.tsx:58 ~ ProfileHeader ~ user:", user)

  return (
    <div className={cn(`flex flex-col items-center py-6 md:flex-row`)}>
      <div className="flex items-center gap-4 md:flex-grow">
        <div className="flex h-28 w-28 items-center justify-caenter">
          <ReduxProvider>
            <ImageUploader />
          </ReduxProvider>
        </div>
        {/* <Button>test</Button> */}
        {role == "investor"?
        <div className="justify-left grid items-center gap-2">
          <h4 className="text-2xl text-primary-dark md:text-4xl">
            {user?.firstName + ' ' + user?.lastName}
          </h4>
          <p className="font-semibold text-neutral-500">User since 2023</p>
          <p className="font-normal text-neutral-400">{user?.email}</p>
        </div>
        :
        <div className="justify-left grid items-center gap-2">
          <h4 className="text-2xl text-primary-dark md:text-4xl">
            {user?.registeredCompanyName}
          </h4>
 
          <p className="font-normal text-neutral-400">Profile Owner : {user?.founderLastName}</p>
        </div>
        }
      </div>
      <div className="my-4 flex items-center justify-center gap-3 md:m-auto">
        {role=="startup"?
        <button
          // type={'default'}
          className={
            '!h-auto w-full !border-none !bg-primary !px-6 !py-2 !text-white !outline-none md:w-auto'
          }
          >
          Learn to Create Best Profile
        </button>
        :
        <>
        <button
          // type={'default'}
          className={
            'hidden !h-auto !border-none !bg-light-shadow !px-6 !py-2 font-medium !text-primary !outline-none md:inline-block'
          }
          >
          
        </button>
        
        <button
          // type={'default'}
          className={
            '!h-auto w-full !border-none !bg-primary !px-6 !py-2 !text-white !outline-none md:w-auto'
          }
          // block
          >
          Book a Call
        </button>
        </>}
      </div>
    </div>
  )
}
