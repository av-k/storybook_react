import React, { Component } from 'react';
import { Rate } from 'antd';
import 'antd/lib/rate/style';
import { withOptions } from '../../../../common/withOptions'
import * as AllProps from './_DATA'

class Copywriting extends Component {
	state = {
		value: 3,
	};

	render() {
		const { value } = this.state;
		return (
			<section className="example">
				<h3 className="ex-title">Show copywriting</h3>
				<Rate onChange={this.handleChange} value={value} />
				{value && <span className="ant-rate-text">{value} stars</span>}
			</section>
		);
	}

	handleChange = (value) => {
		this.setState({ value });
	}
}

export default withOptions(Copywriting, AllProps, `import React, { Component } from 'react';
import { Rate } from 'antd';
import 'antd/lib/rate/style';

class Copywriting extends Component {
  state = {
    value: 3,
  };

  render() {
    const { value } = this.state;
    return (
      <section className="example">
        <h3 className="ex-title">Show copywriting</h3>
        <Rate onChange={this.handleChange} value={value} />
        {value && <span className="ant-rate-text">{value} stars</span>}
      </section>
    );
  }

  handleChange = (value) => {
    this.setState({ value });
  }
}`);
