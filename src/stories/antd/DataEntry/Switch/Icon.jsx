import React, { Component } from 'react';
import { Switch, Icon } from 'antd';
import 'antd/lib/switch/style';
import 'antd/lib/icon/style';
import { withOptions } from '../../../../common/withOptions';
import * as AllProps from './_DATA';
import { action } from '@storybook/addon-actions';

class IconSwitch extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Text & icon</h3>
        <div>
          <Switch
            checkedChildren="开"
            unCheckedChildren="关"
            defaultChecked
            onChange={e => action('Value 开/关')(e)}
          />
          <Switch
            className="ml20"
            checkedChildren="1"
            unCheckedChildren="0"
            onChange={e => action('Value 0/1')(e)}
          />
          <Switch
            className="ml20"
            checkedChildren={<Icon type="check" />}
            unCheckedChildren={<Icon type="cross" />}
            defaultChecked
            onChange={e => action('Value ✔️/✖️')(e)}
          />
        </div>
      </section>
    );
  }
}

export default withOptions(
  IconSwitch,
  AllProps,
  `import React, { Component } from 'react';
import { Switch, Icon } from 'antd';
import 'antd/lib/switch/style';
import 'antd/lib/icon/style';

class IconSwitch extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Text & icon</h3>
        <div>
          <Switch checkedChildren="开" unCheckedChildren="关" defaultChecked />
          <Switch className="ml20" checkedChildren="1" unCheckedChildren="0" />
          <Switch className="ml20" checkedChildren={<Icon type="check" />} unCheckedChildren={<Icon type="cross" />} defaultChecked />
        </div>
      </section>
    );
  }
}`,
);
