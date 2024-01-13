import React from 'react'
import { Input } from '../components/Input'
import { Icon } from '../components/Icon/icon'

const { TextArea } = Input

const input = () => {
  return (
    <React.StrictMode>
      <Input size='large' />
      <Input size='small' />
      <Input size='large' suffix="dasd" />
      <Input size='small' suffix="dasd" />
      <Input size='large' addonAfter="dasd" addonBefore="dasd" />
      <Input size='small' addonAfter="dasd" addonBefore="dasd" />
      <Input size='small' addonAfter="dasd" addonBefore="dasd" suffix="dasd" />
      <Input size='large' addonAfter="dasd" addonBefore="dasd" suffix="dasd" />
      <TextArea autoSize={true} />
    </React.StrictMode>
  )
}

export default input
