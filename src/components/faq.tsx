'use client'
import React from 'react'
import type { CollapseProps } from 'antd'
import { Collapse } from 'antd'
import data from '@/data'
import { Icons } from '@/icons'

const FrequentlyAsked: React.FC<{
  custom?: boolean
  faqData?: { _id: string; question: string; answer: string }[]
}> = ({ custom = false, faqData }) => {
  function getRandomFourItems({ array }: { array: CollapseProps['items'] }) {
    if (!array) {
      return
    }
    // Create a copy of the array
    const copyArr = array.slice()

    // Shuffle the array
    for (let i = copyArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[copyArr[i], copyArr[j]] = [copyArr[j], copyArr[i]]
    }

    // Return the first 4 items
    return copyArr.slice(0, 4)
  }
  function convertToCollapseFormat(
    collapseData?: { _id: string; question: string; answer: string }[],
  ) {
    return (custom && collapseData ? collapseData : data.faqData).map(
      (item: any) => ({
        key: item._id,
        label: item.question,
        children: <p className="children-text">{item.answer}</p>,
      }),
    )
  }
  return (
    <Collapse
      className={'text-black-lighter !rounded-none bg-transparent mt-12'}
      expandIconPosition={'end'}
      expandIcon={({ isActive }) => (
        <Icons.ArrowRight
          style={{ transform: `rotate(${isActive ? '270deg' : '90deg'})` }}
        />
      )}
      items={
        custom
          ? convertToCollapseFormat(faqData)
          : getRandomFourItems({ array: data.faqData })
      }
      bordered={false}
      defaultActiveKey={['1']}
      size={'large'}
      style={{
        color: '#000',
      }}
    />
  )
}

export default FrequentlyAsked
