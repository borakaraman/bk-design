import React from 'react'
import { Row } from '../components/Row'
import { Col } from '../components/Col'

const row = () => {
  return (
    <React.StrictMode>
      <h1>Grid Layer</h1>
      <Row>
        <Col span={12}>col-12</Col>
        <Col span={12}>col-12</Col>
      </Row>
    </React.StrictMode>
  )
}

export default row
