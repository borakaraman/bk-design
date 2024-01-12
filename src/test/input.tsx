import React from 'react'
import { Input } from '../components/Input'
import { Icon } from '../components/Icon/icon'

const { TextArea } = Input

const input = () => {
  return (
    <React.StrictMode>
      <Input
        className='abc'
        id='dasdas'
        placeholder='Basic usage'
        addonBefore='http://'
        addonAfter='http://'
        suffix={<Icon type='close' />}
        prefix={<Icon type='close' />}
        allowClear
        // bordered={false}
        onChange={(e) => console.log('onChange', e)}
        onPressEnter={(e, a) => console.log('onPressEnter', e, a)}
        // disabled
        maxLength={20}
      />
      <Input
        className='abc'
        id='dasdas'
        placeholder='Basic usage'
        allowClear
        // bordered={false}
        onChange={(e) => console.log('onChange', e)}
        onPressEnter={(e, a) => console.log('onPressEnter', e, a)}
        // disabled
        maxLength={10}
      />
      <TextArea autoSize={true} />
    </React.StrictMode>
  )
}

export default input
