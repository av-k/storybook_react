import React, { Component } from 'react';
import { Avatar } from 'antd';
import 'antd/lib/avatar/style';
import { withOptions } from '../../../../common/withOptions';
import * as AllProps from './_DATA';

class Type extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Type</h3>
        <Avatar icon="user" />
        <Avatar className="ml20">U</Avatar>
        <Avatar className="ml20">USER</Avatar>
        <Avatar
          className="ml20"
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        />
        <Avatar
          className="ml20"
          style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}
        >
          U
        </Avatar>
        <Avatar
          className="ml20"
          style={{ backgroundColor: '#87d068' }}
          icon="user"
        />
      </section>
    );
  }
}

export default withOptions(
  Type,
  AllProps,
  `import React, { Component } from 'react';
import { Avatar } from 'antd';
import 'antd/lib/avatar/style';

class Type extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Type</h3>
        <Avatar icon="user" />
        <Avatar className="ml20">U</Avatar>
        <Avatar className="ml20">USER</Avatar>
        <Avatar className="ml20" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        <Avatar className="ml20" style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>U</Avatar>
        <Avatar className="ml20" style={{ backgroundColor: '#87d068' }} icon="user" />
      </section>
    );
  }
}`,
);
