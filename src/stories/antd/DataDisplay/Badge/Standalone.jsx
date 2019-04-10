import React, { Component } from 'react';
import { Badge } from 'antd';
import 'antd/lib/badge/style';
import { withOptions } from '../../../../common/withOptions';
import * as AllProps from './_DATA';

class Standalone extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Standalone</h3>
        <div>
          <Badge count={25} />
          <Badge
            className="ml20"
            count={4}
            style={{
              backgroundColor: '#fff',
              color: '#999',
              boxShadow: '0 0 0 1px #d9d9d9 inset',
            }}
          />
          <Badge
            className="ml20"
            count={109}
            style={{ backgroundColor: '#52c41a' }}
          />
        </div>
      </section>
    );
  }
}

export default withOptions(
  Standalone,
  AllProps,
  `import React, { Component } from 'react';
import { Badge } from 'antd';
import 'antd/lib/badge/style';

class Standalone extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Standalone</h3>
        <div>
          <Badge count={25} />
          <Badge className="ml20" count={4} style={{ backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset' }} />
          <Badge className="ml20" count={109} style={{ backgroundColor: '#52c41a' }} />
        </div>
      </section>
    );
  }
}`,
);
