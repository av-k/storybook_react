import React, { Component } from 'react';
import { Slider, InputNumber, Row, Col } from 'antd';
import 'antd/lib/slider/style';
import 'antd/lib/input-number/style';
import 'antd/lib/row/style';
import 'antd/lib/col/style';
import { withOptions } from '../../../../common/withOptions';
import * as AllProps from './_DATA';
import { action } from '@storybook/addon-actions';

class IntegerStep extends React.Component {
  state = {
    inputValue: 1,
  };

  onChange = value => {
    action('Value')(value);
    this.setState({
      inputValue: value,
    });
  };

  render() {
    return (
      <Row>
        <Col span={12}>
          <Slider
            min={1}
            max={20}
            onChange={this.onChange}
            value={this.state.inputValue}
          />
        </Col>
        <Col span={4}>
          <InputNumber
            min={1}
            max={20}
            style={{ marginLeft: 16 }}
            value={this.state.inputValue}
            onChange={this.onChange}
          />
        </Col>
      </Row>
    );
  }
}

class DecimalStep extends React.Component {
  state = {
    inputValue: 0,
  };

  onChange = value => {
    action('Value')(value);
    this.setState({
      inputValue: value,
    });
  };

  render() {
    return (
      <Row>
        <Col span={12}>
          <Slider
            min={0}
            max={1}
            onChange={this.onChange}
            value={this.state.inputValue}
            step={0.01}
          />
        </Col>
        <Col span={4}>
          <InputNumber
            min={0}
            max={1}
            style={{ marginLeft: 16 }}
            step={0.01}
            value={this.state.inputValue}
            onChange={this.onChange}
          />
        </Col>
      </Row>
    );
  }
}

class Basic extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Slider with InputNumber</h3>
        <IntegerStep />
        <DecimalStep />
      </section>
    );
  }
}

export default withOptions(
  Basic,
  AllProps,
  `import React, { Component } from 'react';
import { Slider, InputNumber, Row, Col } from 'antd';
import 'antd/lib/slider/style';
import 'antd/lib/input-number/style';
import 'antd/lib/row/style';
import 'antd/lib/col/style';

class IntegerStep extends React.Component {
  state = {
    inputValue: 1,
  };

  onChange = (value) => {
    this.setState({
      inputValue: value,
    });
  };

  render() {
    return (
      <Row>
        <Col span={12}>
          <Slider min={1} max={20} onChange={this.onChange} value={this.state.inputValue} />
        </Col>
        <Col span={4}>
          <InputNumber
            min={1}
            max={20}
            style={{ marginLeft: 16 }}
            value={this.state.inputValue}
            onChange={this.onChange}
          />
        </Col>
      </Row>
    );
  }
}

class DecimalStep extends React.Component {
  state = {
    inputValue: 0,
  };

  onChange = (value) => {
    this.setState({
      inputValue: value,
    });
  };

  render() {
    return (
      <Row>
        <Col span={12}>
          <Slider min={0} max={1} onChange={this.onChange} value={this.state.inputValue} step={0.01} />
        </Col>
        <Col span={4}>
          <InputNumber
            min={0}
            max={1}
            style={{ marginLeft: 16 }}
            step={0.01}
            value={this.state.inputValue}
            onChange={this.onChange}
          />
        </Col>
      </Row>
    );
  }
}

class Basic extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Slider with InputNumber</h3>
        <IntegerStep />
        <DecimalStep />
      </section>
    );
  }
}
`,
);
