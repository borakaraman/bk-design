import React from 'react'
import { Input } from '../components/Input'

const { TextArea } = Input;

const input = () => {
    return (
        <React.StrictMode>
            <Input className='abc' />
            <TextArea autoSize={true} />
        </React.StrictMode>
    )
}

export default input