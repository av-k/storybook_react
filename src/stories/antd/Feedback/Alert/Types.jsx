import React, { Component } from 'react';
import { Alert } from 'antd';
import 'antd/lib/alert/style';
import { withOptions } from '../../../../common/withOptions';
import * as AllProps from './_DATA';

class Types extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">More Types</h3>
        <Alert className="mb20" message="Success Text" type="success" />
        <Alert className="mb20" message="Info Text" type="info" />
        <Alert className="mb20" message="Warning Text" type="warning" />
        <Alert message="Error Text" type="error" />
      </section>
    );
  }
}

export default withOptions(
  Types,
  AllProps,
  `import React, { Component } from 'react';
import { Alert } from 'antd';
import 'antd/lib/alert/style';

class Types extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">More Types</h3>
        <Alert className="mb20" message="Success Text" type="success" />
        <Alert className="mb20" message="Info Text" type="info" />
        <Alert className="mb20" message="Warning Text" type="warning" />
        <Alert message="Error Text" type="error" />
      </section>
    );
  }
}`,
);
