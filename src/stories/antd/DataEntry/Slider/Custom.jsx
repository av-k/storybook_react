import React, { Component } from 'react';
import { Slider } from 'antd';
import 'antd/lib/slider/style';
import { withOptions } from '../../../../common/withOptions';
import * as AllProps from './_DATA';
import { action } from '@storybook/addon-actions';

function formatter(value) {
  return `${value}%`;
}

class Custom extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Customerize tooltip</h3>
        <div>
          <Slider tipFormatter={formatter} onChange={e => action('Value')(e)} />
          <Slider tipFormatter={null} onChange={e => action('Value')(e)} />
        </div>
      </section>
    );
  }
}

export default withOptions(
  Custom,
  AllProps,
  `import React, { Component } from 'react';
import { Slider } from 'antd';
import 'antd/lib/slider/style';

function formatter(value) {
  return \`\${value}%\`;
}

class Custom extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Customerize tooltip</h3>
        <div>
          <Slider tipFormatter={formatter} />
          <Slider tipFormatter={null} />
        </div>
      </section>
    );
  }
}`,
);
