import React, { Component } from 'react';
import { Switch } from 'antd';
import 'antd/lib/switch/style';

class Basic extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Basic</h3>
        <Switch defaultChecked />
      </section>
    );
  }
}

export default Basic;
