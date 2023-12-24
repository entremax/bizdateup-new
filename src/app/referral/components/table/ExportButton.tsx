'use client'
import { Button, Tooltip } from 'antd'
import { DownloadOutlined } from '@ant-design/icons'
import { useState } from 'react'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

interface TableTabsProps {
  table?: string | string[] | undefined
}

export default function ExportButton({ table }: TableTabsProps) {
  const [loading, setLoading] = useState(false)

  const handleExport = () => {
    setLoading(true)
    const table = document.getElementById('refer-table')

    if (!table) {
      console.error(`Table with id refer-table not found.`)
      return
    }

    html2canvas(table).then((canvas) => {
      const pdf = new jsPDF('p', 'pt', 'letter')
      const imgData = canvas.toDataURL('image/png')
      const imgWidth = pdf.internal.pageSize.getWidth()
      const imgHeight = (canvas.height * imgWidth) / canvas.width

      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight)

      pdf.save(`ReferralBizdateup.pdf`)
    })
    setLoading(false)
  }
  return (
    <Tooltip title={'Export Table as PDF'}>
      <Button
        loading={loading}
        type={'text'}
        className={'!bg-transparent font-medium !text-primary'}
        onClick={handleExport}
        icon={<DownloadOutlined />}>
        Export
      </Button>
    </Tooltip>
  )
}
