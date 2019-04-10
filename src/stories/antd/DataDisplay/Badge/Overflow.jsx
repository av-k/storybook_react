import React, { Component } from 'react';
import { Badge } from 'antd';
import 'antd/lib/badge/style';
import { withOptions } from '../../../../common/withOptions';
import * as AllProps from './_DATA';

class Overflow extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Overflow</h3>
        <div>
          <Badge className="badge" count={99}>
            <a href="#" className="head-example" />
          </Badge>
          <Badge className="badge" count={100}>
            <a href="#" className="head-example" />
          </Badge>
          <Badge className="badge" count={99} overflowCount={10}>
            <a href="#" className="head-example" />
          </Badge>
          <Badge className="badge" count={1000} overflowCount={999}>
            <a href="#" className="head-example" />
          </Badge>
        </div>
      </section>
    );
  }
}

export default withOptions(
  Overflow,
  AllProps,
  `import React, { Component } from 'react';
import { Badge } from 'antd';
import 'antd/lib/badge/style';

class Overflow extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Overflow</h3>
        <div>
          <Badge className="badge" count={99}>
            <a href="#" className="head-example" />
          </Badge>
          <Badge className="badge" count={100}>
            <a href="#" className="head-example" />
          </Badge>
          <Badge className="badge" count={99} overflowCount={10}>
            <a href="#" className="head-example" />
          </Badge>
          <Badge className="badge" count={1000} overflowCount={999}>
            <a href="#" className="head-example" />
          </Badge>
        </div>
      </section>
    );
  }
}`,
);
