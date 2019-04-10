import React, { Component } from 'react';
import { Spin } from 'antd';
import 'antd/lib/spin/style';
import { withOptions } from '../../../../common/withOptions';
import * as AllProps from './_DATA';

class Inside extends Component {
  render() {
    const style = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: 300,
      height: 100,
      backgroundColor: '#ccc',
    };

    return (
      <section className="example">
        <h3 className="ex-title">Inside a container</h3>
        <div style={style}>
          <Spin size="large" />
        </div>
      </section>
    );
  }
}

export default withOptions(
  Inside,
  AllProps,
  `import React, { Component } from 'react';
import { Spin } from 'antd';
import 'antd/lib/spin/style';

class Inside extends Component {
  render() {
    const style = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: 300,
      height: 100,
      backgroundColor: '#ccc'
    };

    return (
      <section className="example">
        <h3 className="ex-title">Inside a container</h3>
        <div style={style}>
          <Spin size="large" />
        </div>
      </section>
    );
  }
}`,
);
