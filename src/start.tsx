import React from 'react'
import ReactDOM from 'react-dom/client'
import { Button } from './components/Button'
import { Icon } from './components/icon'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <h1>Buttonlar</h1>
    <h2>Typelar</h2>
    <Button onClick={(e) => console.log(e)} type='primary' style={{ marginRight: 10 }}>
      primary
    </Button>
    <Button onClick={(e) => console.log(e)} type='default' style={{ marginRight: 10 }}>
      default
    </Button>
    <Button onClick={(e) => console.log(e)} type='dashed' style={{ marginRight: 10 }}>
      Dashed
    </Button>
    <br />
    <h2>Shapeler</h2>
    <Button onClick={(e) => console.log(e)} type='primary' shape='circle' style={{ marginRight: 10 }}>
      Circle
    </Button>
    <Button onClick={(e) => console.log(e)} type='primary' shape='default' style={{ marginRight: 10 }}>
      default
    </Button>
    <br />
    <h2>Sizeler</h2>
    <Button onClick={(e) => console.log(e)} type='primary' size='small' style={{ marginRight: 10 }}>
      Small
    </Button>
    <Button onClick={(e) => console.log(e)} type='primary' size='middle' style={{ marginRight: 10 }}>
      Middle
    </Button>
    <Button onClick={(e) => console.log(e)} type='primary' size='large' style={{ marginRight: 10 }}>
      Large
    </Button>
    <br />
    <h2>Styleler</h2>
    <Button
      onClick={(e) => console.log(e)}
      type='primary'
      style={{ color: 'white', backgroundColor: 'red', marginRight: 10 }}
    >
      Red White
    </Button>
    <Button
      onClick={(e) => console.log(e)}
      type='primary'
      style={{ color: 'white', backgroundColor: 'green', marginRight: 10 }}
    >
      Green White
    </Button>
    <br />
    <h2>Loading & Icon</h2>
    <Button
      onClick={(e) => console.log(e)}
      icon={<Icon type='close' />}
      type='primary'
      shape='circle'
      style={{ marginRight: 10 }}
    />
    <Button
      onClick={(e) => console.log(e)}
      icon={<Icon type='download' />}
      type='primary'
      shape='circle'
      style={{ marginRight: 10 }}
      loading
    />
    <Button onClick={(e) => console.log(e)} icon={<Icon type='download' />} type='primary' style={{ marginRight: 10 }}>
      Primary
    </Button>
    <Button
      onClick={(e) => console.log(e)}
      icon={<Icon type='download' />}
      type='primary'
      style={{ marginRight: 10 }}
      loading
    >
      Primary
    </Button>
    <br />
    <h2>Block</h2>
    <div style={{ width: 500 }}>
      <Button onClick={(e) => console.log(e)} type='primary' style={{ marginBottom: 10 }} block>
        primary
      </Button>
      <Button onClick={(e) => console.log(e)} type='default' style={{ marginBottom: 10 }} block>
        default
      </Button>
      <Button onClick={(e) => console.log(e)} type='dashed' style={{ marginBottom: 10 }} block>
        Dashed
      </Button>
    </div>
  </React.StrictMode>,
)
