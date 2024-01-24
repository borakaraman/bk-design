import React, { CSSProperties, ReactNode, useEffect, useRef, useState } from 'react'
import { InputProps } from './Input'
import { Icon } from '../Icon/icon'
import { StyledTextarea, AffixWrapper } from './TextareaStyles'

export interface AutoSizeType {
  minRows?: number
  maxRows?: number
}

export interface TextAreaProps extends InputProps {
  children?: ReactNode
  autoSize?: boolean | AutoSizeType
  styles?: React.CSSProperties
  rows?: number
}

const Textarea = ({
  className,
  children,
  placeholder,
  autoSize,
  styles,
  rows,
  maxLength,
  showCount,
  value,
  defaultValue,
  allowClear,
  onChange,
}: TextAreaProps) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null)
  const [textValue, setTextValue] = useState<string | undefined>(value || defaultValue || '')
  const [mergedStyle, setMergedStyle] = useState<CSSProperties>({
    resize: autoSize ? 'none' : undefined,
    height: autoSize ? '32px' : undefined,
  })

  useEffect(() => {
    if (autoSize instanceof Object) {
      setMergedStyle({
        resize: 'none',
        height: Number(autoSize.minRows) * 22 + 10,
        minHeight: Number(autoSize.minRows) * 22 + 10,
        maxHeight: Number(autoSize.maxRows) * 22 + 10,
      })
    }
  }, [autoSize])

  const handleTextareaHeight = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextValue(e.currentTarget.value)
    if (onChange) {
      onChange(e)
    }

    if (textareaRef.current) {
      if (autoSize) {
        setMergedStyle({ resize: 'none', height: textareaRef.current.scrollHeight })
      }
      if (autoSize instanceof Object) {
        setMergedStyle({
          resize: 'none',
          height: textareaRef.current.scrollHeight,
          minHeight: Number(autoSize.minRows) * 22 + 10,
          maxHeight: Number(autoSize.maxRows) * 22 + 10,
        })
      }
    }
  }

  const classNames = ['bk-textarea', className && className].join(' ')
  return showCount || allowClear ? (
    <AffixWrapper
      className={`bk-textarea-affix-wrapper${showCount ? ' bk-textarea-show-count' : ''}${
        allowClear ? ' bk-textarea-allow-clear' : ''
      }`}
      style={{ ...mergedStyle, ...styles }}
    >
      <StyledTextarea
        className={classNames.trim().replace(/\s+/g, ' ')}
        placeholder={placeholder}
        ref={textareaRef}
        onChange={handleTextareaHeight}
        rows={autoSize === undefined ? rows : undefined}
        maxLength={maxLength}
        value={textValue}
      >
        {children}
      </StyledTextarea>
      {textValue?.length !== 0 && <Icon type='close' style={{ cursor: 'pointer' }} onClick={() => setTextValue('')} />}
      <span className='bk-textarea-suffix'>
        <span className='bk-textarea-data-count'>
          {maxLength ? `${textValue?.length} / ${maxLength}` : textValue?.length}
        </span>
      </span>
    </AffixWrapper>
  ) : (
    <StyledTextarea
      className={classNames.trim().replace(/\s+/g, ' ')}
      placeholder={placeholder}
      ref={textareaRef}
      onChange={handleTextareaHeight}
      style={{ ...mergedStyle, ...styles }}
      rows={autoSize === undefined ? rows : undefined}
      maxLength={maxLength}
      value={textValue}
    >
      {children}
    </StyledTextarea>
  )
}

export default Textarea
