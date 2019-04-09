import React, { Component } from 'react';
import { Calendar } from 'antd';
import 'antd/lib/calendar/style';
import { withOptions } from '../../../../common/withOptions';
import * as AllProps from './_DATA';

class Basic extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Basic</h3>
        <Calendar />
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
