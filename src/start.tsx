import React from 'react'
import ReactDOM from 'react-dom/client'
import Button from './test/button'
import Row from './test/row'
import Input from './test/input'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    {/* <Button />
    <Row /> */}
    <Input />
  </React.StrictMode>,
)
