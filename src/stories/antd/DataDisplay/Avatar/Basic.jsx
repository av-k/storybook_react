import React, { Component } from 'react';
import { Avatar } from 'antd';
import 'antd/lib/avatar/style';
import { withOptions } from '../../../../common/withOptions';
import * as AllProps from './_DATA';

class Basic extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Basic</h3>
        <Avatar size="large" icon="user" />
        <Avatar className="ml20" icon="user" />
        <Avatar className="ml20" size="small" icon="user" />
        <Avatar className="ml20" shape="square" size="large" icon="user" />
        <Avatar className="ml20" shape="square" icon="user" />
        <Avatar className="ml20" shape="square" size="small" icon="user" />
      </section>
    );
  }
}

export default withOptions(
  Basic,
  AllProps,
  `import React, { Component } from 'react';
import { Avatar } from 'antd';
import 'antd/lib/avatar/style';

class Basic extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Basic</h3>
          <Avatar size="large" icon="user" />
          <Avatar className="ml20" icon="user" />
          <Avatar className="ml20" size="small" icon="user" />
          <Avatar className="ml20" shape="square" size="large" icon="user" />
          <Avatar className="ml20" shape="square" icon="user" />
          <Avatar className="ml20" shape="square" size="small" icon="user" />
      </section>
    );
  }
}`,
);
