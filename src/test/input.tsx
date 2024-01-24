import React from 'react'
import { Input } from '../components/Input'
// import { Icon } from '../components/Icon/icon'

const { TextArea } = Input

const input = () => {
  return (
    <React.StrictMode>
      <TextArea autoSize={true} className='sdsd' />
      <Input addonBefore='http://' addonAfter='.com' suffix='.com' defaultValue='mysite' />
    </React.StrictMode>
  )
}

export default input
