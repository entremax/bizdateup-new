'use client'
import { Button } from 'antd'
import { DownloadOutlined } from '@ant-design/icons'
import { useState } from 'react'

interface TableTabsProps {
  table?: string | string[] | undefined
}

export default function ExportButton({ table }: TableTabsProps) {
  const [loading, setLoading] = useState(false)

  const handleExport = () => {
    setLoading(true)
  }
  return (
    <Button
      loading={loading}
      type={'text'}
      className={'!bg-transparent font-medium !text-primary'}
      onClick={handleExport}
      icon={<DownloadOutlined />}
      ghost>
      Export
    </Button>
  )
}
