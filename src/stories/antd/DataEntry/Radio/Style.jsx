import React, { Component } from 'react';
import { Radio } from 'antd';
import 'antd/lib/radio/style';
import { withOptions } from '../../../../common/withOptions'
import * as AllProps from './_DATA'

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

class Style extends Component {
	render() {
		return (
			<section className="example">
				<h3 className="ex-title">Radio Style</h3>
				<div>
					<RadioGroup defaultValue="a">
						<RadioButton value="a">Hangzhou</RadioButton>
						<RadioButton value="b">Shanghai</RadioButton>
						<RadioButton value="c">Beijing</RadioButton>
						<RadioButton value="d">Chengdu</RadioButton>
					</RadioGroup>
				</div>
				<div style={{ marginTop: 16 }}>
					<RadioGroup defaultValue="a">
						<RadioButton value="a">Hangzhou</RadioButton>
						<RadioButton value="b" disabled>Shanghai</RadioButton>
						<RadioButton value="c">Beijing</RadioButton>
						<RadioButton value="d">Chengdu</RadioButton>
					</RadioGroup>
				</div>
				<div style={{ marginTop: 16 }}>
					<RadioGroup disabled defaultValue="a">
						<RadioButton value="a">Hangzhou</RadioButton>
						<RadioButton value="b">Shanghai</RadioButton>
						<RadioButton value="c">Beijing</RadioButton>
						<RadioButton value="d">Chengdu</RadioButton>
					</RadioGroup>
				</div>
			</section>
		);
	}
}

export default withOptions(Style, AllProps, `import React, { Component } from 'react';
import { Radio } from 'antd';
import 'antd/lib/radio/style';

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

class Style extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Radio Style</h3>
        <div>
          <RadioGroup defaultValue="a">
            <RadioButton value="a">Hangzhou</RadioButton>
            <RadioButton value="b">Shanghai</RadioButton>
            <RadioButton value="c">Beijing</RadioButton>
            <RadioButton value="d">Chengdu</RadioButton>
          </RadioGroup>
        </div>
        <div style={{ marginTop: 16 }}>
          <RadioGroup defaultValue="a">
            <RadioButton value="a">Hangzhou</RadioButton>
            <RadioButton value="b" disabled>Shanghai</RadioButton>
            <RadioButton value="c">Beijing</RadioButton>
            <RadioButton value="d">Chengdu</RadioButton>
          </RadioGroup>
        </div>
        <div style={{ marginTop: 16 }}>
          <RadioGroup disabled defaultValue="a">
            <RadioButton value="a">Hangzhou</RadioButton>
            <RadioButton value="b">Shanghai</RadioButton>
            <RadioButton value="c">Beijing</RadioButton>
            <RadioButton value="d">Chengdu</RadioButton>
          </RadioGroup>
        </div>
      </section>
    );
  }
}`);
