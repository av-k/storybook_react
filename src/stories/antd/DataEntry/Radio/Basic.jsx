import React, { Component } from 'react';
import { Radio } from 'antd';
import 'antd/lib/radio/style';

class Basic extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Basic</h3>
        <Radio>Radio</Radio>
      </section>
    );
  }
}

export default Basic;
