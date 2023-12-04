import React from 'react'
import { Select as AntDSelect } from 'antd'
import { CustomSelectProps } from '@/types/profile'
import { BaseSelectRef } from 'rc-select'

const Select: React.ForwardRefRenderFunction<
  BaseSelectRef,
  CustomSelectProps
> = ({ name, ...props }, ref) => {
  // Any props with "ref" on them should be forwarded to the component that should
  // ultimately have the ref attached. In this case, it's `AntDSelect`.

  return (
    <div className={' relative w-full '}>
      <AntDSelect
        showSearch
        size={'large'}
        placeholder={'Select options'}
        optionFilterProp="children"
        filterOption={(input, option) =>
          //@ts-ignore
          (option?.label ?? '').toLowerCase().includes(input)
        }
        filterSort={(optionA, optionB) =>
          (optionA?.label ?? '')
            //@ts-ignore
            .toLowerCase()
            //@ts-ignore
            .localeCompare((optionB?.label ?? '').toLowerCase())
        }
        ref={ref}
        {...props}
      />

      <label
        htmlFor={name}
        className="pointer-events-none absolute left-3 top-[0.2rem] mb-0 max-w-[90%] origin-[0_0] -translate-y-[1.1rem] scale-[0.8] truncate bg-white pt-[0.37rem] font-medium leading-[1.6] !text-gray-900 text-black transition-all duration-200 ease-out">
        {props.label}
      </label>
    </div>
  )
}

// Now the Select component will be able to forward its ref prop to the `AntDSelect` component.
// This makes the ref available for parent components that might want to manipulate the `AntDSelect` DOM node.
export default React.forwardRef(Select)
