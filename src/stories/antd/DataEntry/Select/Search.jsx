import React, { Component } from 'react';
import { Select } from 'antd';
import 'antd/lib/select/style';
import { withOptions } from '../../../../common/withOptions'
import * as AllProps from './_DATA'

const Option = Select.Option;

class Search extends Component {
	render() {
		return (
			<section className="example">
				<h3 className="ex-title">Select with search field</h3>

				<Select
					showSearch
					style={{ width: 200 }}
					placeholder="Select a person"
					optionFilterProp="children"
					filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
				>
					<Option value="jack">Jack</Option>
					<Option value="lucy">Lucy</Option>
					<Option value="tom">Tom</Option>
				</Select>
			</section>
		);
	}
}

export default withOptions(Search, AllProps, `import React, { Component } from 'react';
import { Select } from 'antd';
import 'antd/lib/select/style';


const Option = Select.Option;

class Search extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Select with search field</h3>

        <Select
          showSearch
          style={{ width: 200 }}
          placeholder="Select a person"
          optionFilterProp="children"
          filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
        >
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="tom">Tom</Option>
        </Select>
      </section>
    );
  }
}`);
