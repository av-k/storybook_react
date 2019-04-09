import React, { Component } from 'react';
import { Calendar } from 'antd';
import 'antd/lib/calendar/style';
import { withOptions } from '../../../../common/withOptions';
import * as AllProps from './_DATA';
import { action } from '@storybook/addon-actions';

class Card extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Card</h3>
        <div
          style={{ width: 300, border: '1px solid #d9d9d9', borderRadius: 4 }}
        >
          <Calendar
            fullscreen={false}
            onSelect={value => action('Date')(value)}
          />
        </div>
      </section>
    );
  }
}

export default withOptions(
  Card,
  AllProps,
  `import React, { Component } from 'react';
import { Calendar } from 'antd';
import 'antd/lib/calendar/style';

class Card extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Card</h3>
        <div style={{ width: 300, border: '1px solid #d9d9d9', borderRadius: 4 }}>
          <Calendar fullscreen={false} />
        </div>
      </section>
    );
  }
}`,
);
