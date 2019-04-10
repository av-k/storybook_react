import React, { Component } from 'react';
import { Badge } from 'antd';
import 'antd/lib/badge/style';
import { withOptions } from '../../../../common/withOptions';
import * as AllProps from './_DATA';

class Basic extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Basic</h3>
        <div>
          <Badge className="badge" count={5}>
            <a href="#" className="head-example" />
          </Badge>
        </div>
      </section>
    );
  }
}

export default withOptions(
  Basic,
  AllProps,
  `import React, { Component } from 'react';
import { Badge } from 'antd';
import 'antd/lib/badge/style';

class Basic extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Basic</h3>
        <div>
          <Badge className="badge" count={5}>
            <a href="#" className="head-example" />
          </Badge>
        </div>
      </section>
    );
  }
}`,
);
