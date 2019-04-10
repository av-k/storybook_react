import React, { Component } from 'react';
import { Switch } from 'antd';
import 'antd/lib/switch/style';
import { withOptions } from '../../../../common/withOptions';
import * as AllProps from './_DATA';
import { action } from '@storybook/addon-actions';

class Size extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Two sizes</h3>
        <div>
          <Switch defaultChecked onChange={e => action('Value Big')(e)} />
          <Switch
            className="ml20"
            size="small"
            defaultChecked
            onChange={e => action('Value small')(e)}
          />
        </div>
      </section>
    );
  }
}

export default withOptions(
  Size,
  AllProps,
  `import React, { Component } from 'react';
import { Switch } from 'antd';
import 'antd/lib/switch/style';

class Size extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Two sizes</h3>
        <div>
          <Switch defaultChecked />
          <Switch className="ml20" size="small" defaultChecked />
        </div>
      </section>
    );
  }
}`,
);
