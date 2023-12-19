import React from 'react'
import { Row } from '../components/Row'
import { Col } from '../components/Col'

const row = () => {
  return (
    <React.StrictMode>
      <h1>Grid Layer</h1>
      <Row gutter={50}>
        <Col>dsadas</Col>
      </Row>
      {/* <Row gutter={50} style={{ backgroundColor: 'red' }} justify='space-between' align='top'>
        row
      </Row>
      <Row align='bottom' wrap={false}>
        row dasdasdsa dasd asdas dasd asd asd asd
      </Row>
      <Row gutter={[16, 24]} style={{ backgroundColor: 'blue' }} justify='start'>
        row
      </Row>
      <Row
        gutter={{
          xs: 100,
          sm: 200,
          md: 300,
          lg: 400,
          xl: 500,
          xxl: 600,
        }}
        style={{ backgroundColor: 'orange' }}
      >
        row
      </Row> */}
    </React.StrictMode>
  )
}

export default row
