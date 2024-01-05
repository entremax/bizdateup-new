'use client'
import React, { createRef, useRef, useState } from 'react'
import { Input, InputRef } from 'antd'
import { FieldNames } from '@/types/profile'

interface RefObject {
  [key: number]: React.MutableRefObject<InputRef | null>
}

function initializeRefs(count: number): RefObject[] {
  return Array.from({ length: count }, (_, index) => ({
    [index]: useRef<InputRef | null>(null),
  }))
}

function App() {
  const inputCount = useRef(1)
  const [refs, setRefs] = useState<RefObject[]>(initializeRefs(1))

  const handleAddInput = () => {
    setRefs((prevRefs) => [
      ...prevRefs,
      { [inputCount.current]: createRef<InputRef | null>() },
    ])
    inputCount.current += 1
  }
  const getValues = () => {
    let values: { [key: number]: unknown | null } = {} as {
      [key in FieldNames]: unknown | null
    }
    for (let key in refs) {
      //@ts-ignore
      values[key] = refs[key][key]?.current?.input.value ?? ''
    }
    console.log(values, refs)
  }
  return (
    <div className={'pt-28'}>
      <button onClick={handleAddInput}>Add Input</button>
      <button onClick={getValues}>Add Input</button>
      <br />
      {refs.map((refObject, index) => (
        <Input key={index} ref={refObject[index]} />
      ))}
    </div>
  )
}

export default App
