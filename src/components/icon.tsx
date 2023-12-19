import React from 'react'

type Props = {
  className?: string
  style?: React.CSSProperties
  type?: string
}

// <span className='bk-icon bk-loading-icon'>
// <span role='img' aria-label='loading' className='bkicon bkicon-loading bkicon-spin'>
//   <svg
//     viewBox='0 0 1024 1024'
//     focusable='false'
//     data-icon='loading'
//     width='1em'
//     height='1em'
//     fill='currentColor'
//     aria-hidden='true'
//   >
//     <path d='M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z'></path>
//   </svg>
// </span>
// </span>

const Icon = ({ className, style, type }: Props) => {
  const classNames = ['bk-icon', className && className].join(' ')
  const createIcon = (type: string | undefined) => {
    if (type === 'download') {
      return (
        <span className='bkicon download'>
          <svg
            viewBox='64 64 896 896'
            focusable='false'
            data-icon='download'
            width='1em'
            height='1em'
            fill='currentColor'
            aria-hidden='true'
          >
            <path d='M505.7 661a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z'></path>
          </svg>
        </span>
      )
    }
    if (type === 'close') {
      return (
        <span className='bkicon anticon-close'>
          <svg
            fillRule='evenodd'
            viewBox='64 64 896 896'
            focusable='false'
            data-icon='close'
            width='1em'
            height='1em'
            fill='currentColor'
            aria-hidden='true'
          >
            <path d='M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z'></path>
          </svg>
        </span>
      )
    }
  }

  return (
    <span className={classNames.trim().replace(/\s+/g, ' ')} style={style}>
      {createIcon(type)}
    </span>
  )
}

export { Icon }
