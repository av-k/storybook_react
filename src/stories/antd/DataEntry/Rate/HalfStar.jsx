import React, { Component } from 'react';
import { Rate } from 'antd';
import 'antd/lib/rate/style';
import { withOptions } from '../../../../common/withOptions'
import * as AllProps from './_DATA'

class HalfStar extends Component {
	render() {
		return (
			<section className="example">
				<h3 className="ex-title">Half Star</h3>
				<Rate allowHalf defaultValue={2.5} />
			</section>
		);
	}
}

export default withOptions(HalfStar, AllProps, `import React, { Component } from 'react';
import { Rate } from 'antd';
import 'antd/lib/rate/style';

class HalfStar extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Half Star</h3>
        <Rate allowHalf defaultValue={2.5} />
      </section>
    );
  }
}`);
