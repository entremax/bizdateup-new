'use client'
import React, { useEffect, useState } from 'react'
import { Collapse, CollapseProps } from 'antd'
import data from '@/data'
import { Icons } from '@/components/icons/icon'

export const dynamic = 'force-dynamic'

const FrequentlyAsked: React.FC<{
  custom?: boolean
  faqData?: { _id: string; question: string; answer: string }[]
}> = ({ custom = false, faqData }) => {
  const [items, setItems] = useState<any>([])

  // Opt out of caching for all data requests in the route segment

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
    // console.log(copyArr)
    // Return the first 4 items
    return copyArr.slice(0, 4)
  }

  useEffect(() => {
    if (custom) {
      setItems(convertToCollapseFormat(faqData))
    } else {
      setItems(getRandomFourItems({ array: data.faqData }))
    }
  }, [])

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
      className={'mt-12 !rounded-none bg-transparent text-black-lighter'}
      expandIconPosition={'end'}
      expandIcon={({ isActive }) => (
        <Icons.ArrowRight
          style={{ transform: `rotate(${isActive ? '270deg' : '90deg'})` }}
        />
      )}
      items={items}
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
