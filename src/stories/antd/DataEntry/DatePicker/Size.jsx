import React, { Component } from 'react';
import { DatePicker, Radio } from 'antd';
import 'antd/lib/date-picker/style';
import 'antd/lib/radio/style';
import { withOptions } from '../../../../common/withOptions';
import * as AllProps from './_DATA';

class Size extends Component {
	state = {
		size: 'default',
	};

	render() {
		const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
		const { size } = this.state;

		return (
			<section className="example">
				<h3 className="ex-title">Three Sizes</h3>
				<Radio.Group value={size} onChange={this.handleSizeChange}>
					<Radio.Button value="large">Large</Radio.Button>
					<Radio.Button value="default">Default</Radio.Button>
					<Radio.Button value="small">Small</Radio.Button>
				</Radio.Group>
				<br />
				<br />
				<DatePicker size={size} />
				<br />
				<br />
				<MonthPicker size={size} placeholder="Select Month" />
				<br />
				<br />
				<RangePicker size={size} />
				<br />
				<br />
				<WeekPicker size={size} placeholder="Select Week" />
			</section>
		);
	}

	handleSizeChange = e => this.setState({ size: e.target.value });
}

export default withOptions(
	Size,
	AllProps,
	`import React, { Component } from 'react';
import { DatePicker, Radio } from 'antd';
import 'antd/lib/date-picker/style';
import 'antd/lib/radio/style';

class Size extends Component {
	state = {
		size: 'default',
	};

	render() {
		const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
		const { size } = this.state;

		return (
			<section className="example">
				<h3 className="ex-title">Three Sizes</h3>
				<Radio.Group value={size} onChange={this.handleSizeChange}>
					<Radio.Button value="large">Large</Radio.Button>
					<Radio.Button value="default">Default</Radio.Button>
					<Radio.Button value="small">Small</Radio.Button>
				</Radio.Group>
				<br />
				<br />
				<DatePicker size={size} />
				<br />
				<br />
				<MonthPicker size={size} placeholder="Select Month" />
				<br />
				<br />
				<RangePicker size={size} />
				<br />
				<br />
				<WeekPicker size={size} placeholder="Select Week" />
			</section>
		);
	}

	handleSizeChange = e => this.setState({ size: e.target.value });
}`,
);
