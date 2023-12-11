import { Button } from 'antd'
import ImageUploader from '@/components/profile/profileImageUploader'
import ReduxProvider from '@/store/Provider'
import getUserDetails from '@/action/user'
import { DataInner } from '@/types'

export default async function ProfileHeader() {
  const { user }: { user: DataInner } = await getUserDetails()

  return (
    <div className={'flex flex-col items-center py-6 md:flex-row'}>
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
          }>
          Book a Call
        </Button>
      </div>
    </div>
  )
}
