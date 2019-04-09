import React, { Component } from 'react';
import { Radio } from 'antd';
import 'antd/lib/radio/style';
import { withOptions } from '../../../../common/withOptions';
import * as AllProps from './_DATA';
import { action } from '@storybook/addon-actions';

const RadioGroup = Radio.Group;

class Name extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">RadioGroup With Name</h3>
        <RadioGroup
          name="radiogroup"
          defaultValue={1}
          onChange={e => action('Value')(e.target.value)}
        >
          <Radio value={1}>A</Radio>
          <Radio value={2}>B</Radio>
          <Radio value={3}>C</Radio>
          <Radio value={4}>D</Radio>
        </RadioGroup>
      </section>
    );
  }
}

export default withOptions(
  Name,
  AllProps,
  `import React, { Component } from 'react';
import { Radio } from 'antd';
import 'antd/lib/radio/style';

const RadioGroup = Radio.Group;

class Name extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">RadioGroup With Name</h3>
        <RadioGroup name="radiogroup" defaultValue={1}>
          <Radio value={1}>A</Radio>
          <Radio value={2}>B</Radio>
          <Radio value={3}>C</Radio>
          <Radio value={4}>D</Radio>
        </RadioGroup>
      </section>
    );
  }
}`,
);
