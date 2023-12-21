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

  let sizes: string = ''

  if (typeof xs === 'number') {
    sizes += `bk-col-xs-${xs} `
  }
  if (typeof sm === 'number') {
    sizes += `bk-col-sm-${sm} `
  }
  if (typeof md === 'number') {
    sizes += `bk-col-md-${md} `
  }
  if (typeof lg === 'number') {
    sizes += `bk-col-lg-${lg} `
  }
  if (typeof xl === 'number') {
    sizes += `bk-col-xl-${xl} `
  }
  if (typeof xxl === 'number') {
    sizes += `bk-col-xxl-${xxl} `
  }
  if (typeof xs === 'object') {
    if ('span' in xs) {
      sizes += `bk-col-xs-${xs.span} `
    }
    if ('order' in xs) {
      sizes += `bk-col-xs-order-${xs.order} `
    }
    if ('flex' in xs) {
      sizes += `bk-col-xs-flex-${xs.flex} `
    }
    if ('offset' in xs) {
      sizes += `bk-col-xs-offset-${xs.offset} `
    }
    if ('push' in xs) {
      sizes += `bk-col-xs-push-${xs.push} `
    }
    if ('pull' in xs) {
      sizes += `bk-col-xs-pull-${xs.pull} `
    }
  }

  if (typeof sm === 'object') {
    if ('span' in sm) {
      sizes += `bk-col-sm-${sm.span} `
    }
    if ('order' in sm) {
      sizes += `bk-col-sm-order-${sm.order} `
    }
    if ('flex' in sm) {
      sizes += `bk-col-sm-flex-${sm.flex} `
    }
    if ('offset' in sm) {
      sizes += `bk-col-sm-offset-${sm.offset} `
    }
    if ('push' in sm) {
      sizes += `bk-col-sm-push-${sm.push} `
    }
    if ('pull' in sm) {
      sizes += `bk-col-sm-pull-${sm.pull} `
    }
  }

  if (typeof md === 'object') {
    if ('span' in md) {
      sizes += `bk-col-md-${md.span} `
    }
    if ('order' in md) {
      sizes += `bk-col-md-order-${md.order} `
    }
    if ('flex' in md) {
      sizes += `bk-col-md-flex-${md.flex} `
    }
    if ('offset' in md) {
      sizes += `bk-col-md-offset-${md.offset} `
    }
    if ('push' in md) {
      sizes += `bk-col-md-push-${md.push} `
    }
    if ('pull' in md) {
      sizes += `bk-col-md-pull-${md.pull} `
    }
  }

  if (typeof lg === 'object') {
    if ('span' in lg) {
      sizes += `bk-col-lg-${lg.span} `
    }
    if ('order' in lg) {
      sizes += `bk-col-lg-order-${lg.order} `
    }
    if ('flex' in lg) {
      sizes += `bk-col-lg-flex-${lg.flex} `
    }
    if ('offset' in lg) {
      sizes += `bk-col-lg-offset-${lg.offset} `
    }
    if ('push' in lg) {
      sizes += `bk-col-lg-push-${lg.push} `
    }
    if ('pull' in lg) {
      sizes += `bk-col-lg-pull-${lg.pull} `
    }
  }

  if (typeof xl === 'object') {
    if ('span' in xl) {
      sizes += `bk-col-xl-${xl.span} `
    }
    if ('order' in xl) {
      sizes += `bk-col-xl-order-${xl.order} `
    }
    if ('flex' in xl) {
      sizes += `bk-col-xl-flex-${xl.flex} `
    }
    if ('offset' in xl) {
      sizes += `bk-col-xl-offset-${xl.offset} `
    }
    if ('push' in xl) {
      sizes += `bk-col-xl-push-${xl.push} `
    }
    if ('pull' in xl) {
      sizes += `bk-col-xl-pull-${xl.pull} `
    }
  }

  if (typeof xxl === 'object') {
    if ('span' in xxl) {
      sizes += `bk-col-xxl-${xxl.span} `
    }
    if ('order' in xxl) {
      sizes += `bk-col-xxl-order-${xxl.order} `
    }
    if ('flex' in xxl) {
      sizes += `bk-col-xxl-flex-${xxl.flex} `
    }
    if ('offset' in xxl) {
      sizes += `bk-col-xxl-offset-${xxl.offset} `
    }
    if ('push' in xxl) {
      sizes += `bk-col-xxl-push-${xxl.push} `
    }
    if ('pull' in xxl) {
      sizes += `bk-col-xxl-pull-${xxl.pull} `
    }
  }

  console.log('sizes', sizes)

  const classNames = [
    'bk-col',
    className && className,
    sizes && sizes,
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

    // Hack for Firefox to avoid size issue
    // https://github.com/ant-design/ant-design/pull/20023#issuecomment-564389553
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
