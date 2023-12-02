'use client'
import CopyToClipboard from 'react-copy-to-clipboard'
import React from 'react'
import { Tooltip } from 'antd'

type Props = {
  text: string
  children: React.ReactNode
  description?: string
}
const CopyWrapper: React.FC<Props> = ({ text, children }) => {
  const [title, setTitle] = React.useState(text)
  const handleCopy = (text: string) => {
    setTitle(`Copied ${text}`)
    setTimeout(() => {
      setTitle('')
    }, 1000)
  }
  return (
    <CopyToClipboard text={text.toString()} onCopy={handleCopy}>
      <Tooltip title={title}>{children}</Tooltip>
    </CopyToClipboard>
  )
}
export default CopyWrapper
