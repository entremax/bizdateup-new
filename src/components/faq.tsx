'use client'
import React, { useEffect, useReducer, useRef } from 'react'
import { Collapse, CollapseProps } from 'antd'
import data from '@/data'
import { Icons } from '@/components/icons/icon'
import { cn } from '@/lib/utils'

type Props = {
  all?: boolean
  custom?: boolean
  className?: string
  faqData?: { _id: string; question: string; answer: string }[]
}

export const dynamic = 'force-dynamic';

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'SET_ITEMS':
      return action.payload
    default:
      return state
  }
}

const FrequentlyAsked: React.FC<Props> = ({ all = false, className = '', custom = false, faqData }) => {
  const [items, dispatch] = useReducer(reducer, [])
  let renderCount = useRef(0)
  function getRandomFourItems({ array }: { array: CollapseProps['items'] }) {
    if (!array) {
      return
    }
    // Create a copy of the array
    const copyArr = array.slice()
    
    // Shuffle the array
    for (let i = copyArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copyArr[i], copyArr[j]] = [copyArr[j], copyArr[i]]
    }
    // Return the first 4 items
    return copyArr.slice(0, 4)
  }
  
  useEffect(() => {
    if (all) {
      return dispatch({ type: 'SET_ITEMS', payload: data.faqData })
    }
    if (custom) {
      return dispatch({ type: 'SET_ITEMS', payload: convertToCollapseFormat(faqData) })
      
    }
    if (!all || !custom) {
      return dispatch({
        type: 'SET_ITEMS',
        payload: getRandomFourItems({ array: data.faqData }),
      })
    }
  }, [all, custom, faqData]);
  
  // console.log('Redering', renderCount.current += 1)
  function convertToCollapseFormat(
    collapseData?: { _id: string; question: string; answer: string }[],
  ) {
    return (custom && collapseData ? collapseData : data.faqData).map((item: any) => ({
      key: item._id,
      label: item.question,
      children: <p className="children-text">{item.answer}</p>,
    }))
  }
  
  return (
    <Collapse
      className={cn('mt-12 !rounded-none bg-transparent text-black-lighter ' + className)}
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
  );
};

export default FrequentlyAsked
