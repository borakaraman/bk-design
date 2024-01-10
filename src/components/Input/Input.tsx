import React, { ReactNode, useState } from 'react'
import { Icon } from '../Icon/icon'

export interface InputProps {
  className?: string
  placeholder?: string
  addonBefore?: ReactNode
  addonAfter?: ReactNode
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
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onPressEnter?: (event: React.KeyboardEvent<HTMLInputElement>, value?: string) => void
}

const InternalInput = (props: InputProps) => {
  const {
    onChange,
    onPressEnter,
    className,
    placeholder,
    addonBefore,
    addonAfter,
    suffix,
    prefix,
    value,
    defaultValue,
    type,
    allowClear,
  } = props
  const [inputValue, setInputValue] = useState<string | undefined>(value || defaultValue || '')
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      // Enter tuşuna basıldığında onPressEnter fonksiyonunu çağır
      if (onPressEnter) {
        onPressEnter(e, e.currentTarget.value)
      }
    }
  }
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value)
    if (onChange) {
      onChange(e)
    }
  }
  const classNames = ['bk-input', className && className].join(' ')
  return (
    <>
      {addonBefore !== undefined || addonAfter !== undefined ? (
        <span className='bk-input-group-wrapper'>
          <span className='bk-input-wrapper bk-input-group'>
            {addonBefore !== undefined && <span className='bk-input-group-addon'>{addonBefore}</span>}
            {suffix !== undefined || prefix !== undefined || allowClear ? (
              <span className='bk-input-affix-wrapper'>
                {prefix !== undefined && <span className='bk-input-suffix'>{prefix}</span>}
                <input
                  placeholder={placeholder}
                  className={classNames}
                  onChange={handleOnChange}
                  onKeyDown={handleKeyDown}
                  value={inputValue}
                  type={type !== undefined ? type : 'text'}
                />
                {allowClear ? (
                  <span className='bk-input-suffix' onClick={() => setInputValue('')}>
                    <Icon type='close' />
                  </span>
                ) : (
                  <>{suffix !== undefined && <span className='bk-input-suffix'>{suffix}</span>}</>
                )}
              </span>
            ) : (
              <input
                placeholder={placeholder}
                className={classNames}
                onChange={handleOnChange}
                onKeyDown={handleKeyDown}
                value={inputValue}
                type={type !== undefined ? type : 'text'}
              />
            )}
            {addonAfter !== undefined && <span className='bk-input-group-addon'>{addonAfter}</span>}
          </span>
        </span>
      ) : (
        <>
          {suffix !== undefined || prefix !== undefined || allowClear ? (
            <span className='bk-input-affix-wrapper'>
              {prefix !== undefined && <span className='bk-input-suffix'>{prefix}</span>}
              <input
                placeholder={placeholder}
                className={classNames}
                onChange={handleOnChange}
                onKeyDown={handleKeyDown}
                value={inputValue}
                type={type !== undefined ? type : 'text'}
              />
              {allowClear ? (
                <span className='bk-input-suffix' onClick={() => setInputValue('')}>
                  <Icon type='close' />
                </span>
              ) : (
                <>{suffix !== undefined && <span className='bk-input-suffix'>{suffix}</span>}</>
              )}
            </span>
          ) : (
            <input
              placeholder={placeholder}
              className={classNames}
              onChange={handleOnChange}
              onKeyDown={handleKeyDown}
              value={inputValue}
              type={type !== undefined ? type : 'text'}
            />
          )}
        </>
      )}
    </>
  )
}

export default InternalInput
