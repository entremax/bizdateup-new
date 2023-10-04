import React from 'react';
import type {CollapseProps} from 'antd';
import {Collapse} from 'antd';
import data from '@/data'

const FrequentlyAsked: React.FC = () => {
  function getRandomFourItems({array}: { array: CollapseProps['items'] }) {
    if (!array) {
      return
    }
    // Create a copy of the array
    const copyArr = array.slice();
    
    // Shuffle the array
    for (let i = copyArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copyArr[i], copyArr[j]] = [copyArr[j], copyArr[i]];
    }
    
    // Return the first 4 items
    return copyArr.slice(0, 4);
  }
  
  return (
    <Collapse
      className={"text-black-lighter !rounded-none shadow-lg mt-12"}
      expandIconPosition={"end"}
      items={getRandomFourItems({array: data.faqData})}
      bordered={false}
      defaultActiveKey={['1']}
      size={"large"}
      style={{
        color: "#000",
      }}
    />)
};

export default FrequentlyAsked;
