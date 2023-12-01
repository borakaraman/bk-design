import React from 'react'
import ReactDOM from 'react-dom/client'
import { Button } from './components/Button'
import { Icon } from './components/icon'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <h1>Buttonlar</h1>
    <Button
      onClick={(e) => console.log(e)}
      icon={<Icon type='download' />}
      type='dashed'
      shape='circle'
      size='large'
      style={{ color: '#fff', backgroundColor: '#ccc' }}
    />
    <Button
      onClick={(e) => console.log(e)}
      icon={<Icon type='close' />}
      type='dashed'
      // shape='circle'
      size='large'
      style={{ color: '#fff', backgroundColor: '#ccc' }}
    />
  </React.StrictMode>,
)
