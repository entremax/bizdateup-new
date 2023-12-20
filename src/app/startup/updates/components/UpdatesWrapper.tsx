'use client'
import React, { useRef } from 'react'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import StartupUpdate from '@/components/StartupUpdate'
import { setStartupUpdates } from '@/reducers/user/startupSlice'
import { notifyUser } from '@/components/notification'
import { useFetchStartupUpdatesMutation } from '@/services/startupApiSlice'

export default function UpdatesWrapper() {
  const renderCount = useRef(0)
  const dispatch = useAppDispatch()
  const { updates } = useAppSelector((state) => state.startup)
  const [fetchUpdates, { isLoading: fetching }] =
    useFetchStartupUpdatesMutation()
  React.useEffect(() => {
    if (renderCount.current === 0) {
      fetchUpdates('')
        .unwrap()
        .then((res) => {
          if (res.data) {
            dispatch(setStartupUpdates({ updates: res.data }))
          } else {
            notifyUser('error', `Something went wrong`)
          }
        })
        .catch((error) => {
          const errorMessage = error.data?.message
          const errorCode = error.status
          if (errorMessage && errorCode) {
            notifyUser('error', `${errorMessage} (code:${errorCode})`)
          }
        })

      renderCount.current += 1
    }
  }, [])
  return (
    <>
      {updates.length > 0
        ? updates.map((update) => (
            <StartupUpdate
              key={update._id}
              update={update}
              component_type={'page'}
            />
          ))
        : 'No updates to show'}
    </>
  )
}
