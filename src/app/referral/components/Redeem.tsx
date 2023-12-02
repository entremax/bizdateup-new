'use client'
import React from 'react'
import { Button, Form } from 'antd'
import Input from '@/components/profile/form_components/Input'
import { useRedeemCommissionMutation } from '@/services/acceleratorSlice'

type Props = {
  investorCommissionConfirmed: string
  startupCommissionConfirmed: string
  acceleratorId: string
  totalCommission: string
  redeemable: string
  totalWithdrawals: {
    approve: string
    pending: string
  }
}
type FieldType = {
  redeem: string
}
const Redeem: React.FC<Props> = ({
  acceleratorId,
  totalCommission,
  redeemable: redemable,
  totalWithdrawals,
}) => {
  const [redeemCommission, { isLoading }] = useRedeemCommissionMutation()
  const handleRedeem = ({ redeem }: { redeem: string }) => {
    const data = {
      acceleratorId,
      amount: redeem,
      totalCommission,
      redemable,
    }
    if (
      parseInt(redeem) <=
      parseFloat(totalCommission) -
        Number(totalWithdrawals.approve) +
        parseInt(totalWithdrawals.pending)
    ) {
      redeemCommission(data)
        .unwrap()
        .then((res) => res)
        .catch((e) => console.log(e))
    }
  }

  const validateAmount = (_: any, value: any) => {
    if (value < 0) {
      return Promise.reject(new Error('Amount should not be less than 0'))
    } else if (value >= 10000) {
      return Promise.resolve()
    }
    return Promise.reject(
      new Error('Amount should be more than or equal to 10000'),
    )
  }

  return (
    <div className="flex flex-col gap-4">
      <h4 className="flex items-center justify-between gap-3 text-lg font-semibold md:text-xl">
        <span>Redeemable amount</span> <span>{redemable}</span>
      </h4>
      <p className="text-xs text-[#6E6E73] lg:text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius mod
        tempor incididunt ut labore et dolore magn Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eius mod
      </p>
      <Form
        fields={[{ name: ['redeem'], value: redemable }]}
        onFinish={handleRedeem}>
        <Form.Item<FieldType>
          name="redeem"
          rules={[
            { required: true, message: 'Please enter redeem amount' },
            { validator: validateAmount },
          ]}>
          <Input
            label={'Redeem Amount'}
            name={'Redeem Amount'}
            size={'large'}
            className={
              '!bg-white !outline-[0.022rem] !outline-primary required:!border-[0.022rem] required:!border-primary'
            }
            placeholder={'0'}
            labelClassName={'bg-transparent top-[0.4rem]'}
          />
        </Form.Item>
        <Form.Item>
          <Button
            size={'large'}
            type="primary"
            className={'!bg-[#DDA822] !outline-[#DDA822]'}
            htmlType="submit"
            block>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
export default Redeem
