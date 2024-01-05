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
  const { role, user } = useAppSelector(({ authUser }) => authUser)
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
    if (!user || role !== 'investor') {
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
        const errorMessage = error.data?.message ?? error?.message
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

  return user &&
    role === 'investor' &&
    user?.firstName !== '' &&
    user?.lastName !== '' ? (
    <div
      className={cn(
        show
          ? 'delay-400 fixed bottom-48 left-1.5 right-1.5 z-[13] rounded-2xl  border-[0.015rem] border-solid border-primary bg-[#F9F9FF] p-2  shadow-2xl transition-opacity sm:left-auto sm:right-5 sm:p-3 md:bottom-4 '
          : 'collapse',
      )}>
      <h4 className="relative mb-1 pt-2  text-lg sm:mx-4 sm:text-xl">
        Are you interested in the start up?
      </h4>
      <Button
        size={'small'}
        type={'text'}
        shape={'circle'}
        className={'!absolute !right-2 !top-2'}
        onClick={handleClose}
        icon={<Icons.Close />}
      />
      <p className={'m-0 p-0 text-sm text-neutral-500 sm:mx-4'}>
        Get all updates Get daily updates regarding Investments
      </p>
      <div className="grid grid-cols-3 gap-4 py-4 sm:mx-4">
        <Button
          onClick={() => handleAddInterest('yes')}
          className={
            '!border-primary font-medium text-primary !outline-none hover:cursor-pointer  hover:bg-primary hover:!text-white'
          }
          size={'middle'}>
          Yes
        </Button>
        <Button
          onClick={() => handleAddInterest('no')}
          className={
            '!border-primary font-medium text-primary !outline-none hover:cursor-pointer hover:bg-primary hover:!text-white'
          }
          size={'middle'}>
          No
        </Button>
        <Button
          onClick={() => handleAddInterest('maybe')}
          className={
            '!border-primary font-medium text-primary hover:cursor-pointer hover:bg-primary hover:!text-white'
          }
          size={'middle'}>
          Maybe
        </Button>
      </div>
    </div>
  ) : null
}
