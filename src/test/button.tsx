import React from 'react'
import { Button } from '../components/Button/Button'
import { Icon } from '../components/Icon/icon'
import { Row } from '../components/Grid/Row'
import { Col } from '../components/Grid/Col'

const button = () => {
  return (
    <React.StrictMode>
      <Row justify={'center'}>
        <Col span={24}>
          <h1 style={{ background: '#5e914e', color: 'white' }}>Buttonlar</h1>
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
          <Button
            onClick={(e) => console.log(e)}
            icon={<Icon type='download' />}
            type='primary'
            style={{ marginRight: 10 }}
          >
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
          <Row justify={'center'}>
            <Col span={5}>
              <Button onClick={(e) => console.log(e)} type='primary' style={{ marginBottom: 10 }} block>
                primary
              </Button>
              <Button onClick={(e) => console.log(e)} type='default' style={{ marginBottom: 10 }} block>
                default
              </Button>
              <Button onClick={(e) => console.log(e)} type='dashed' style={{ marginBottom: 10 }} block>
                Dashed
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </React.StrictMode>
  )
}

export default button
