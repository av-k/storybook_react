import React, { Component } from 'react';
import { Input, Icon } from 'antd';
import 'antd/lib/input/style';
import 'antd/lib/icon/style';
import { withOptions } from '../../../../common/withOptions';
import * as AllProps from './_DATA';
import { action } from '@storybook/addon-actions';

class Prefix extends Component {
  state = {
    userName: '',
  };

  render() {
    const { userName } = this.state;
    const suffix = userName ? (
      <Icon type="close-circle" onClick={this.emitEmpty} />
    ) : null;

    return (
      <section className="example">
        <h3 className="ex-title">Prefix and Suffix</h3>
        <Input
          style={{ width: 300 }}
          placeholder="Enter your username"
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          suffix={suffix}
          value={userName}
          onChange={this.onChangeUserName}
          ref={node => (this.userNameInput = node)}
        />
      </section>
    );
  }

  emitEmpty = () => {
    this.userNameInput.focus();
    this.setState({ userName: '' });
  };

  onChangeUserName = e => {
    action('Value')(e.target.value);
    this.setState({ userName: e.target.value });
  };
}

export default withOptions(
  Prefix,
  AllProps,
  `class Prefix extends Component {
  state = {
    userName: '',
  };

  render() {
    const { userName } = this.state;
    const suffix = userName ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;

    return (
      <section className="example">
        <h3 className="ex-title">Prefix and Suffix</h3>
        <Input
          style={{width: 300}}
          placeholder="Enter your username"
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          suffix={suffix}
          value={userName}
          onChange={this.onChangeUserName}
          ref={node => this.userNameInput = node}
        />
      </section>
    );
  }

  emitEmpty = () => {
    this.userNameInput.focus();
    this.setState({ userName: '' });
  };

  onChangeUserName = (e) => {
    this.setState({ userName: e.target.value });
  };
}`,
);
