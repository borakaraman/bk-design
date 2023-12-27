import React, { ReactNode } from 'react'
import '../style.css'

type ButtonType = 'primary' | 'default' | 'dashed'
type ButtonShape = 'circle' | 'round' | 'default'
type ButtonSize = 'small' | 'middle' | 'large'

interface Props {
  children?: ReactNode
  icon?: ReactNode
  className?: string
  loading?: boolean
  style?: React.CSSProperties
  type?: ButtonType
  shape?: ButtonShape
  size?: ButtonSize
  block?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Button = ({
  children,
  icon,
  className,
  style,
  type = 'default',
  shape = 'default',
  size = 'middle',
  loading,
  block,
  onClick,
}: Props) => {
  const classNames = [
    'bk-btn',
    className && className,
    type ? `${type}-type` : 'default-type',
    shape ? `${shape}-shape` : 'default-shape',
    size ? `${size}-size` : 'default-size',
    children && 'bkicon-icon-only',
    loading && 'bk-btn-loading',
    block && 'bk-btn-block',
  ].join(' ')
  const loadingButton = () => (
    <span className='bk-icon bk-loading-icon'>
      <span role='img' aria-label='loading' className='bkicon bkicon-loading bkicon-spin'>
        <svg
          viewBox='0 0 1024 1024'
          focusable='false'
          data-icon='loading'
          width='1em'
          height='1em'
          fill='currentColor'
          aria-hidden='true'
        >
          <path d='M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z'></path>
        </svg>
      </span>
    </span>
  )

  return (
    <button className={classNames.trim().replace(/\s+/g, ' ')} style={style} onClick={onClick}>
      {loading ? loadingButton() : icon}
      <span>{children}</span>
    </button>
  )
}

export { Button }
