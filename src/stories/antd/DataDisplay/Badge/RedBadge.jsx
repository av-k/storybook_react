import React, { Component } from 'react';
import { Badge, Icon } from 'antd';
import 'antd/lib/badge/style';
import 'antd/lib/icon/style';
import { withOptions } from '../../../../common/withOptions';
import * as AllProps from './_DATA';

class RedBadge extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Red Badge</h3>
        <div>
          <Badge dot>
            <Icon type="notification" />
          </Badge>
          <Badge className="ml20" dot>
            <a href="#">Link something</a>
          </Badge>
        </div>
      </section>
    );
  }
}

export default withOptions(
  RedBadge,
  AllProps,
  `import React, { Component } from 'react';
import { Badge, Icon } from 'antd';
import 'antd/lib/badge/style';
import 'antd/lib/icon/style';

class RedBadge extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Red Badge</h3>
        <div>
          <Badge dot>
            <Icon type="notification" />
          </Badge>
          <Badge className="ml20" dot>
            <a href="#">Link something</a>
          </Badge>
        </div>
      </section>
    );
  }
}`,
);
