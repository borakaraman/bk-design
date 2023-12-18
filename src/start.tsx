import React from 'react'
import ReactDOM from 'react-dom/client'
import Button from './test/button'
import Row from './test/row'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Button />
    <Row />
  </React.StrictMode>,
)
