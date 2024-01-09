import React from 'react'

export interface InputProps {
  className?: string
  bordered?: boolean
}

const InternalInput = (props: InputProps) => {
  console.log('InternalInput', props)
  return <div>input1</div>
}

export default InternalInput
