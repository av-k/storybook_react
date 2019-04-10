import React, { Component } from 'react';
import { Spin } from 'antd';
import 'antd/lib/spin/style';
import { withOptions } from '../../../../common/withOptions';
import * as AllProps from './_DATA';

class Size extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Size</h3>
        <Spin size="small" />
        <Spin className="ml20" />
        <Spin className="ml20" size="large" />
      </section>
    );
  }
}

export default withOptions(
  Size,
  AllProps,
  `import React, { Component } from 'react';
import { Spin } from 'antd';
import 'antd/lib/spin/style';

class Size extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Size</h3>
        <Spin size="small" />
        <Spin className="ml20" />
        <Spin className="ml20" size="large" />
      </section>
    );
  }
}`,
);
