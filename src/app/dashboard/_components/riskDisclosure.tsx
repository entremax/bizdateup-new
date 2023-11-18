'use client'
import CustomModal from '@/ui/customModal'
import React from 'react'
import { Button } from 'antd'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { setRiskAccept } from '@/reducers/user/authSlice'

export default function RiskDisclosure() {
  const dispatch = useAppDispatch()
  const { riskAccepted } = useAppSelector((state) => state.authUser)
  return (
    <>
      <CustomModal
        title={
          <h4 className={'m-0 p-0 text-2xl font-bold text-gray-900'}>
            Risk disclosure for start up investment
          </h4>
        }
        className={'!risk-modal'}
        closeIcon={true}
        open={!riskAccepted}
        closable={false}
        maskClosable={false}
        footer={
          <div>
            <Button
              onClick={() => {
                dispatch(setRiskAccept())
              }}
              className={'!bg-primary !text-white'}
              size={'large'}
              block>
              Okay,I understand
            </Button>
          </div>
        }>
        <ul className={'list-disc'}>
          <li className="text-sm font-normal text-[#444]">To be updated</li>
        </ul>
      </CustomModal>
    </>
  )
}
