import React, { Component } from 'react';
import { Rate } from 'antd';
import 'antd/lib/rate/style';
import { withOptions } from '../../../../common/withOptions';
import * as AllProps from './_DATA';
import { action } from '@storybook/addon-actions';

class HalfStar extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Half Star</h3>
        <Rate
          allowHalf
          defaultValue={2.5}
          onChange={value => action('Rate')(value)}
        />
      </section>
    );
  }
}

export default withOptions(
  HalfStar,
  AllProps,
  `import React, { Component } from 'react';
import { Rate } from 'antd';
import 'antd/lib/rate/style';

class HalfStar extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Half Star</h3>
        <Rate allowHalf defaultValue={2.5} />
      </section>
    );
  }
}`,
);
