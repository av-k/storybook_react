import React, { Component } from 'react';
import { Progress } from 'antd';
import 'antd/lib/progress/style';
import { withOptions } from '../../../../common/withOptions';
import * as AllProps from './_DATA';

class Dashboard extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Dashboard</h3>
        <Progress type="dashboard" percent={75} />
      </section>
    );
  }
}

export default withOptions(
  Dashboard,
  AllProps,
  `import React, { Component } from 'react';
import { Progress } from 'antd';
import 'antd/lib/progress/style';

class Dashboard extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Dashboard</h3>
        <Progress type="dashboard" percent={75} />
      </section>
    );
  }
}`,
);
