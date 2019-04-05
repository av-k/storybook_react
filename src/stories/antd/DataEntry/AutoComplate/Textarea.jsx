import React, { Component } from 'react';
import { AutoComplete, Input } from 'antd';
import injectInfoWithSourceCode from '../../../../common/injectInfoWithSourceCode';
import {
  onKeyPress,
  onSelect,
  onSearch,
  placeholder,
} from '../../../../common/propsCollection';

class Textarea extends Component {
  state = {
    dataSource: [],
  };

  render() {
    const { TextArea } = Input;
    const { dataSource } = this.state;
    return (
      <section className="example">
        <h3 className="ex-title">Customize Input Component</h3>

        <AutoComplete
          dataSource={dataSource}
          style={{ width: 200 }}
          onSearch={this.handleSearch}
        >
          <TextArea
            placeholder="input here"
            className="custom"
            style={{ height: 50 }}
            onKeyPress={this.handleKeyPress}
          />
        </AutoComplete>
      </section>
    );
  }

  handleSearch = value =>
    this.setState({
      dataSource: !value ? [] : [value, value + value, value + value + value],
    });
}

export default injectInfoWithSourceCode(
  Textarea,
  {
    onKeyPress,
    onSelect,
    onSearch,
    placeholder,
  },
  () => `import { AutoComplete, Input } from 'antd';

class Textarea extends Component {
  state = {
    dataSource: [],
  };

  render() {
    const { TextArea } = Input;
    const { dataSource } = this.state;
    return (
      <section className="example">
        <h3 className="ex-title">Customize Input Component</h3>

        <AutoComplete
          dataSource={dataSource}
          style={{ width: 200 }}
          onSearch={this.handleSearch}
        >
          <TextArea
            placeholder="input here"
            className="custom"
            style={{ height: 50 }}
            onKeyPress={this.handleKeyPress}
          />
        </AutoComplete>
      </section>
    );
  }

  handleSearch = value =>
    this.setState({
      dataSource: !value ? [] : [value, value + value, value + value + value],
    });
}`,
);
