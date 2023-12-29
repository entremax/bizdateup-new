'use client'
import CustomModal from '@/components/modal/customModal'
import React, { useState } from 'react'
import { Button } from 'antd'
import { useAppSelector } from '@/store/hooks'
import { useCheckRiskMutation } from '@/services/apiSlice'

export const dynamic = 'force-dynamic'

export default function RiskDisclosure() {
  const { role, user } = useAppSelector(({ authUser }) => authUser)
  const [riskAccepted, setRiskAccepted] = useState(
    role === 'investor' && user?.acknowledgement === 'false',
  )
  const [checkRisk] = useCheckRiskMutation()
  
  const handler = () => {
    checkRisk('true')
      .unwrap()
      .then((res) => setRiskAccepted(!riskAccepted))
      .catch((e) => console.log(e))
  }
  return (
    <div>
      <CustomModal
        title={
          <h4 className={'m-0 p-0 text-2xl font-bold text-gray-900'}>
            Risk disclosure for start up investment
          </h4>
        }
        className={'!risk-modal'}
        closeIcon={true}
        open={riskAccepted}
        closable={false}
        maskClosable={false}
        footer={
          <div>
            <Button
              onClick={handler}
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
    </div>
  )
}
