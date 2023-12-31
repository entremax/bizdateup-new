'use client'
import CustomModal from '@/components/modal/customModal'
import { useAppSelector } from '@/store/hooks'
import { useEffect, useState } from 'react'
import { StartupUpdate } from '@/types/startup'
import { useRouter } from 'next/navigation'

export default async function StartupUpdateDetails({
  params: { id },
}: {
  params: { id: string }
}) {
  const router = useRouter()
  const { updates } = useAppSelector((state) => state.startup)
  const [update, setUpdate] = useState<StartupUpdate | null>(null)
  const [open, setOpen] = useState(true)
  useEffect(() => {
    const updateDetails = updates.find((item) => item._id === id) ?? null
    setUpdate(updateDetails)
  }, [updates, id])
  const handleClose = () => {
    setOpen(false)
    return router.back()
  }

  return (
    <CustomModal
      onOk={handleClose}
      onCancel={handleClose}
      open={open}
      title={'Startup Update'}
      centered>
      Update
    </CustomModal>
  )
}
