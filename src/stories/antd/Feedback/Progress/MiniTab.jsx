import React, { Component } from 'react';
import { Progress } from 'antd';
import 'antd/lib/progress/style';
import { withOptions } from '../../../../common/withOptions';
import * as AllProps from './_DATA';

class MiniTab extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Mini size progress bar</h3>
        <div style={{ width: 170 }}>
          <Progress percent={30} size="small" />
          <Progress percent={50} size="small" status="active" />
          <Progress percent={70} size="small" status="exception" />
          <Progress percent={100} size="small" />
        </div>
      </section>
    );
  }
}

export default withOptions(
  MiniTab,
  AllProps,
  `import React, { Component } from 'react';
import { Progress } from 'antd';
import 'antd/lib/progress/style';

class MiniTab extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Mini size progress bar</h3>
        <div style={{ width: 170 }}>
          <Progress percent={30} size="small" />
          <Progress percent={50} size="small" status="active" />
          <Progress percent={70} size="small" status="exception" />
          <Progress percent={100} size="small" />
        </div>
      </section>
    );
  }
}`,
);
