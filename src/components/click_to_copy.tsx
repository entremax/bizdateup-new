'use client'
import CopyToClipboard from 'react-copy-to-clipboard'
import React from 'react'
import { Tooltip } from 'antd'

type Props = {
  text: string
  children: any
  description?: string
}
const CopyWrapper: React.FC<Props> = ({ text, children }) => {
  const [title, setTitle] = React.useState(text)
  const handleCopy = (text: string) => {
    setTitle(`Copied ${text}`)
  }
  return (
    <Tooltip title={title}>
      <CopyToClipboard text={text.toString()} onCopy={handleCopy}>
        {children}
      </CopyToClipboard>
    </Tooltip>
  )
}
export default CopyWrapper
