import React, { Component } from 'react';
import { AutoComplete } from 'antd';
import injectInfoWithSourceCode from '../../../../common/injectInfoWithSourceCode';
import { AutoCompleteProps } from '../../../../common/propsCollection';

const { onSearch, placeholder } = AutoCompleteProps;

class Custom extends Component {
  state = {
    result: [],
  };

  handleSearch = value => {
    let result;
    if (!value || value.indexOf('@') >= 0) {
      result = [];
    } else {
      result = ['gmail.com', '163.com', 'qq.com'].map(
        domain => `${value}@${domain}`,
      );
    }
    this.setState({ result });
  };

  render() {
    const Option = AutoComplete.Option;
    const { result } = this.state;
    const children = result.map(email => {
      return <Option key={email}>{email}</Option>;
    });

    return (
      <section className="example">
        <h3 className="ex-title">Customized</h3>

        <AutoComplete
          style={{ width: 200 }}
          onSearch={this.handleSearch}
          placeholder="input here"
        >
          {children}
        </AutoComplete>
      </section>
    );
  }
}

export default injectInfoWithSourceCode(
  Custom,
  { onSearch, placeholder },
  () => `import { AutoComplete } from 'antd';

class Custom extends Component {
  state = {
    result: [],
  };

  handleSearch = value => {
	let result;
	if (!value || value.indexOf('@') >= 0) {
	  result = [];
	} else {
	  result = ['gmail.com', '163.com', 'qq.com'].map(
		domain => $'{value}@'$'{domain}',
	  );
	}
	this.setState({ result });
  };
  
  render() {
    const Option = AutoComplete.Option;
    const { result } = this.state;
    const children = result.map(email => {
      return <Option key={email}>{email}</Option>;
    });

    return (
      <section className="example">
        <h3 className="ex-title">Customized</h3>

        <AutoComplete
          style={{ width: 200 }}
          onSearch={this.handleSearch}
          placeholder="input here"
        >
          {children}
        </AutoComplete>
      </section>
    );
  }

}`,
);
