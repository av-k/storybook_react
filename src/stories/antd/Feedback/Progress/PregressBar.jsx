import React, { Component } from 'react';
import { Progress } from 'antd';
import 'antd/lib/progress/style';
import { withOptions } from '../../../../common/withOptions';
import * as AllProps from './_DATA';

class ProgressBar extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Progress bar</h3>
        <Progress percent={30} />
        <Progress percent={50} status="active" />
        <Progress percent={70} status="exception" />
        <Progress percent={100} />
        <Progress percent={50} showInfo={false} />
      </section>
    );
  }
}

export default withOptions(
  ProgressBar,
  AllProps,
  `import React, { Component } from 'react';
import { Progress } from 'antd';
import 'antd/lib/progress/style';

class ProgressBar extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Progress bar</h3>
        <Progress percent={30} />
        <Progress percent={50} status="active" />
        <Progress percent={70} status="exception" />
        <Progress percent={100} />
        <Progress percent={50} showInfo={false} />
      </section>
    );
  }
}
`,
);
