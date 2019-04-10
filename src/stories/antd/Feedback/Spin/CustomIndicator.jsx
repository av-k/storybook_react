import React, { Component } from 'react';
import { Spin, Icon } from 'antd';
import 'antd/lib/spin/style';
import 'antd/lib/icon/style';
import { withOptions } from '../../../../common/withOptions';
import * as AllProps from './_DATA';

class CustomIndicator extends Component {
  render() {
    const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

    return (
      <section className="example">
        <h3 className="ex-title">Custom spinning indicator</h3>
        <Spin indicator={antIcon} />
      </section>
    );
  }
}

export default withOptions(
  CustomIndicator,
  AllProps,
  `import React, { Component } from 'react';
import { Spin, Icon } from 'antd';
import 'antd/lib/spin/style';
import 'antd/lib/icon/style';

class CustomIndicator extends Component {
  render() {
    const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

    return (
      <section className="example">
        <h3 className="ex-title">Custom spinning indicator</h3>
        <Spin indicator={antIcon} />
      </section>
    );
  }
}`,
);
