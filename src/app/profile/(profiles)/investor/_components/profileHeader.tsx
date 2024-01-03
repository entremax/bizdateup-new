import { Button } from 'antd'
import ImageUploader from '@/components/profile/profileImageUploaderCustom'
import ReduxProvider from '@/store/Provider'
import { DataInner } from '@/types'
import { cookies } from 'next/headers'
import { redirect, RedirectType } from 'next/navigation'
import { fetch } from 'next/dist/compiled/@edge-runtime/primitives'
import { apiUri, cn } from '@/lib/utils'
import { Icons } from '@/icons/icon'
import React from 'react'

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
      <div className="flex flex-col items-center gap-4 sm:flex-row md:flex-grow">
        <div className="relative flex h-28 w-28 items-center justify-center">
          <ReduxProvider>
            <ImageUploader user={user} />
          </ReduxProvider>
          {user &&
            user.role === 'investor' &&
            user.membership.isMember === 'yes' && (
              <div className="absolute -top-[1.6rem] right-2 rotate-12">
                <Icons.Premium className={'h-12 w-16'} />
              </div>
            )}
          <div className="absolute -bottom-2 right-2 hover:cursor-pointer">
            <svg
              width="29"
              height="28"
              viewBox="0 0 29 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <circle cx="14.4499" cy="14.3327" r="13.6667" fill="#7474F4" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.1639 10.3946C18.1913 10.4424 18.2391 10.4766 18.3006 10.4766C19.9406 10.4766 21.2799 11.8144 21.2799 13.4526V17.5071C21.2799 19.1453 19.9406 20.4831 18.3006 20.4831H10.5926C8.94578 20.4831 7.61328 19.1453 7.61328 17.5071V13.4526C7.61328 11.8144 8.94578 10.4766 10.5926 10.4766C10.6473 10.4766 10.7019 10.4493 10.7224 10.3946L10.7634 10.3127C10.787 10.2632 10.8112 10.2122 10.8357 10.1605C11.0105 9.79232 11.2039 9.38495 11.3238 9.14554C11.6381 8.53122 12.1711 8.18993 12.8339 8.18311H16.0524C16.7153 8.18993 17.2551 8.53122 17.5694 9.14554C17.6771 9.36056 17.8411 9.70693 17.9991 10.0408C18.0317 10.1096 18.0641 10.1779 18.0956 10.2445L18.1639 10.3946ZM17.6658 13.0157C17.6658 13.357 17.9391 13.63 18.2808 13.63C18.6224 13.63 18.9026 13.357 18.9026 13.0157C18.9026 12.6744 18.6224 12.3945 18.2808 12.3945C17.9391 12.3945 17.6658 12.6744 17.6658 13.0157ZM13.2649 14.0738C13.586 13.753 14.0029 13.5824 14.447 13.5824C14.8912 13.5824 15.308 13.753 15.6224 14.067C15.9367 14.381 16.1075 14.7974 16.1075 15.241C16.1007 16.1557 15.3627 16.8997 14.447 16.8997C14.0029 16.8997 13.586 16.729 13.2717 16.4151C12.9574 16.1011 12.7865 15.6847 12.7865 15.241V15.2342C12.7797 14.8042 12.9505 14.3878 13.2649 14.0738ZM16.3398 17.1385C15.8546 17.6231 15.185 17.9234 14.447 17.9234C13.7295 17.9234 13.0598 17.6436 12.5473 17.1385C12.0416 16.6265 11.7615 15.9576 11.7615 15.2409C11.7546 14.531 12.0348 13.8621 12.5405 13.3502C13.053 12.8382 13.7295 12.5584 14.447 12.5584C15.1645 12.5584 15.841 12.8382 16.3466 13.3433C16.8523 13.8553 17.1325 14.531 17.1325 15.2409C17.1256 15.9849 16.825 16.6538 16.3398 17.1385Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        <div className="justify-left grid items-center gap-2">
          <h4 className="text-2xl text-primary-dark md:text-4xl">
            {user?.firstName + ' ' + user?.lastName}
          </h4>
          <p className="flex items-center gap-3 font-semibold text-neutral-500">
            {user &&
              user.role === 'investor' &&
              user.membership.isMember === 'yes' && (
                <svg
                  width="106"
                  height="14"
                  viewBox="0 0 106 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.218 13H5.032L0.874 0.147999H3.772L6.634 9.184H6.67L9.568 0.147999H12.484L8.218 13ZM13.5799 0.147999H16.4059V13H13.5799V0.147999ZM21.7145 6.196H23.9105C24.2345 6.196 24.5465 6.172 24.8465 6.124C25.1465 6.076 25.4105 5.986 25.6385 5.854C25.8665 5.71 26.0465 5.512 26.1785 5.26C26.3225 5.008 26.3945 4.678 26.3945 4.27C26.3945 3.862 26.3225 3.532 26.1785 3.28C26.0465 3.028 25.8665 2.836 25.6385 2.704C25.4105 2.56 25.1465 2.464 24.8465 2.416C24.5465 2.368 24.2345 2.344 23.9105 2.344H21.7145V6.196ZM18.8885 0.147999H24.6845C25.4885 0.147999 26.1725 0.267999 26.7365 0.508C27.3005 0.736 27.7565 1.042 28.1045 1.426C28.4645 1.81 28.7225 2.248 28.8785 2.74C29.0465 3.232 29.1305 3.742 29.1305 4.27C29.1305 4.786 29.0465 5.296 28.8785 5.8C28.7225 6.292 28.4645 6.73 28.1045 7.114C27.7565 7.498 27.3005 7.81 26.7365 8.05C26.1725 8.278 25.4885 8.392 24.6845 8.392H21.7145V13H18.8885V0.147999ZM35.9041 0.147999H39.8821L42.8881 8.986H42.9241L45.7681 0.147999H49.7461V13H47.1001V3.892H47.0641L43.9141 13H41.7361L38.5861 3.982H38.5501V13H35.9041V0.147999ZM58.2282 7.348C58.1082 6.7 57.8922 6.208 57.5802 5.872C57.2802 5.536 56.8182 5.368 56.1942 5.368C55.7862 5.368 55.4442 5.44 55.1682 5.584C54.9042 5.716 54.6882 5.884 54.5202 6.088C54.3642 6.292 54.2502 6.508 54.1782 6.736C54.1182 6.964 54.0822 7.168 54.0702 7.348H58.2282ZM54.0702 8.968C54.1062 9.796 54.3162 10.396 54.7002 10.768C55.0842 11.14 55.6362 11.326 56.3562 11.326C56.8722 11.326 57.3162 11.2 57.6882 10.948C58.0602 10.684 58.2882 10.408 58.3722 10.12H60.6222C60.2622 11.236 59.7102 12.034 58.9662 12.514C58.2222 12.994 57.3222 13.234 56.2662 13.234C55.5342 13.234 54.8742 13.12 54.2862 12.892C53.6982 12.652 53.2002 12.316 52.7922 11.884C52.3842 11.452 52.0662 10.936 51.8382 10.336C51.6222 9.736 51.5142 9.076 51.5142 8.356C51.5142 7.66 51.6282 7.012 51.8562 6.412C52.0842 5.812 52.4082 5.296 52.8282 4.864C53.2482 4.42 53.7462 4.072 54.3222 3.82C54.9102 3.568 55.5582 3.442 56.2662 3.442C57.0582 3.442 57.7482 3.598 58.3362 3.91C58.9242 4.21 59.4042 4.618 59.7762 5.134C60.1602 5.65 60.4362 6.238 60.6042 6.898C60.7722 7.558 60.8322 8.248 60.7842 8.968H54.0702ZM62.3721 3.694H64.7841V4.954H64.8201C65.1561 4.474 65.5581 4.102 66.0261 3.838C66.5061 3.574 67.0521 3.442 67.6641 3.442C68.2521 3.442 68.7861 3.556 69.2661 3.784C69.7581 4.012 70.1301 4.414 70.3821 4.99C70.6581 4.582 71.0301 4.222 71.4981 3.91C71.9781 3.598 72.5421 3.442 73.1901 3.442C73.6821 3.442 74.1381 3.502 74.5581 3.622C74.9781 3.742 75.3381 3.934 75.6381 4.198C75.9381 4.462 76.1721 4.81 76.3401 5.242C76.5081 5.662 76.5921 6.172 76.5921 6.772V13H74.0361V7.726C74.0361 7.414 74.0241 7.12 74.0001 6.844C73.9761 6.568 73.9101 6.328 73.8021 6.124C73.6941 5.92 73.5321 5.758 73.3161 5.638C73.1121 5.518 72.8301 5.458 72.4701 5.458C72.1101 5.458 71.8161 5.53 71.5881 5.674C71.3721 5.806 71.1981 5.986 71.0661 6.214C70.9461 6.43 70.8621 6.682 70.8141 6.97C70.7781 7.246 70.7601 7.528 70.7601 7.816V13H68.2041V7.78C68.2041 7.504 68.1981 7.234 68.1861 6.97C68.1741 6.694 68.1201 6.442 68.0241 6.214C67.9401 5.986 67.7901 5.806 67.5741 5.674C67.3701 5.53 67.0641 5.458 66.6561 5.458C66.5361 5.458 66.3741 5.488 66.1701 5.548C65.9781 5.596 65.7861 5.698 65.5941 5.854C65.4141 5.998 65.2581 6.214 65.1261 6.502C64.9941 6.778 64.9281 7.144 64.9281 7.6V13H62.3721V3.694ZM85.4346 8.356C85.4346 7.96 85.3926 7.582 85.3086 7.222C85.2246 6.862 85.0926 6.544 84.9126 6.268C84.7326 5.992 84.5046 5.776 84.2286 5.62C83.9646 5.452 83.6406 5.368 83.2566 5.368C82.8846 5.368 82.5606 5.452 82.2846 5.62C82.0086 5.776 81.7806 5.992 81.6006 6.268C81.4206 6.544 81.2886 6.862 81.2046 7.222C81.1206 7.582 81.0786 7.96 81.0786 8.356C81.0786 8.74 81.1206 9.112 81.2046 9.472C81.2886 9.832 81.4206 10.15 81.6006 10.426C81.7806 10.702 82.0086 10.924 82.2846 11.092C82.5606 11.248 82.8846 11.326 83.2566 11.326C83.6406 11.326 83.9646 11.248 84.2286 11.092C84.5046 10.924 84.7326 10.702 84.9126 10.426C85.0926 10.15 85.2246 9.832 85.3086 9.472C85.3926 9.112 85.4346 8.74 85.4346 8.356ZM78.6126 0.147999H81.1686V4.828H81.2046C81.5166 4.348 81.9366 4 82.4646 3.784C83.0046 3.556 83.5626 3.442 84.1386 3.442C84.6066 3.442 85.0686 3.538 85.5246 3.73C85.9806 3.922 86.3886 4.216 86.7486 4.612C87.1206 5.008 87.4206 5.518 87.6486 6.142C87.8766 6.754 87.9906 7.486 87.9906 8.338C87.9906 9.19 87.8766 9.928 87.6486 10.552C87.4206 11.164 87.1206 11.668 86.7486 12.064C86.3886 12.46 85.9806 12.754 85.5246 12.946C85.0686 13.138 84.6066 13.234 84.1386 13.234C83.4546 13.234 82.8426 13.126 82.3026 12.91C81.7626 12.694 81.3546 12.328 81.0786 11.812H81.0426V13H78.6126V0.147999ZM95.8805 7.348C95.7605 6.7 95.5445 6.208 95.2325 5.872C94.9325 5.536 94.4705 5.368 93.8465 5.368C93.4385 5.368 93.0965 5.44 92.8205 5.584C92.5565 5.716 92.3405 5.884 92.1725 6.088C92.0165 6.292 91.9025 6.508 91.8305 6.736C91.7705 6.964 91.7345 7.168 91.7225 7.348H95.8805ZM91.7225 8.968C91.7585 9.796 91.9685 10.396 92.3525 10.768C92.7365 11.14 93.2885 11.326 94.0085 11.326C94.5245 11.326 94.9685 11.2 95.3405 10.948C95.7125 10.684 95.9405 10.408 96.0245 10.12H98.2745C97.9145 11.236 97.3625 12.034 96.6185 12.514C95.8745 12.994 94.9745 13.234 93.9185 13.234C93.1865 13.234 92.5265 13.12 91.9385 12.892C91.3505 12.652 90.8525 12.316 90.4445 11.884C90.0365 11.452 89.7185 10.936 89.4905 10.336C89.2745 9.736 89.1665 9.076 89.1665 8.356C89.1665 7.66 89.2805 7.012 89.5085 6.412C89.7365 5.812 90.0605 5.296 90.4805 4.864C90.9005 4.42 91.3985 4.072 91.9745 3.82C92.5625 3.568 93.2105 3.442 93.9185 3.442C94.7105 3.442 95.4005 3.598 95.9885 3.91C96.5765 4.21 97.0565 4.618 97.4285 5.134C97.8125 5.65 98.0885 6.238 98.2565 6.898C98.4245 7.558 98.4845 8.248 98.4365 8.968H91.7225ZM99.9525 3.694H102.382V5.422H102.418C102.538 5.134 102.7 4.87 102.904 4.63C103.108 4.378 103.342 4.168 103.606 4C103.87 3.82 104.152 3.682 104.452 3.586C104.752 3.49 105.064 3.442 105.388 3.442C105.556 3.442 105.742 3.472 105.946 3.532V5.908C105.826 5.884 105.682 5.866 105.514 5.854C105.346 5.83 105.184 5.818 105.028 5.818C104.56 5.818 104.164 5.896 103.84 6.052C103.516 6.208 103.252 6.424 103.048 6.7C102.856 6.964 102.718 7.276 102.634 7.636C102.55 7.996 102.508 8.386 102.508 8.806V13H99.9525V3.694Z"
                    fill="#F3B518"
                  />
                </svg>
              )}
            User since 2023
          </p>
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
