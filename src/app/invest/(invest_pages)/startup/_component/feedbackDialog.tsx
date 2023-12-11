'use client'
import { Button } from 'antd'
import { Icons } from '@/components/icons/icon'
import { useEffect, useState } from 'react'
import { capitalizeFirstLetter, cn } from '@/lib/utils'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { useParams, useSearchParams } from 'next/navigation'
import { Interest } from '@/types/invest'
import { setNotification } from '@/reducers/others/notificationSlice'
import { useStartupFeedbackMutation } from '@/services/apiSlice'

export default function FeedbackDialog() {
  const params = useParams()
  const dispatch = useAppDispatch()
  const searchParams = useSearchParams()
  const { user } = useAppSelector(({ authUser }) => authUser)
  const [startupFeedback] = useStartupFeedbackMutation()
  const [show, setShow] = useState(false)
  const startupName = searchParams.get('name')
  const { id } = params
  const handleClose = () => {
    setShow(!show)
  }
  useEffect(() => {
    setTimeout(() => {
      setShow(true)
    }, 10000)
  }, [])
  const handleAddInterest = (interest: Interest) => {
    if (!user) {
      return
    }
    const data = {
      startupId: id as string,
      startupName: startupName ? startupName : '',
      investorId: user._id,
      investorName: user?.firstName + user?.lastName,
      investorEmail: user?.email,
      interested: interest,
    }
    startupFeedback(data)
      .unwrap()
      .then((res) => {
        handleClose()
        dispatch(
          setNotification({
            type: 'info',
            message: `${
              typeof res === 'string'
                ? res
                : 'message' in res
                  ? capitalizeFirstLetter(res.message.split(' '))
                  : ''
            }`,
          }),
        )
      })
      .catch((error: any) => {
        console.log(error)
        const errorMessage = error.data?.message
        const errorCode = error.status
        if (errorMessage && errorCode) {
          handleClose()
          dispatch(
            setNotification({
              type: 'error',
              message: `${errorMessage} (code:${errorCode})`,
            }),
          )
        }
      })
  }

  return (
    <div
      className={cn(
        show
          ? 'bottom-4 right-5 rounded-xl border-[0.015rem] border-solid  border-primary bg-gray-100 p-3 xl:fixed'
          : 'collapse',
      )}>
      <div className="flex w-full items-center justify-end">
        <Button
          size={'small'}
          type={'text'}
          shape={'circle'}
          onClick={handleClose}
          icon={<Icons.Close />}
        />
      </div>
      <h4 className="m-0 p-0 text-xl">Are you interested in the start up?</h4>
      <p className={'m-0 p-0 text-neutral-500'}>
        Get all updates Get daily updates regarding Investments
      </p>
      <div className="grid grid-cols-3 gap-4 py-4">
        <Button
          onClick={() => handleAddInterest('yes')}
          className={
            'font-medium text-primary !outline-none hover:cursor-pointer  hover:bg-primary hover:!text-white'
          }
          size={'large'}>
          Yes
        </Button>
        <Button
          onClick={() => handleAddInterest('no')}
          className={
            'font-medium text-primary !outline-none hover:cursor-pointer hover:bg-primary hover:!text-white'
          }
          size={'large'}>
          No
        </Button>
        <Button
          onClick={() => handleAddInterest('maybe')}
          className={
            'font-medium text-primary !outline-none hover:cursor-pointer hover:bg-primary hover:!text-white'
          }
          size={'large'}>
          Maybe
        </Button>
      </div>
    </div>
  )
}
