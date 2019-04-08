import React, { Component } from 'react';
import { Switch } from 'antd';
import 'antd/lib/switch/style';
import { withOptions } from '../../../../common/withOptions'
import * as AllProps from './_DATA'

class Loading extends Component {
	render() {
		return (
			<section className="example">
				<h3 className="ex-title">Loading</h3>
				<div>
					<Switch loading defaultChecked />
					<Switch className="ml20" size="small" loading />
				</div>
			</section>
		);
	}
}

export default withOptions(Loading, AllProps, `import React, { Component } from 'react';
import { Switch } from 'antd';
import 'antd/lib/switch/style';

class Loading extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Loading</h3>
        <div>
          <Switch loading defaultChecked />
          <Switch className="ml20" size="small" loading />
        </div>
      </section>
    );
  }
}`);
