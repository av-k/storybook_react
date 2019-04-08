import React, { Component } from 'react';
import { AutoComplete } from 'antd';
import 'antd/lib/auto-complete/style';
import { withOptions } from '../../../../common/withOptions';
import { CommonProps } from './_DATA';
import { action } from '@storybook/addon-actions';

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

export default withOptions(
  Basic,
  { CommonProps },
  `import React, { Component } from 'react';
import { AutoComplete } from 'antd';
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
