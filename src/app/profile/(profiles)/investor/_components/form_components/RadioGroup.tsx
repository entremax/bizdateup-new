import { cn } from '@/lib/utils';
import { Radio } from 'antd';
import React, { ForwardRefRenderFunction } from 'react';
import { ForwardRefProps } from '@/types/profile';
import type { RadioChangeEvent  , RadioGroupOptionType } from 'antd';

interface RadioInputProps extends ForwardRefProps {
  options: Array<{ label: string; value: string | number }>;
  defaultValue?: string | number | any;
  onChange?: (e: RadioChangeEvent) => void; 
}

const RadioInput: ForwardRefRenderFunction<any, RadioInputProps> = (
  {
    wrapperClassName,
    label,
    name,
    className,
    labelClassName,
    options,
    defaultValue,
    onChange,
    ...props
  },
  ref,
) => {
  // console.log("🚀 ~ file: RadioGroup.tsx:23 ~ props:", props);
  return (
    <div
      className={cn(
        'relative w-full ' +
          wrapperClassName,
      )}
    >
      <Radio.Group
        id={name}
        name={name}
        ref={ref}
        options={options}
        defaultValue={defaultValue}
        onChange={onChange} // Add the onChange prop
        className={cn(
          'peer block w-full rounded-sm !bg-transparent px-3 py-[0.28rem] font-medium leading-[1.6] text-[#000] outline-none  transition-all duration-200 ease-linear focus:outline-none peer-focus:text-black-lighter motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary ' +
            className,
        )}
        {...props}
      />

      <label
        htmlFor={name}
        className={cn(
          'pointer-events-none absolute left-3 top-[0.5rem] mb-0 max-w-[90%] origin-[0_0] -translate-y-[1.1rem] scale-[0.8] truncate bg-white p-0 px-[0.022rem] font-medium !text-gray-900 text-black transition-all duration-200 ease-out' +
            (labelClassName && labelClassName),
        )}
      >
        {label}
      </label>
    </div>
  );
};

export default React.forwardRef(RadioInput);
