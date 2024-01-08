'use client'
import React, { useMemo } from 'react'
import { notification } from 'antd'
import { useAppSelector } from '@/store/hooks'
import { useDispatch } from 'react-redux'
import {
  destroyNotification,
  setNotification,
} from '@/reducers/others/notificationSlice'
import { NotificationType } from '@/types'
import { store } from '@/store'

const Context = React.createContext({ name: 'Default' })

const AntNotification: React.FC = () => {
  const [api, contextHolder] = notification.useNotification()
  const { type, message, description } = useAppSelector((state) => state.Notify)
  const dispatch = useDispatch()

  const openNotification = (
    notificationType: NotificationType,
    message: string,
  ) => {
    api[notificationType]({
      message: `${message}`,
      description: <Context.Consumer>{({ name }) => name}</Context.Consumer>,
      placement: 'bottomRight',
    })
  }
  React.useEffect(() => {
    if (type !== null && message !== null) {
      openNotification(type, message)
      setTimeout(() => {
        dispatch(destroyNotification())
      }, 5000)
    }
  }, [type, message])
  const contextValue = useMemo(
    () => ({ name: description ? description : '' }),
    [description],
  )

  return (
    <Context.Provider value={contextValue}>{contextHolder}</Context.Provider>
  )
}
export const notifyUser = (
  type: NotificationType,
  message: string,
  description?: string,
) => {
  store.dispatch(setNotification({ type, message, description }))
}
export default AntNotification
