import React, { Component } from 'react';
import { Switch, Button } from 'antd';
import 'antd/lib/switch/style';
import 'antd/lib/button/style';
import { withOptions } from '../../../../common/withOptions'
import * as AllProps from './_DATA'

class Disabled extends Component {
	state = {
		disabled: true,
	};

	render() {
		return (
			<section className="example">
				<h3 className="ex-title">Disabled</h3>
				<div>
					<Switch disabled={this.state.disabled} defaultChecked />
					<br /><br />
					<Button type="primary" onClick={this.toggle}>Toggle disabled</Button>
				</div>
			</section>
		);
	}

	toggle = () => {
		this.setState({
			disabled: !this.state.disabled,
		});
	}
}

export default withOptions(Disabled, AllProps, `import React, { Component } from 'react';
import { Switch, Button } from 'antd';
import 'antd/lib/switch/style';
import 'antd/lib/button/style';

class Disabled extends Component {
  state = {
    disabled: true,
  };

  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Disabled</h3>
        <div>
          <Switch disabled={this.state.disabled} defaultChecked />
          <br /><br/>
          <Button type="primary" onClick={this.toggle}>Toggle disabled</Button>
        </div>
      </section>
    );
  }

  toggle = () => {
    this.setState({
      disabled: !this.state.disabled,
    });
  }
}`);
