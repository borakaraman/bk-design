import React, { ReactNode } from 'react'
import RowContext from './RowContext'

// type LiteralUnion<T extends string> = T | (string & object)

type ColSpanType = number | string

type FlexType = number | string

interface ColSize {
  flex?: FlexType
  span?: ColSpanType
  order?: ColSpanType
  offset?: ColSpanType
  push?: ColSpanType
  pull?: ColSpanType
  [key: string]: ColSpanType | undefined
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

  const generateClassNames = (size: ColSize, suffix: string) => {
    let classes = ''
    for (const key in size) {
      if (Object.prototype.hasOwnProperty.call(size, key) && key !== 'span' && key in size && size[key] !== undefined) {
        classes += `bk-col-${suffix}-${key}-${size[key]} `
      } else {
        classes += `bk-col-${suffix}-${size[key]} `
      }
    }
    return classes
  }

  // Kullanım:
  const xsClasses = typeof xs === 'object' ? generateClassNames(xs, 'xs') : xs !== undefined ? `bk-col-xs-${xs} ` : ''
  const smClasses = typeof sm === 'object' ? generateClassNames(sm, 'sm') : sm !== undefined ? `bk-col-sm-${sm} ` : ''
  const mdClasses = typeof md === 'object' ? generateClassNames(md, 'md') : md !== undefined ? `bk-col-md-${md} ` : ''
  const lgClasses = typeof lg === 'object' ? generateClassNames(lg, 'lg') : lg !== undefined ? `bk-col-lg-${lg} ` : ''
  const xlClasses = typeof xl === 'object' ? generateClassNames(xl, 'xl') : xl !== undefined ? `bk-col-xl-${xl} ` : ''
  const xxlClasses =
    typeof xxl === 'object' ? generateClassNames(xxl, 'xxl') : xxl !== undefined ? `bk-col-xxl-${xxl} ` : ''

  const classNames = [
    'bk-col',
    className && className,
    xsClasses,
    smClasses,
    mdClasses,
    lgClasses,
    xlClasses,
    xxlClasses,
    span && `bk-col-${span}`,
    offset && `bk-col-offset-${offset}`,
    push && `bk-col-push-${push}`,
    pull && `bk-col-pull-${pull}`,
    order && `bk-col-order-${order}`,
    prefixCls && `justify-${prefixCls}`,
  ].join(' ')

  const mergedStyle: React.CSSProperties = {}

  if (gutter && gutter[0] > 0) {
    const horizontalGutter = gutter[0] / 2
    mergedStyle.paddingLeft = horizontalGutter
    mergedStyle.paddingRight = horizontalGutter
  }

  if (Number(order) > 0) {
    mergedStyle.order = order
  }

  if (flex) {
    mergedStyle.flex = parseFlex(flex)

    if (wrap === false && !mergedStyle.minWidth) {
      mergedStyle.minWidth = 0
    }
  }
  return (
    <div className={classNames.trim().replace(/\s+/g, ' ')} style={{ ...mergedStyle, ...style }}>
      {children}
    </div>
  )
}

export { Col }
