import React from 'react'
import { Row } from '../components/Row'
import { Col } from '../components/Col'

const row = () => {
  const style: React.CSSProperties = { background: '#0092ff', padding: '8px 0' }
  const style1: React.CSSProperties = { background: '#0092ff', padding: '8px 0', height: 100, lineHeight: '100px' }
  const style2: React.CSSProperties = { background: '#0092ff', padding: '8px 0', height: 50, lineHeight: '50px' }
  const style3: React.CSSProperties = { background: '#0092ff', padding: '8px 0', height: 120, lineHeight: '120px' }
  const style4: React.CSSProperties = { background: '#0092ff', padding: '8px 0', height: 80, lineHeight: '80px' }
  return (
    <React.StrictMode>
      <Row justify={'center'}>
        <Col span={24}>
          <h1 style={{ background: '#916d4e', color: 'white' }}>Grid Layer</h1>

          <h2>Horizontal</h2>

          <Row gutter={16}>
            <Col span={6}>
              <div style={style}>col-6</div>
            </Col>
            <Col span={6}>
              <div style={style}>col-6</div>
            </Col>
            <Col span={6}>
              <div style={style}>col-6</div>
            </Col>
            <Col span={6}>
              <div style={style}>col-6</div>
            </Col>
          </Row>

          <h2>Responsive</h2>

          <Row gutter={{ xs: 4, sm: 8, md: 12, lg: 24 }}>
            <Col span={6}>
              <div style={style}>col-6</div>
            </Col>
            <Col span={6}>
              <div style={style}>col-6</div>
            </Col>
            <Col span={6}>
              <div style={style}>col-6</div>
            </Col>
            <Col span={6}>
              <div style={style}>col-6</div>
            </Col>
          </Row>

          <h2>Vertical</h2>

          <Row gutter={[16, 24]}>
            <Col span={6}>
              <div style={style}>col-6</div>
            </Col>
            <Col span={6}>
              <div style={style}>col-6</div>
            </Col>
            <Col span={6}>
              <div style={style}>col-6</div>
            </Col>
            <Col span={6}>
              <div style={style}>col-6</div>
            </Col>
            <Col span={6}>
              <div style={style}>col-6</div>
            </Col>
            <Col span={6}>
              <div style={style}>col-6</div>
            </Col>
            <Col span={6}>
              <div style={style}>col-6</div>
            </Col>
            <Col span={6}>
              <div style={style}>col-6</div>
            </Col>
          </Row>

          <h2>OFFSET</h2>

          <Row>
            <Col span={8}>
              <div style={style}>col-8</div>
            </Col>
            <Col span={8} offset={8}>
              <div style={style}>col-8</div>
            </Col>
          </Row>
          <Row>
            <Col span={6} offset={6}>
              <div style={style}>col-6 col-offset-6</div>
            </Col>
            <Col span={6} offset={6}>
              <div style={style}>col-6 col-offset-6</div>
            </Col>
          </Row>
          <Row>
            <Col span={12} offset={6}>
              <div style={style}>col-12 col-offset-6</div>
            </Col>
          </Row>

          <h2>GRİD PUSH & PULL</h2>

          <Row>
            <Col span={18} push={6}>
              col-18 col-push-6
            </Col>
            <Col span={6} pull={18}>
              col-6 col-pull-18
            </Col>
          </Row>

          <h2>sub-element align left</h2>

          <Row justify='start'>
            <Col span={4}>
              <div style={style}>col-4</div>
            </Col>
            <Col span={4}>
              <div style={style}>col-4</div>
            </Col>
            <Col span={4}>
              <div style={style}>col-4</div>
            </Col>
            <Col span={4}>
              <div style={style}>col-4</div>
            </Col>
          </Row>

          <h2>sub-element align center</h2>

          <Row justify='center'>
            <Col span={4}>
              <div style={style}>col-4</div>
            </Col>
            <Col span={4}>
              <div style={style}>col-4</div>
            </Col>
            <Col span={4}>
              <div style={style}>col-4</div>
            </Col>
            <Col span={4}>
              <div style={style}>col-4</div>
            </Col>
          </Row>

          <h2>sub-element align right</h2>

          <Row justify='end'>
            <Col span={4}>
              <div style={style}>col-4</div>
            </Col>
            <Col span={4}>
              <div style={style}>col-4</div>
            </Col>
            <Col span={4}>
              <div style={style}>col-4</div>
            </Col>
            <Col span={4}>
              <div style={style}>col-4</div>
            </Col>
          </Row>

          <h2>sub-element monospaced arrangement</h2>

          <Row justify='space-between'>
            <Col span={4}>
              <div style={style}>col-4</div>
            </Col>
            <Col span={4}>
              <div style={style}>col-4</div>
            </Col>
            <Col span={4}>
              <div style={style}>col-4</div>
            </Col>
            <Col span={4}>
              <div style={style}>col-4</div>
            </Col>
          </Row>

          <h2>sub-element align full</h2>

          <Row justify='space-around'>
            <Col span={4}>
              <div style={style}>col-4</div>
            </Col>
            <Col span={4}>
              <div style={style}>col-4</div>
            </Col>
            <Col span={4}>
              <div style={style}>col-4</div>
            </Col>
            <Col span={4}>
              <div style={style}>col-4</div>
            </Col>
          </Row>

          <h2>sub-element align evenly</h2>

          <Row justify='space-evenly'>
            <Col span={4}>
              <div style={style}>col-4</div>
            </Col>
            <Col span={4}>
              <div style={style}>col-4</div>
            </Col>
            <Col span={4}>
              <div style={style}>col-4</div>
            </Col>
            <Col span={4}>
              <div style={style}>col-4</div>
            </Col>
          </Row>

          <h2>Align Top</h2>

          <Row justify='center' align='top'>
            <Col span={4}>
              <div style={style1}>col-4</div>
            </Col>
            <Col span={4}>
              <div style={style2}>col-4</div>
            </Col>
            <Col span={4}>
              <div style={style3}>col-4</div>
            </Col>
            <Col span={4}>
              <div style={style4}>col-4</div>
            </Col>
          </Row>

          <h2>Align Middle</h2>

          <Row justify='space-around' align='middle'>
            <Col span={4}>
              <div style={style1}>col-4</div>
            </Col>
            <Col span={4}>
              <div style={style2}>col-4</div>
            </Col>
            <Col span={4}>
              <div style={style3}>col-4</div>
            </Col>
            <Col span={4}>
              <div style={style4}>col-4</div>
            </Col>
          </Row>

          <h2>Align Bottom</h2>

          <Row justify='space-between' align='bottom'>
            <Col span={4}>
              <div style={style1}>col-4</div>
            </Col>
            <Col span={4}>
              <div style={style2}>col-4</div>
            </Col>
            <Col span={4}>
              <div style={style3}>col-4</div>
            </Col>
            <Col span={4}>
              <div style={style4}>col-4</div>
            </Col>
          </Row>

          <h2>Normal</h2>

          <Row>
            <Col span={6} order={4}>
              <div style={style}> 1 col-order-4</div>
            </Col>
            <Col span={6} order={3}>
              <div style={style}> 2 col-order-3</div>
            </Col>
            <Col span={6} order={2}>
              <div style={style}> 3 col-order-2</div>
            </Col>
            <Col span={6} order={1}>
              <div style={style}> 4 col-order-1</div>
            </Col>
          </Row>

          <h2>Responsive</h2>

          <Row>
            <Col span={6} xs={{ order: 1 }} sm={{ order: 2 }} md={{ order: 3 }} lg={{ order: 4 }}>
              <div style={style}> 1 col-order-responsive</div>
            </Col>
            <Col span={6} xs={{ order: 2 }} sm={{ order: 1 }} md={{ order: 4 }} lg={{ order: 3 }}>
              <div style={style}> 2 col-order-responsive</div>
            </Col>
            <Col span={6} xs={{ order: 3 }} sm={{ order: 4 }} md={{ order: 2 }} lg={{ order: 1 }}>
              <div style={style}> 3 col-order-responsive</div>
            </Col>
            <Col span={6} xs={{ order: 4 }} sm={{ order: 3 }} md={{ order: 1 }} lg={{ order: 2 }}>
              <div style={style}> 4 col-order-responsive</div>
            </Col>
          </Row>

          <h2>Percentage columns</h2>
          <Row>
            <Col flex={2}>
              <div style={style}> 2 / 5</div>
            </Col>
            <Col flex={3}>
              <div style={style}> 3 / 5</div>
            </Col>
          </Row>
          <h2>Fill rest</h2>
          <Row>
            <Col flex='100px'>
              <div style={style}> 100px</div>
            </Col>
            <Col flex='auto'>
              <div style={style}> Fill Rest</div>
            </Col>
          </Row>
          <h2>Raw flex style</h2>
          <Row>
            <Col flex='1 1 200px'>
              <div style={style}> 1 1 200px</div>
            </Col>
            <Col flex='0 1 300px'>
              <div style={style}> 0 1 300px</div>
            </Col>
          </Row>

          <Row wrap={false}>
            <Col flex='none'>
              <div style={{ padding: '0 16px' }}>
                <div style={style}> none</div>
              </div>
            </Col>
            <Col flex='auto'>
              <div style={style}> auto with no-wrap</div>
            </Col>
          </Row>

          <h2>Responsive</h2>

          <Row>
            <Col xs={2} sm={4} md={6} lg={8} xl={10}>
              <div style={style}> Col</div>
            </Col>
            <Col xs={20} sm={16} md={12} lg={8} xl={4}>
              <div style={style}> Col</div>
            </Col>
            <Col xs={2} sm={4} md={6} lg={8} xl={10}>
              <div style={style}> Col</div>
            </Col>
          </Row>

          <h2>More responsive</h2>

          <Row>
            <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
              <div style={style}> Col</div>
            </Col>
            <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
              <div style={style}> Col</div>
            </Col>
            <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
              <div style={style}> Col</div>
            </Col>
          </Row>
        </Col>
      </Row>
    </React.StrictMode>
  )
}

export default row
