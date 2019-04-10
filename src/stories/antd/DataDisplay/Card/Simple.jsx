import React, { Component } from 'react';
import { Card } from 'antd';
import 'antd/lib/card/style';
import { withOptions } from '../../../../common/withOptions';
import * as AllProps from './_DATA';

class SimpleCard extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Simple Card</h3>
        <Card style={{ width: 300 }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </section>
    );
  }
}

export default withOptions(
  SimpleCard,
  AllProps,
  `import React, { Component } from 'react';
import { Card } from 'antd';
import 'antd/lib/card/style';

class SimpleCard extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Simple Card</h3>
        <Card style={{ width: 300 }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </section>
    );
  }
}`,
);
