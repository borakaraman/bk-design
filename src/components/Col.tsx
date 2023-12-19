import React, { ReactNode } from 'react'
import RowContext from './RowContext'

type LiteralUnion<T extends string> = T | (string & object)

type ColSpanType = number | string

type FlexType = number | LiteralUnion<'none' | 'auto'>

interface ColSize {
  flex?: FlexType
  span?: ColSpanType
  order?: ColSpanType
  offset?: ColSpanType
  push?: ColSpanType
  pull?: ColSpanType
}

interface ColProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactNode
  style?: React.CSSProperties
  className?: string
  flex?: FlexType
  span?: ColSpanType
  order?: ColSpanType
  offset?: ColSpanType
  push?: ColSpanType
  pull?: ColSpanType
  xs?: ColSpanType | ColSize
  sm?: ColSpanType | ColSize
  md?: ColSpanType | ColSize
  lg?: ColSpanType | ColSize
  xl?: ColSpanType | ColSize
  xxl?: ColSpanType | ColSize
  prefixCls?: string
}

function parseFlex(flex: FlexType): string {
  if (typeof flex === 'number') {
    return `${flex} ${flex} auto`
  }

  if (/^\d+(\.\d+)?(px|em|rem|%)$/.test(flex)) {
    return `0 0 ${flex}`
  }

  return flex
}

const Col = ({
  className,
  children,
  style,
  flex,
  span,
  order,
  offset,
  push,
  pull,
  xs,
  sm,
  md,
  lg,
  xl,
  xxl,
  prefixCls,
}: ColProps) => {
  const { gutter, wrap } = React.useContext(RowContext)
  console.log('gutter', gutter && gutter[0])

  const mergedStyle: React.CSSProperties = {}

  if (gutter && gutter[0] > 0) {
    const horizontalGutter = gutter[0] / 2
    mergedStyle.paddingLeft = horizontalGutter
    mergedStyle.paddingRight = horizontalGutter
  }

  if (flex) {
    mergedStyle.flex = parseFlex(flex)

    // Hack for Firefox to avoid size issue
    // https://github.com/ant-design/ant-design/pull/20023#issuecomment-564389553
    if (wrap === false && !mergedStyle.minWidth) {
      mergedStyle.minWidth = 0
    }
  }
  return (
    <div className={className} style={{ ...mergedStyle, ...style }}>
      {children}
    </div>
  )
}

export { Col }
