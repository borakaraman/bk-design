import React from 'react'
import { Input } from '../components/Input'
import { Icon } from '../components/Icon/icon'

const { TextArea } = Input

const input = () => {
  return (
    <React.StrictMode>
      <Input
        className='abc'
        placeholder='Basic usage'
        addonBefore='http://'
        addonAfter='http://'
        suffix={<Icon type='close' />}
        prefix={<Icon type='close' />}
        onChange={(e) => console.log('onChange', e)}
        onPressEnter={(e, a) => console.log('onPressEnter', e, a)}
      />
      <TextArea autoSize={true} />
    </React.StrictMode>
  )
}

export default input
