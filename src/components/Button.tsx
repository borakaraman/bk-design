import React, { ReactNode } from 'react'
import './style.css'

type ButtonType = 'primary' | 'default' | 'dashed'
type ButtonShape = 'circle' | 'round'
type ButtonSize = 'small' | 'large'

interface Props {
  children?: ReactNode
  style?: object
  type?: ButtonType
  shape?: ButtonShape
  size?: ButtonSize
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Button = (_attr: Props) => {
  console.log(_attr)
  return (
    <button
      className={'bk-btn ' + _attr.type + ' ' + _attr.shape + ' ' + _attr.size}
      style={_attr.style}
      onClick={_attr.onClick}
    >
      <span>{_attr.children}</span>
    </button>
  )
}

export { Button }