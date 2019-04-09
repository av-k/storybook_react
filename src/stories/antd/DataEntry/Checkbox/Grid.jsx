import React, { Component } from 'react';
import { Checkbox, Row, Col } from 'antd';
import { withOptions } from '../../../../common/withOptions';
import * as AllProps from './_DATA';
import { action } from '@storybook/addon-actions';

class Grid extends Component {
  state = {};
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Use with Grid</h3>

        <Checkbox.Group style={{ width: '100%' }}>
          <Row>
            <Col span={8}>
              <Checkbox
                value="A"
                onChange={e => action('Checked A')(e.target.checked)}
              >
                A
              </Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox
                value="B"
                onChange={e => action('Checked B')(e.target.checked)}
              >
                B
              </Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox
                value="C"
                onChange={e => action('Checked C')(e.target.checked)}
              >
                C
              </Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox
                value="D"
                onChange={e => action('Checked D')(e.target.checked)}
              >
                D
              </Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox
                value="E"
                onChange={e => action('Checked E')(e.target.checked)}
              >
                E
              </Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox
                value="F"
                onChange={e => action('Checked F')(e.target.checked)}
              >
                F
              </Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
      </section>
    );
  }
}

export default withOptions(
  Grid,
  AllProps,
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
