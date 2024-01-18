'use client'
import React from 'react'
import { useAppDispatch } from '@/store/hooks'
import { fetchUser } from '@/store/features/actions/fetchUser'

const CommonLayout = ({ children }: React.PropsWithChildren) => {
  const dispatch = useAppDispatch()

  React.useEffect(() => {
    dispatch(fetchUser())
  }, [])
  return children
}

export default CommonLayout
