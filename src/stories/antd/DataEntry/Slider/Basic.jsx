import React, { Component } from 'react';
import { Slider, Switch } from 'antd';
import 'antd/lib/slider/style';
import 'antd/lib/switch/style';
import { withOptions } from '../../../../common/withOptions'
import * as AllProps from './_DATA'

class Basic extends Component {
	state = {
		disabled: false,
	};

	render() {
		const { disabled } = this.state;

		return (
			<section className="example">
				<h3 className="ex-title">Basic</h3>
				<div style={{ width: 1000 }}>
					<Slider defaultValue={30} disabled={disabled} />
					<Slider range defaultValue={[20, 50]} disabled={disabled} />
					Disabled: <Switch size="small" checked={disabled} onChange={this.handleDisabledChange} />
				</div>
			</section>
		);
	}

	handleDisabledChange = (disabled) => {
		this.setState({ disabled });
	};
}

export default withOptions(Basic, AllProps, `import React, { Component } from 'react';
import { Slider, Switch } from 'antd';
import 'antd/lib/slider/style';
import 'antd/lib/switch/style';

class Basic extends Component {
  state = {
    disabled: false,
  };

  render() {
    const { disabled } = this.state;

    return (
      <section className="example">
        <h3 className="ex-title">Basic</h3>
        <div style={{width: 1000}}>
          <Slider defaultValue={30} disabled={disabled} />
          <Slider range defaultValue={[20, 50]} disabled={disabled} />
          Disabled: <Switch size="small" checked={disabled} onChange={this.handleDisabledChange} />
        </div>
      </section>
    );
  }

  handleDisabledChange = (disabled) => {
    this.setState({ disabled });
  };
}`);
