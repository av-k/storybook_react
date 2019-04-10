import React, { Component } from 'react';
import { Alert } from 'antd';
import 'antd/lib/alert/style';
import { withOptions } from '../../../../common/withOptions';
import * as AllProps from './_DATA';

class Basic extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Basic</h3>
        <Alert message="Success Text" type="success" />
      </section>
    );
  }
}

export default withOptions(
  Basic,
  AllProps,
  `import React, { Component } from 'react';
import { Alert } from 'antd';
import 'antd/lib/alert/style';

class Basic extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Basic</h3>
        <Alert message="Success Text" type="success" />
      </section>
    );
  }
}`,
);
