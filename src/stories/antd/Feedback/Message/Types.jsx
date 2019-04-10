import React, { Component } from 'react';
import { message, Button } from 'antd';
import 'antd/lib/message/style';
import 'antd/lib/button/style';
import { withOptions } from '../../../../common/withOptions';
import * as AllProps from './_DATA';

class Types extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Normal prompt</h3>
        <Button onClick={this.success}>Success</Button>
        <Button className="ml20" onClick={this.error}>
          Error
        </Button>
        <Button className="ml20" onClick={this.warning}>
          Warning
        </Button>
      </section>
    );
  }

  success = () => {
    message.success('This is a message of success');
  };

  error = () => {
    message.error('This is a message of error');
  };

  warning = () => {
    message.warning('This is message of warning');
  };
}

export default withOptions(
  Types,
  AllProps,
  `import React, { Component } from 'react';
import { message, Button } from 'antd';
import 'antd/lib/message/style';
import 'antd/lib/button/style';

class Types extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Normal prompt</h3>
        <Button onClick={this.success}>Success</Button>
        <Button className="ml20" onClick={this.error}>Error</Button>
        <Button className="ml20" onClick={this.warning}>Warning</Button>
      </section>
    );
  }

  success = () => {
    message.success('This is a message of success');
  };

  error = () => {
    message.error('This is a message of error');
  };

  warning = () => {
    message.warning('This is message of warning');
  };
}`,
);
