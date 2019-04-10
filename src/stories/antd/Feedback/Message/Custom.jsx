import React, { Component } from 'react';
import { message, Button } from 'antd';
import 'antd/lib/message/style';
import 'antd/lib/button/style';
import { withOptions } from '../../../../common/withOptions';
import * as AllProps from './_DATA';

class Custom extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Customize duration</h3>
        <Button onClick={this.success}>Customized display duration</Button>
      </section>
    );
  }

  success = () => {
    message.success(
      'This is a prompt message for success, and it will disappear in 10 seconds',
      10,
    );
  };
}

export default withOptions(
  Custom,
  AllProps,
  `import React, { Component } from 'react';
import { message, Button } from 'antd';
import 'antd/lib/message/style';
import 'antd/lib/button/style';

class Custom extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Customize duration</h3>
        <Button onClick={this.success}>Customized display duration</Button>
      </section>
    );
  }

  success = () => {
    message.success('This is a prompt message for success, and it will disappear in 10 seconds', 10);
  };
}`,
);
