import React, { Component } from 'react';
import { message, Button } from 'antd';
import 'antd/lib/message/style';
import 'antd/lib/button/style';
import { withOptions } from '../../../../common/withOptions';
import * as AllProps from './_DATA';

class Normal extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Normal prompt</h3>
        <Button type="primary" onClick={this.info}>
          Display normal message
        </Button>
      </section>
    );
  }

  info = () => {
    message.info('This is a normal message');
  };
}

export default withOptions(
  Normal,
  AllProps,
  `import React, { Component } from 'react';
import { message, Button } from 'antd';
import 'antd/lib/message/style';
import 'antd/lib/button/style';

class Normal extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Normal prompt</h3>
        <Button type="primary" onClick={this.info}>Display normal message</Button>
      </section>
    );
  }

  info = () => {
    message.info('This is a normal message');
  };
}
`,
);
