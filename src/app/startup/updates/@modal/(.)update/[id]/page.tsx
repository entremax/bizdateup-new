'use client'
import CustomModal from '@/components/modal/customModal'
import { useAppSelector } from '@/store/hooks'
import { useEffect, useState } from 'react'
import { StartupUpdate } from '@/types/startup'

export default async function StartupUpdateDetails({
  params: { id },
}: {
  params: { id: string }
}) {
  const { updates } = useAppSelector((state) => state.startup)
  const [update, setUpdate] = useState<StartupUpdate | null>(null)

  useEffect(() => {
    const updateDetails = updates.find((item) => item._id === id) ?? null
    setUpdate(updateDetails)
  }, [updates, id])
  return (
    <CustomModal open={true} title={'Startup Update'} centered>
      Update
    </CustomModal>
  )
}
