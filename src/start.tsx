import React from 'react'
import ReactDOM from 'react-dom/client'
import Button from './components/Button'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <h1>Buttonlar</h1>
    <Button
      onClick={(e) => console.log(e)}
      type='primary'
      shape='circle'
      size='small'
      style={{ color: '#fff', backgroundColor: '#ccc' }}
    >
      Default Button
    </Button>
  </React.StrictMode>,
)
