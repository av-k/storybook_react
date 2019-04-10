import React, { Component } from 'react';
import { Progress } from 'antd';
import 'antd/lib/progress/style';
import { withOptions } from '../../../../common/withOptions';
import * as AllProps from './_DATA';

class CircularProgressBar extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Circular progress bar</h3>
        <Progress type="circle" percent={75} />
        <Progress
          className="ml20"
          type="circle"
          percent={70}
          status="exception"
        />
        <Progress className="ml20" type="circle" percent={100} />
      </section>
    );
  }
}

export default withOptions(
  CircularProgressBar,
  AllProps,
  `import React, { Component } from 'react';
import { Progress } from 'antd';
import 'antd/lib/progress/style';

class CircularProgressBar extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Circular progress bar</h3>
        <Progress type="circle" percent={75} />
        <Progress className="ml20" type="circle" percent={70} status="exception" />
        <Progress className="ml20" type="circle" percent={100} />
      </section>
    );
  }
}`,
);
