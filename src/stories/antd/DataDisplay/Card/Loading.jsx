import React, { Component } from 'react';
import { Card } from 'antd';
import 'antd/lib/card/style';
import { withOptions } from '../../../../common/withOptions';
import * as AllProps from './_DATA';

class Loading extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Loading card</h3>
        <Card loading title="Card title" style={{ width: '34%' }}>
          Whatever content
        </Card>
      </section>
    );
  }
}

export default withOptions(
  Loading,
  AllProps,
  `import React, { Component } from 'react';
import { Card } from 'antd';
import 'antd/lib/card/style';

class Loading extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Loading card</h3>
        <Card loading title="Card title" style={{ width: '34%' }}>
          Whatever content
        </Card>
      </section>
    );
  }
}
`,
);
