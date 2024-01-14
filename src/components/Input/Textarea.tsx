import React, { ReactNode } from 'react'
import { InputProps } from './Input'

export interface TextAreaProps extends InputProps {
  children?: ReactNode
  autoSize?: boolean | object
  styles?: React.CSSProperties
}

const Textarea = ({ className, children, placeholder }: TextAreaProps) => {
  console.log('Textarea', className)
  return <textarea className='bk-input' placeholder={placeholder}>{children}</textarea>
}

export default Textarea
