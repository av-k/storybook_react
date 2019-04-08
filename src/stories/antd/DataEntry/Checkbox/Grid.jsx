import React, { Component } from 'react';
import { Checkbox, Row, Col } from 'antd';
import { withOptions } from '../../../../common/withOptions';
import { CheckBoxProps, CheckBoxGroupProps } from './_DATA';

class Grid extends Component {
  state = {};
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Use with Grid</h3>

        <Checkbox.Group style={{ width: '100%' }}>
          <Row>
            <Col span={8}>
              <Checkbox value="A">A</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="B">B</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="C">C</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="D">D</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="E">E</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="F">F</Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
      </section>
    );
  }
}

export default withOptions(
  Grid,
  { CheckBoxProps, CheckBoxGroupProps },
  `import React, { Component } from 'react';
import { Checkbox, Row, Col } from 'antd';

class Grid extends Component {
  state = {};
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Use with Grid</h3>

        <Checkbox.Group style={{ width: '100%' }}>
          <Row>
            <Col span={8}>
              <Checkbox value="A">A</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="B">B</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="C">C</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="D">D</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="E">E</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="F">F</Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
      </section>
    );
  }
}`,
);
