import React from 'react'

export interface TextAreaProps {
  autoSize?: boolean | object
  styles?: React.CSSProperties
}

const Textarea = (props: TextAreaProps) => {
  console.log('Textarea', props)
  return <div>Textarea</div>
}

export default Textarea
