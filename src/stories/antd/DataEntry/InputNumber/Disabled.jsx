import React, { Component } from 'react';
import { InputNumber, Button } from 'antd';
import 'antd/lib/input-number/style';
import 'antd/lib/button/style';
import { withOptions } from '../../../../common/withOptions';
import * as AllProps from './_DATA';
import { action } from '@storybook/addon-actions';

class Disabled extends Component {
  state = {
    disabled: true,
  };

  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Disabled</h3>
        <InputNumber
          min={1}
          max={10}
          disabled={this.state.disabled}
          defaultValue={3}
          onChange={e => action('Value')(e)}
        />
        <div style={{ marginTop: 20 }}>
          <Button onClick={this.toggle} type="primary">
            Toggle disabled
          </Button>
        </div>
      </section>
    );
  }

  toggle = () => {
    this.setState({
      disabled: !this.state.disabled,
    });
  };
}

export default withOptions(
  Disabled,
  AllProps,
  `import React, { Component } from 'react';
import { InputNumber, Button } from 'antd';
import 'antd/lib/input-number/style';
import 'antd/lib/button/style';

class Disabled extends Component {
  state = {
    disabled: true,
  };

  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Disabled</h3>
        <InputNumber min={1} max={10} disabled={this.state.disabled} defaultValue={3} />
        <div style={{ marginTop: 20 }}>
          <Button onClick={this.toggle} type="primary">Toggle disabled</Button>
        </div>
      </section>
    );
  }

  toggle = () => {
    this.setState({
      disabled: !this.state.disabled,
    });
  }
}`,
);
