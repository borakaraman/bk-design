import React from 'react'
import { Row } from '../components/Row'
const row = () => {
  return (
    <React.StrictMode>
      <h1>Grid Layer</h1>
      <Row gutter={50} style={{ backgroundColor: 'red' }} justify='space-between' align='top'>
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
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
        style={{ backgroundColor: 'orange' }}
      >
        row
      </Row>
    </React.StrictMode>
  )
}

export default row
