import React, { Component } from 'react';
import { Card, Col, Row } from 'antd';
import 'antd/lib/card/style';
import 'antd/lib/col/style';
import 'antd/lib/row/style';
import { withOptions } from '../../../../common/withOptions';
import * as AllProps from './_DATA';

class Columns extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Card in column</h3>
        <div style={{ background: '#ececec', padding: '30px' }}>
          <Row gutter={16}>
            <Col span={8}>
              <Card title="Card title" bordered={false}>
                Card content
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Card title" bordered={false}>
                Card content
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Card title" bordered={false}>
                Card content
              </Card>
            </Col>
          </Row>
        </div>
      </section>
    );
  }
}

export default withOptions(
  Columns,
  AllProps,
  `import React, { Component } from 'react';
import { Card, Col, Row } from 'antd';
import 'antd/lib/card/style';
import 'antd/lib/col/style';
import 'antd/lib/row/style';

class Columns extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Card in column</h3>
        <div style={{ background: '#ececec', padding: '30px' }}>
          <Row gutter={16}>
            <Col span={8}>
              <Card title="Card title" bordered={false}>Card content</Card>
            </Col>
            <Col span={8}>
              <Card title="Card title" bordered={false}>Card content</Card>
            </Col>
            <Col span={8}>
              <Card title="Card title" bordered={false}>Card content</Card>
            </Col>
          </Row>
        </div>
      </section>
    );
  }
}`,
);
