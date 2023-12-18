import React, { CSSProperties, ReactNode } from 'react'

const RowAligns = ['top', 'middle', 'bottom', 'stretch'] as const
const RowJustify = ['start', 'end', 'center', 'space-around', 'space-between', 'space-evenly'] as const

type Responsive = 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs'
type ResponsiveLike<T> = {
  [key in Responsive]?: T
}
export type Gutter = number | Partial<Record<Responsive, number>>

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

const Row = ({ children, style, className, gutter, align, justify, prefixCls, wrap = true }: Props) => {
  console.log(wrap)
  let gutters: CSSProperties | undefined
  if (typeof gutter === 'number') {
    gutters = { marginLeft: -gutter / 2, marginRight: -gutter / 2 }
  }
  if (Array.isArray(gutter)) {
    gutters = { marginLeft: -gutter[0] / 2, marginRight: -gutter[0] / 2, rowGap: Number(gutter[1]) }
  }
  if (typeof gutter === 'object' && !Array.isArray(gutter)) {
    console.log('object')
  }

  const styles = {
    ...style,
    ...gutters,
  }
  const classNames = [
    'bk-row',
    className && className,
    gutter && `gutter`,
    align && `align-${align}`,
    justify && `justify-${justify}`,
    prefixCls && `justify-${prefixCls}`,
    wrap !== undefined && wrap !== true ? `justify-false` : undefined,
  ].join(' ')
  return (
    <div className={classNames.trim().replace(/\s+/g, ' ')} style={styles}>
      {children}
    </div>
  )
}

export { Row }
