import React, { Component } from 'react';
import { Alert } from 'antd';
import 'antd/lib/alert/style';
import { withOptions } from '../../../../common/withOptions';
import * as AllProps from './_DATA';

class Description extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Description</h3>
        <Alert
          className="mb20"
          message="Success Text"
          description="Success Description Success Description Success Description"
          type="success"
        />
        <Alert
          className="mb20"
          message="Info Text"
          description="Info Description Info Description Info Description Info Description"
          type="info"
        />
        <Alert
          className="mb20"
          message="Warning Text"
          description="Warning Description Warning Description Warning Description Warning Description"
          type="warning"
        />
        <Alert
          message="Error Text"
          description="Error Description Error Description Error Description Error Description"
          type="error"
        />
      </section>
    );
  }
}

export default withOptions(
  Description,
  AllProps,
  `import React, { Component } from 'react';
import { Alert } from 'antd';
import 'antd/lib/alert/style';

class Description extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Description</h3>
        <Alert
          className="mb20"
          message="Success Text"
          description="Success Description Success Description Success Description"
          type="success"
        />
        <Alert
          className="mb20"
          message="Info Text"
          description="Info Description Info Description Info Description Info Description"
          type="info"
        />
        <Alert
          className="mb20"
          message="Warning Text"
          description="Warning Description Warning Description Warning Description Warning Description"
          type="warning"
        />
        <Alert
          message="Error Text"
          description="Error Description Error Description Error Description Error Description"
          type="error"
        />
      </section>
    );
  }
}`,
);
