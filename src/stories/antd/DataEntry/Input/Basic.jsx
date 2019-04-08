import React, { Component } from 'react';
import { Input } from 'antd';
import 'antd/lib/input/style';
import { withOptions } from '../../../../common/withOptions'
import * as AllProps from './_DATA'

class Basic extends Component {
	state = {};

	render() {
		return (
			<section className="example">
				<h3 className="ex-title">Basic usage</h3>
				<Input style={{ width: '200px' }} placeholder="Basic usage" />
			</section>
		);
	}
}

export default withOptions(Basic, AllProps, `import React, { Component } from 'react';
import { Input } from 'antd';
import 'antd/lib/input/style';

class Basic extends Component {
  state = {};

  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Basic usage</h3>
        <Input style={{width: '200px'}} placeholder="Basic usage" />
      </section>
    );
  }
}`);
