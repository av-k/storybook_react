import React, { Component } from 'react';
import { Radio, Button } from 'antd';
import 'antd/lib/radio/style';
import 'antd/lib/button/style';
import { withOptions } from '../../../../common/withOptions';
import { RadioProps } from './_DATA';
import { action } from '@storybook/addon-actions';

class Disabled extends Component {
  state = {
    disabled: true,
  };

  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Disabled</h3>
        <Radio
          defaultChecked={false}
          disabled={this.state.disabled}
          onChange={e => action('Radio')(e.target.checked)}
        >
          Disabled
        </Radio>
        <br />
        <Radio defaultChecked disabled={this.state.disabled}>
          Disabled
        </Radio>
        <div style={{ marginTop: 20 }}>
          <Button type="primary" onClick={this.toggleDisabled}>
            Toggle disabled
          </Button>
        </div>
      </section>
    );
  }

  toggleDisabled = () => {
    this.setState({
      disabled: !this.state.disabled,
    });
  };
}

export default withOptions(
  Disabled,
  { RadioProps },
  `import React, { Component } from 'react';
import { Radio, Button } from 'antd';
import 'antd/lib/radio/style';
import 'antd/lib/button/style';

class Disabled extends Component {
  state = {
    disabled: true,
  };

  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Disabled</h3>
        <Radio defaultChecked={false} disabled={this.state.disabled}>Disabled</Radio>
        <br />
        <Radio defaultChecked disabled={this.state.disabled}>Disabled</Radio>
        <div style={{ marginTop: 20 }}>
          <Button type="primary" onClick={this.toggleDisabled}>
            Toggle disabled
          </Button>
        </div>
      </section>
    );
  }

  toggleDisabled = () => {
    this.setState({
      disabled: !this.state.disabled,
    });
  }
}`,
);
