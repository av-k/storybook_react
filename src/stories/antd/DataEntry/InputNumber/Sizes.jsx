import React, { Component } from 'react';
import { InputNumber } from 'antd';
import 'antd/lib/input-number/style';
import { withOptions } from '../../../../common/withOptions';
import * as AllProps from './_DATA';

class Sizes extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Sizes</h3>
        <InputNumber size="large" min={1} max={100000} defaultValue={3} />
        <InputNumber
          style={{ marginLeft: '20px' }}
          min={1}
          max={100000}
          defaultValue={3}
        />
        <InputNumber
          style={{ marginLeft: '20px' }}
          size="small"
          min={1}
          max={100000}
          defaultValue={3}
        />
      </section>
    );
  }
}

export default withOptions(
  Sizes,
  AllProps,
  `import React, { Component } from 'react';
import { InputNumber } from 'antd';
import 'antd/lib/input-number/style';

class Sizes extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Sizes</h3>
        <InputNumber size="large" min={1} max={100000} defaultValue={3} />
        <InputNumber style={{marginLeft: '20px'}} min={1} max={100000} defaultValue={3} />
        <InputNumber style={{marginLeft: '20px'}} size="small" min={1} max={100000} defaultValue={3} />
      </section>
    );
  }
}`,
);
