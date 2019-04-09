import React, { Component } from 'react';
import { Rate } from 'antd';
import 'antd/lib/rate/style';
import { withOptions } from '../../../../common/withOptions';
import * as AllProps from './_DATA';
import { action } from '@storybook/addon-actions';

class Clear extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Clear Star</h3>
        <Rate defaultValue={3} onChange={value => action('Rate')(value)} />{' '}
        allowClear: true
        <br />
        <Rate
          allowClear={false}
          defaultValue={3}
          onChange={value => action('Rate')(value)}
        />{' '}
        allowClear: false
      </section>
    );
  }
}

export default withOptions(
  Clear,
  AllProps,
  `import React, { Component } from 'react';
import { Rate } from 'antd';
import 'antd/lib/rate/style';

class Clear extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Clear Star</h3>
        <Rate defaultValue={3} /> allowClear: true
        <br />
        <Rate allowClear={false} defaultValue={3} /> allowClear: false
      </section>
    );
  }
}`,
);
