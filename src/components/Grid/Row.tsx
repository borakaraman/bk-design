import React, { CSSProperties, ReactNode, useEffect, useState } from 'react'
import RowContext from './RowContext'
import type { RowContextState } from './RowContext'
import './row.css'

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
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth)
  useEffect(() => {
    const handleWindowResize = () => {
      setScreenWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleWindowResize)
    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  let gutters: CSSProperties | undefined
  if (typeof gutter === 'number') {
    gutters = { marginLeft: -gutter / 2, marginRight: -gutter / 2 }
  }
  if (Array.isArray(gutter)) {
    gutters = { marginLeft: -gutter[0] / 2, marginRight: -gutter[0] / 2, rowGap: Number(gutter[1]) }
  }
  if (typeof gutter === 'object' && !Array.isArray(gutter)) {
    const myArray = Object.entries(gutter)
    myArray.map(([key, value]) => {
      if (screenWidth >= 1600 && key === 'xxl') {
        gutters = { marginLeft: -value / 2, marginRight: -value / 2 }
      }
      if (screenWidth >= 1200 && key === 'xl') {
        gutters = { marginLeft: -value / 2, marginRight: -value / 2 }
      }
      if (screenWidth >= 992 && key === 'lg') {
        gutters = { marginLeft: -value / 2, marginRight: -value / 2 }
      }
      if (screenWidth >= 768 && key === 'md') {
        gutters = { marginLeft: -value / 2, marginRight: -value / 2 }
      }
      if (screenWidth >= 576 && key === 'sm') {
        gutters = { marginLeft: -value / 2, marginRight: -value / 2 }
      }
      if (screenWidth < 576 && key === 'xs') {
        gutters = { marginLeft: -value / 2, marginRight: -value / 2 }
      }
    })
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
    wrap !== undefined && wrap !== true ? `wrap-false` : undefined,
  ].join(' ')

  const rowContext = React.useMemo<RowContextState>(() => {
    let gutterValue0: number | undefined
    let gutterValue1: number | undefined

    if (typeof gutter === 'number') {
      gutterValue0 = gutter
    }
    if (Array.isArray(gutter)) {
      if (typeof gutter[0] === 'number') {
        gutterValue0 = gutter[0]
      }
      if (typeof gutter[1] === 'number') {
        gutterValue1 = gutter[1]
      }
    }

    if (typeof gutter === 'object' && !Array.isArray(gutter)) {
      const myArray = Object.entries(gutter)
      myArray.map(([key, value]) => {
        if (screenWidth >= 1600 && key === 'xxl') {
          gutterValue0 = value
        }
        if (screenWidth >= 1200 && key === 'xl') {
          gutterValue0 = value
        }
        if (screenWidth >= 992 && key === 'lg') {
          gutterValue0 = value
        }
        if (screenWidth >= 768 && key === 'md') {
          gutterValue0 = value
        }
        if (screenWidth >= 576 && key === 'sm') {
          gutterValue0 = value
        }
        if (screenWidth < 576 && key === 'xs') {
          gutterValue0 = value
        }
      })
    }

    return { gutter: [Number(gutterValue0), Number(gutterValue1)], wrap }
  }, [gutter, screenWidth, wrap])

  return (
    <RowContext.Provider value={rowContext}>
      <div className={classNames.trim().replace(/\s+/g, ' ')} style={styles}>
        {children}
      </div>
    </RowContext.Provider>
  )
}

export { Row }
