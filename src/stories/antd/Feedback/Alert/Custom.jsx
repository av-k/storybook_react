import React, { Component } from 'react';
import { Alert } from 'antd';
import 'antd/lib/alert/style';
import { withOptions } from '../../../../common/withOptions';
import * as AllProps from './_DATA';

class Custom extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Customized Close Text</h3>
        <Alert message="Info Text" type="info" closeText="Close Now" />
      </section>
    );
  }
}

export default withOptions(
  Custom,
  AllProps,
  `import React, { Component } from 'react';
import { Alert } from 'antd';
import 'antd/lib/alert/style';

class Custom extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Customized Close Text</h3>
        <Alert message="Info Text" type="info" closeText="Close Now" />
      </section>
    );
  }
}`,
);
