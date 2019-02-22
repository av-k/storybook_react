import React, { Component } from 'react';
import { Alert } from 'antd';
import 'antd/lib/alert/style';

class Basic extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Basic</h3>
        <Alert message="Success Text" type="success" />
      </section>
    );
  }
}

export default Basic;
