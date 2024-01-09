import React, { ReactNode } from 'react'

export interface InputProps {
  className?: string
  addonAfter?: ReactNode
  addonBefore?: ReactNode
  allowClear?: boolean | { clearIcon?: ReactNode }
  bordered?: boolean
  defaultValue?: string
  disabled?: boolean
  id?: string
  maxLength?: number
  prefix?: ReactNode
  showCount?: boolean | { formatter?: (info?: { value?: string; count?: number; maxLength?: number }) => ReactNode }
  status?: 'error' | 'warning'
  style?: React.CSSProperties
  size?: 'large' | 'middle' | 'small'
  suffix?: ReactNode
  type?: string
  value?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  onPressEnter?: (event: React.KeyboardEvent<HTMLInputElement>, value?: string) => void
}

const InternalInput = (props: InputProps) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      // Enter tuşuna basıldığında onPressEnter fonksiyonunu çağır
      if (props.onPressEnter) {
        props.onPressEnter(e, e.currentTarget.value)
      }
    }
  }
  return <input className={props.className} onChange={props.onChange} onKeyDown={handleKeyDown} />
}

export default InternalInput
