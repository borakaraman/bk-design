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
  showCount?: boolean
  status?: 'error' | 'warning'
  style?: React.CSSProperties
  size?: 'large' | 'middle' | 'small'
  suffix?: ReactNode
  type?: string
  value?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void
  onPressEnter?: (event: React.KeyboardEvent<HTMLInputElement>, value?: string) => void
}

const InternalInput = (props: InputProps) => {
  const {
    onChange,
    onPressEnter,
    className,
    style,
    placeholder,
    addonBefore,
    addonAfter,
    suffix,
    prefix,
    value,
    defaultValue,
    type,
    allowClear,
    bordered = true,
    disabled,
    id,
    maxLength,
    showCount,
    status,
    size,
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
  const classNames = [
    'bk-input',
    className && className,
    disabled && 'bk-input-disabled',
    status && `bk-input-status-${status}`,
    size === 'small' ? `ant-input-sm` : size === 'large' ? `ant-input-lg` : '',
  ].join(' ')
  const affixWrapper = [!bordered ? ' bk-input-borderless' : null].join(' ')
  return (
    <>
      {addonBefore !== undefined || addonAfter !== undefined ? (
        <span
          className={`bk-input-group-wrapper${disabled ? ' bk-input-group-wrapper-disabled' : ''}${
            status ? ` bk-input-group-wrapper-status-${status}` : ''
          }${size === 'small' ? ` bk-input-group-wrapper-sm` : size === 'large' ? ` bk-input-group-wrapper-lg` : ''}`}
          style={style}
        >
          <span className='bk-input-wrapper bk-input-group'>
            {addonBefore !== undefined && <span className='bk-input-group-addon'>{addonBefore}</span>}
            {suffix !== undefined || prefix !== undefined || allowClear ? (
              <span
                className={`bk-input-affix-wrapper${affixWrapper}${disabled ? ' bk-input-affix-wrapper-disabled' : ''}${
                  status ? ` bk-input-affix-wrapper-status-${status}` : ''
                }${
                  size === 'small' ? ` bk-input-affix-wrapper-sm` : size === 'large' ? ` bk-input-affix-wrapper-lg` : ''
                }`}
              >
                {prefix !== undefined && <span className='bk-input-prefix'>{prefix}</span>}
                <input
                  id={id}
                  placeholder={placeholder}
                  className={classNames.trim().replace(/\s+/g, ' ')}
                  onChange={handleOnChange}
                  onKeyDown={handleKeyDown}
                  value={inputValue}
                  type={type !== undefined ? type : 'text'}
                  disabled={disabled ? true : false}
                  maxLength={maxLength}
                />
                {allowClear && inputValue !== '' ? (
                  <span className='bk-input-suffix'>
                    {showCount && (
                      <span className='bk-input-show-count-suffix bk-input-show-count-has-suffix'>
                        {inputValue?.length} / {maxLength}
                      </span>
                    )}
                    <Icon type='close' style={{ cursor: 'pointer' }} onClick={() => setInputValue('')} />
                    {suffix !== undefined && suffix}
                  </span>
                ) : (
                  <>
                    {suffix !== undefined || maxLength ? (
                      <span className='bk-input-suffix'>
                        {showCount && (
                          <span className='bk-input-show-count-suffix bk-input-show-count-has-suffix'>
                            {inputValue?.length} / {maxLength}
                          </span>
                        )}
                        {suffix}
                      </span>
                    ) : null}
                  </>
                )}
              </span>
            ) : (
              <input
                id={id}
                placeholder={placeholder}
                className={classNames.trim().replace(/\s+/g, ' ')}
                onChange={handleOnChange}
                onKeyDown={handleKeyDown}
                value={inputValue}
                type={type !== undefined ? type : 'text'}
                disabled={disabled ? true : false}
                maxLength={maxLength}
              />
            )}
            {addonAfter !== undefined && <span className='bk-input-group-addon'>{addonAfter}</span>}
          </span>
        </span>
      ) : (
        <>
          {suffix !== undefined || prefix !== undefined || allowClear ? (
            <span
              className={`bk-input-affix-wrapper inline${affixWrapper}${
                disabled ? ' bk-input-affix-wrapper-disabled' : ''
              }${status ? ` bk-input-affix-wrapper-status-${status}` : ''}${
                size === 'small' ? ` bk-input-affix-wrapper-sm` : size === 'large' ? ` bk-input-affix-wrapper-lg` : ''
              }`}
              style={style}
            >
              {prefix !== undefined && <span className='bk-input-prefix'>{prefix}</span>}
              <input
                id={id}
                placeholder={placeholder}
                className={classNames.trim().replace(/\s+/g, ' ')}
                onChange={handleOnChange}
                onKeyDown={handleKeyDown}
                value={inputValue}
                type={type !== undefined ? type : 'text'}
                disabled={disabled ? true : false}
                maxLength={maxLength}
              />
              {allowClear && inputValue !== '' ? (
                <span className='bk-input-suffix'>
                  {showCount && (
                    <span className='bk-input-show-count-suffix bk-input-show-count-has-suffix'>
                      {inputValue?.length} / {maxLength}
                    </span>
                  )}
                  <Icon type='close' style={{ cursor: 'pointer' }} onClick={() => setInputValue('')} />
                  {suffix !== undefined && suffix}
                </span>
              ) : (
                <>
                  {suffix !== undefined || maxLength ? (
                    <span className='bk-input-suffix'>
                      {showCount && (
                        <span className='bk-input-show-count-suffix bk-input-show-count-has-suffix'>
                          {inputValue?.length} / {maxLength}
                        </span>
                      )}
                      {suffix !== undefined && suffix}
                    </span>
                  ) : null}
                </>
              )}
            </span>
          ) : (
            <input
              id={id}
              placeholder={placeholder}
              className={classNames.trim().replace(/\s+/g, ' ')}
              onChange={handleOnChange}
              onKeyDown={handleKeyDown}
              value={inputValue}
              type={type !== undefined ? type : 'text'}
              disabled={disabled ? true : false}
              maxLength={maxLength}
              style={style}
            />
          )}
        </>
      )}
    </>
  )
}

export default InternalInput
