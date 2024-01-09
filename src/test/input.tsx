import React from 'react'
import { Input } from '../components/Input'

const { TextArea } = Input

const input = () => {
  return (
    <React.StrictMode>
      <Input
        className='abc'
        onChange={(e) => console.log('onChange', e)}
        onPressEnter={(e, a) => console.log('onPressEnter', e, a)}
      />
      <TextArea autoSize={true} />
    </React.StrictMode>
  )
}

export default input
