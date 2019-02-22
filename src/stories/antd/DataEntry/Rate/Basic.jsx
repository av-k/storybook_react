import React, { Component } from 'react';
import { Rate } from 'antd';
import 'antd/lib/rate/style';

class Basic extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Basic</h3>
        <Rate />
      </section>
    );
  }
}

export default Basic;
