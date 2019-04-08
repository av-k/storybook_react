import React, { Component } from 'react';
import { Switch } from 'antd';
import 'antd/lib/switch/style';
import { withOptions } from '../../../../common/withOptions'
import * as AllProps from './_DATA'

class Basic extends Component {
	render() {
		return (
			<section className="example">
				<h3 className="ex-title">Basic</h3>
				<Switch defaultChecked />
			</section>
		);
	}
}

export default withOptions(Basic, AllProps, `import React, { Component } from 'react';
import { Switch } from 'antd';
import 'antd/lib/switch/style';

class Basic extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Basic</h3>
        <Switch defaultChecked />
      </section>
    );
  }
}`);
