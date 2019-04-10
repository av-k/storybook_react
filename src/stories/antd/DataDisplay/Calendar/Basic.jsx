import React, { Component } from 'react';
import { Calendar } from 'antd';
import 'antd/lib/calendar/style';
import { withOptions } from '../../../../common/withOptions';
import * as AllProps from './_DATA';
import { action } from '@storybook/addon-actions';

class Basic extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Basic</h3>
        <Calendar
          onChange={time => action('Scope')(time)}
          onSelect={value => action('Date')(value)}
        />
      </section>
    );
  }
}

export default withOptions(
  Basic,
  AllProps,
  `import React, { Component } from 'react';
import { Calendar } from 'antd';
import 'antd/lib/calendar/style';

class Basic extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Basic</h3>
        <Calendar />
      </section>
    );
  }
}`,
);
