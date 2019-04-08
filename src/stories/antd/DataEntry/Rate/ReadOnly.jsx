import React, { Component } from 'react';
import { Rate } from 'antd';
import 'antd/lib/rate/style';
import { withOptions } from '../../../../common/withOptions';
import * as AllProps from './_DATA';

class ReadOnly extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Read Only</h3>
        <Rate disabled defaultValue={2} />
      </section>
    );
  }
}

export default withOptions(
  ReadOnly,
  AllProps,
  `import React, { Component } from 'react';
import { Rate } from 'antd';
import 'antd/lib/rate/style';

class ReadOnly extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Read Only</h3>
        <Rate disabled defaultValue={2} />
      </section>
    );
  }
}`,
);
