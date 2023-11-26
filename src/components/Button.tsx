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

const Button = ({ children = "", style, type = "default", shape = "default", size = "middle", onClick }: Props) => {
  console.log(children)
  console.log(style)
  console.log(shape)
  console.log(size)
  console.log(onClick)
  return (
    <button
      className={'bk-btn ' + type + ' ' + shape + ' ' + size}
      style={style}
      onClick={onClick}
    >
      <span>{children}</span>
    </button>
  )
}

export { Button }
