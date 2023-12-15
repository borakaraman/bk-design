import React, { ReactNode } from 'react'

const RowAligns = ['top', 'middle', 'bottom', 'stretch'] as const
const RowJustify = ['start', 'end', 'center', 'space-around', 'space-between', 'space-evenly'] as const

type Responsive = 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs'
type ResponsiveLike<T> = {
  [key in Responsive]?: T
}
export type Gutter = number | undefined | Partial<Record<Responsive, number>>

type ResponsiveAligns = ResponsiveLike<(typeof RowAligns)[number]>
type ResponsiveJustify = ResponsiveLike<(typeof RowJustify)[number]>

type Props = {
  children?: ReactNode
  style?: React.CSSProperties
  className?: string
  gutter?: Gutter | [Gutter, Gutter]
  align?: (typeof RowAligns)[number] | ResponsiveAligns
  justify?: (typeof RowJustify)[number] | ResponsiveJustify
  prefixCls?: string
  wrap?: boolean
}

const Row = ({ children, style, className, gutter, align, justify, prefixCls, wrap }: Props) => {
  const classNames = [
    'bk-row',
    className && className,
    gutter && `gutter-${gutter}`,
    align && `align-${align}`,
    justify && `justify-${justify}`,
    prefixCls && `justify-${prefixCls}`,
    wrap && `justify-${wrap}`,
  ].join(' ')
  return (
    <div className={classNames} style={style}>
      {children}
    </div>
  )
}

export default Row
