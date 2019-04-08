import React, { Component } from 'react';
import { InputNumber } from 'antd';
import 'antd/lib/input-number/style';
import { withOptions } from '../../../../common/withOptions'
import * as AllProps from './_DATA'

class Decimals extends Component {
	render() {
		return (
			<section className="example">
				<h3 className="ex-title">Decimals</h3>
				<InputNumber min={0} max={10} step={0.1} />
			</section>
		);
	}
}

export default withOptions(Decimals, AllProps, `import React, { Component } from 'react';
import { InputNumber } from 'antd';
import 'antd/lib/input-number/style';

class Decimals extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Decimals</h3>
        <InputNumber min={0} max={10} step={0.1} />
      </section>
    );
  }
}`);
