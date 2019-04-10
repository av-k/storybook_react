import React, { Component } from 'react';
import { Timeline } from 'antd';
import 'antd/lib/timeline/style';
import { withOptions } from '../../../../common/withOptions';
import * as AllProps from './_DATA';

class LastNode extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Last Node</h3>
        <Timeline pending="Recording...">
          <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
          <Timeline.Item>
            Solve initial network problems 2015-09-01
          </Timeline.Item>
          <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
        </Timeline>
      </section>
    );
  }
}

export default withOptions(
  LastNode,
  AllProps,
  `import React, { Component } from 'react';
import { Timeline } from 'antd';
import 'antd/lib/timeline/style';

class LastNode extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Last Node</h3>
        <Timeline pending="Recording...">
          <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
          <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
          <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
        </Timeline>
      </section>
    );
  }
}`,
);
