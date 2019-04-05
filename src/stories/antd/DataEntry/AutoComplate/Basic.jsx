import React, { Component } from 'react';
import { AutoComplete } from 'antd';
import 'antd/lib/auto-complete/style';
import injectInfoWithSourceCode from '../../../../common/injectInfoWithSourceCode';
import { AutoCompleteProps } from '../../../../common/propsCollection';
import { action } from '@storybook/addon-actions';

const { dataSource, onSearch, onSelect, placeholder } = AutoCompleteProps;

class Basic extends Component {
  state = {
    dataSource: [],
  };

  render() {
    return (
      <>
        <section className="example">
          <h3 className="ex-title">Basic Usage</h3>
          <AutoComplete
            dataSource={this.state.dataSource}
            style={{ width: 200 }}
            onSearch={this.handleSearch}
            placeholder="input here"
            onSelect={action('Value Selected')}
          />
        </section>
      </>
    );
  }

  handleSearch = value => {
    this.setState({
      dataSource: !value ? [] : [value, value + value, value + value + value],
    });
  };
}

export default injectInfoWithSourceCode(
  Basic,
  { dataSource, onSearch, onSelect, placeholder },
  () => `import { AutoComplete } from 'antd';
import 'antd/lib/auto-complete/style';

  class Basic extends Component {
	state = {
	  dataSource: [],
	};
  
	render() {
	  return (
		<>
		  <section className="example">
			<h3 className="ex-title">Basic Usage</h3>
			<AutoComplete
			  dataSource={this.state.dataSource}
			  style={{ width: 200 }}
			  onSearch={this.handleSearch}
			  placeholder="input here"
			/>
		  </section>
		</>
	  );
	}
  
	handleSearch = value => {
	  this.setState({
		dataSource: !value ? [] : [value, value + value, value + value + value],
	  });
	};
  }`,
);
