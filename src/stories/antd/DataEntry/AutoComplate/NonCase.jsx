import React, { Component } from 'react';
import { AutoComplete } from 'antd';
import withInfo from '../../../../common/withInfo';

const props = {
  dataSource: 'array[]',
  filterOption: 'function',
  placeholder: 'string',
};
class NonCase extends Component {
  render() {
    const dataSource = ['Burns Bay Road', 'Downing Street', 'Wall Street'];
    return (
      <section className="example">
        <h3 className="ex-title">A non-case-sensitive AutoComplete</h3>

        <AutoComplete
          style={{ width: 200 }}
          dataSource={dataSource}
          placeholder="try to type `b`"
          filterOption={(inputValue, option) =>
            option.props.children
              .toUpperCase()
              .indexOf(inputValue.toUpperCase()) !== -1
          }
        />
      </section>
    );
  }
}

export default withInfo(NonCase, props);
