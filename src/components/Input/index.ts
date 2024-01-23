import type * as React from 'react'
import InternalInput, { InputProps } from './Input'
import TextArea from './Textarea'
import './input.css'

export type { InputProps } from './Input'
export type { TextAreaProps } from './Textarea'

type CompoundedComponent = React.ForwardRefExoticComponent<InputProps> & {
  TextArea: typeof TextArea
}

const Input = InternalInput as CompoundedComponent

Input.TextArea = TextArea
export { Input }
