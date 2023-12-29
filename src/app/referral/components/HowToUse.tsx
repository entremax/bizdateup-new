import React from 'react'
import { Space, Steps } from 'antd'
import Message from '@/icons/Message'
import EditStep from '@/icons/EditStep'
import Benefits from '@/icons/Benefits'

const HowToUse = () => {
  const description =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis  eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur '
  return (
    <div className="border_gray mx-3 grid gap-4 rounded-xl p-4 md:mx-14 md:pr-8 lg:mx-32">
      <h4 className="text-semibold text-2xl text-primary-dark">How to use</h4>
      <Space>
        <Steps
          className={'how-to-use-steps'}
          direction="vertical"
          current={1}
          items={[
            {
              icon: (
                <IconWrapper>
                  <Message />
                </IconWrapper>
              ),
              status: 'finish',
              title: 'Send Invitation',
              description,
            },
            {
              icon: (
                <IconWrapper>
                  <EditStep />
                </IconWrapper>
              ),
              status: 'finish',
              title: 'Registration',
              description,
            },
            {
              icon: (
                <IconWrapper>
                  <Benefits />
                </IconWrapper>
              ),
              status: 'finish',
              title: 'Get Benefits',
              description,
            },
          ]}
        />
      </Space>
    </div>
  )
}
export default HowToUse

const IconWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="rounded bg-light-shadow p-4">{children}</div>
}
