import React, { Component } from 'react';
import { AutoComplete } from 'antd';
import 'antd/lib/auto-complete/style';
import withInfo from '../../../../common/withInfo';
import {
  dataSource,
  onSearch,
  onSelect,
  placeholder,
} from '../../../../common/propsAPI';

class Basic extends Component {
  state = {
    dataSource: [],
  };
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Basic Usage</h3>
        <AutoComplete
          dataSource={this.state.dataSource}
          style={{ width: 200 }}
          onSearch={this.handleSearch}
          placeholder="input here"
        />
      </section>
    );
  }

  handleSearch = value => {
    this.setState({
      dataSource: !value ? [] : [value, value + value, value + value + value],
    });
  };
}

export default withInfo(Basic, { dataSource, onSearch, onSelect, placeholder });
