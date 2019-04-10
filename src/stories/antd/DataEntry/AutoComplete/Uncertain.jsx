import React, { Component } from 'react';
import { Icon, Button, Input, AutoComplete } from 'antd';
import { withOptions } from '../../../../common/withOptions';
import * as AllProps from './_DATA';
import { action } from '@storybook/addon-actions';

const Option = AutoComplete.Option;

function getRandomInt(max, min = 0) {
  return Math.floor(Math.random() * (max - min + 1)) + min; // eslint-disable-line no-mixed-operators
}

function searchResult(query) {
  return new Array(getRandomInt(5))
    .join('.')
    .split('.')
    .map((item, idx) => ({
      query,
      category: `${query}${idx}`,
      count: getRandomInt(200, 100),
    }));
}

function renderOption(item) {
  return (
    <Option key={item.category} text={item.category}>
      {item.query} 在
      <a
        href={`https://s.taobao.com/search?q=${item.query}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {item.category}
      </a>
      区块中
      <span className="global-search-item-count">约 {item.count} 个结果</span>
    </Option>
  );
}

class Uncertain extends Component {
  state = {
    dataSource: [],
  };

  handleSearch = value => {
    this.setState({
      dataSource: value ? searchResult(value) : [],
    });
  };

  render() {
    const { dataSource } = this.state;
    return (
      <section className="example">
        <h3 className="ex-title">Lookup-Patterns - Uncertain Category</h3>

        <div className="global-search-wrapper">
          <AutoComplete
            className="global-search"
            size="large"
            style={{ width: '100%' }}
            dataSource={dataSource.map(renderOption)}
            onSearch={this.handleSearch}
            placeholder="input here"
            optionLabelProp="text"
            onSelect={action('Selected')}
          >
            <Input
              suffix={
                <Button className="search-btn" size="large" type="primary">
                  <Icon type="search" />
                </Button>
              }
            />
          </AutoComplete>
        </div>
      </section>
    );
  }
}

export default withOptions(
  Uncertain,
  AllProps,
  `import React, { Component } from 'react';
import { Icon, Button, Input, AutoComplete } from 'antd';

const Option = AutoComplete.Option;

function getRandomInt(max, min = 0) {
  return Math.floor(Math.random() * (max - min + 1)) + min; // eslint-disable-line no-mixed-operators
}

function searchResult(query) {
  return new Array(getRandomInt(5))
    .join('.')
    .split('.')
    .map((item, idx) => ({
      query,
      category: \`\${query}\${idx}\`,
      count: getRandomInt(200, 100),
    }));
}

function renderOption(item) {
  return (
    <Option key={item.category} text={item.category}>
      {item.query} 在
      <a
        href={https://s.taobao.com/search?q=\`\${item.query}\`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {item.category}
      </a>
      区块中
      <span className="global-search-item-count">约 {item.count} 个结果</span>
    </Option>
  );
}

class Uncertain extends Component {
  state = {
    dataSource: [],
  };

  handleSearch = value => {
    this.setState({
      dataSource: value ? searchResult(value) : [],
    });
  };

  render() {
    const { dataSource } = this.state;
    return (
      <section className="example">
        <h3 className="ex-title">Lookup-Patterns - Uncertain Category</h3>

        <div className="global-search-wrapper">
          <AutoComplete
            className="global-search"
            size="large"
            style={{ width: '100%' }}
            dataSource={dataSource.map(renderOption)}
            onSearch={this.handleSearch}
            placeholder="input here"
            optionLabelProp="text"
          >
            <Input
              suffix={
                <Button className="search-btn" size="large" type="primary">
                  <Icon type="search" />
                </Button>
              }
            />
          </AutoComplete>
        </div>
      </section>
    );
  }
}`,
);
