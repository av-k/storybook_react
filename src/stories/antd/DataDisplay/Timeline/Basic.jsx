import React, { Component } from 'react';
import { Timeline } from 'antd';
import 'antd/lib/timeline/style';
import { withOptions } from '../../../../common/withOptions';
import * as AllProps from './_DATA';

class Basic extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Basic</h3>
        <Timeline>
          <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
          <Timeline.Item>
            Solve initial network problems 2015-09-01
          </Timeline.Item>
          <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
          <Timeline.Item>
            Network problems being solved 2015-09-01
          </Timeline.Item>
        </Timeline>
      </section>
    );
  }
}

export default withOptions(
  Basic,
  AllProps,
  `import React, { Component } from 'react';
import { Timeline } from 'antd';
import 'antd/lib/timeline/style';

class Basic extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Basic</h3>
        <Timeline>
          <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
          <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
          <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
          <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
        </Timeline>
      </section>
    );
  }
}`,
);
