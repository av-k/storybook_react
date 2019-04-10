import React, { Component } from 'react';
import { Spin } from 'antd';
import 'antd/lib/spin/style';
import { withOptions } from '../../../../common/withOptions';
import * as AllProps from './_DATA';

class Basic extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Basic Usage</h3>
        <Spin />
      </section>
    );
  }
}

export default withOptions(
  Basic,
  AllProps,
  `import React, { Component } from 'react';
import { Spin } from 'antd';
import 'antd/lib/spin/style';

class Basic extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Basic Usage</h3>
        <Spin />
      </section>
    );
  }
}`,
);
