'use client'
import React from 'react'
import { useAppDispatch } from '@/store/hooks'
import { FetchUser } from '@/lib/fetchUser'


const CommonLayout = ({ children }: React.PropsWithChildren) => {
  const dispatch=useAppDispatch()
  React.useEffect(()=>{
    dispatch(FetchUser())
  },[])
  return children
}

export default CommonLayout
