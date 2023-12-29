import React from 'react'
import { CompoundedComponent } from 'antd/es/float-button/interface'
import { Button as Btn } from 'antd'

interface ButtonProps extends CompoundedComponent {
  className?: string
  children?: React.ReactNode // Add this line to define the children prop
}

const Button: React.FC<ButtonProps> = ({ className, ...props }) => {
  return (
    <Btn {...props} className={className}>
      {props.children}
    </Btn>
  )
}

export default Button
