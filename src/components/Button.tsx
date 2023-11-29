import React, { ReactNode } from 'react'
import './style.css'

type ButtonType = 'primary' | 'default' | 'dashed'
type ButtonShape = 'circle' | 'round' | 'default'
type ButtonSize = 'small' | 'middle' | 'large'

interface Props {
  children?: ReactNode
  style?: React.CSSProperties
  type?: ButtonType
  shape?: ButtonShape
  size?: ButtonSize
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Button = ({ children = '', style, type = 'default', shape = 'default', size = 'middle', onClick }: Props) => {
  const classNames = [
    'bk-btn',
    type ? `${type}-type` : 'default-type',
    shape ? `${shape}-shape` : 'default-shape',
    size ? `${size}-size` : 'default-size',
  ].join(' ')
  return (
    <button className={classNames} style={style} onClick={onClick}>
      <span>{children}</span>
    </button>
  )
}

export { Button }
