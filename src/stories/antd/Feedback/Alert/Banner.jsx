import React, { Component } from 'react';
import { Alert } from 'antd';
import 'antd/lib/alert/style';
import { withOptions } from '../../../../common/withOptions';
import * as AllProps from './_DATA';

class Banner extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Banner</h3>
        <Alert message="Warning text" banner />
        <br />
        <Alert
          message="Very long warning text warning text text text text text text text"
          banner
          closable
        />
        <br />
        <Alert showIcon={false} message="Warning text without icon" banner />
        <br />
        <Alert type="error" message="Error text" banner />
      </section>
    );
  }
}

export default withOptions(
  Banner,
  AllProps,
  `import React, { Component } from 'react';
import { Alert } from 'antd';
import 'antd/lib/alert/style';

class Banner extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Banner</h3>
        <Alert message="Warning text" banner />
        <br />
        <Alert message="Very long warning text warning text text text text text text text" banner closable />
        <br />
        <Alert showIcon={false} message="Warning text without icon" banner />
        <br />
        <Alert type="error" message="Error text" banner />
      </section>
    );
  }
}`,
);
