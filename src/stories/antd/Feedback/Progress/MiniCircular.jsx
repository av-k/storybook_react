import React, { Component } from 'react';
import { Progress } from 'antd';
import 'antd/lib/progress/style';
import { withOptions } from '../../../../common/withOptions';
import * as AllProps from './_DATA';

class MiniCircular extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Mini size circular progress bar</h3>
        <Progress type="circle" percent={30} width={80} />
        <Progress
          className="ml20"
          type="circle"
          percent={70}
          width={80}
          status="exception"
        />
        <Progress className="ml20" type="circle" percent={100} width={80} />
      </section>
    );
  }
}

export default withOptions(
  MiniCircular,
  AllProps,
  `import React, { Component } from 'react';
import { Progress } from 'antd';
import 'antd/lib/progress/style';

class MiniCircular extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Mini size circular progress bar</h3>
        <Progress type="circle" percent={30} width={80} />
        <Progress className="ml20" type="circle" percent={70} width={80} status="exception" />
        <Progress className="ml20" type="circle" percent={100} width={80} />
      </section>
    );
  }
}`,
);
