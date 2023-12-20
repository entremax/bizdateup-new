'use client'
import React, { useState } from 'react'
import CustomModal from '@/components/modal/customModal'
import { Button } from 'antd'
import { StartupData } from '@/types/invest'

type Props = {
  startup: StartupData
}

const HowItWorks: React.FC<Props> = ({ startup }) => {
  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(false)
  }
  return (
    <>
      <CustomModal
        title={
          // <div className="flex items-center gap-4 p-4 shadow">
          <h5 className="m-0 p-0 px-2 py-3 text-xl font-bold leading-normal text-primary-dark">
            How it works?
          </h5>
          // </div>
        }
        centered
        openType={'custom button'}
        className={'!how-it-works'}
        customOpenButton={
          <Button
            onClick={() => setOpen(!open)}
            className={
              'text-whit flex items-center justify-center rounded-lg  !border-0 !bg-light-shadow !px-2   !py-2  text-sm !font-medium leading-[1.57563rem] !text-primary !outline-none lg:text-base'
            }
            size={'large'}
            block
            type={'default'}>
            How it works
          </Button>
        }
        closable
        closeIcon
        open={open}
        onOk={handleClose}
        onCancel={handleClose}>
        <div className="col-span-full flex aspect-video w-full justify-center justify-self-center md:col-end-8 md:pb-8 xl:col-start-2 xl:col-end-8">
          {startup?.youtubeVideoUrl?.includes('embed') ? (
            <iframe
              style={{
                border: '0',
              }}
              src={startup?.youtubeVideoUrl}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="aspect-video w-full rounded-xl"></iframe>
          ) : (
            ''
          )}
        </div>
        <ul className={'m-0 list-disc pt-0 text-primary'}>
          <li className="text-sm font-normal text-[#444]">To be updated</li>
        </ul>
      </CustomModal>
    </>
  )
}
export default HowItWorks
