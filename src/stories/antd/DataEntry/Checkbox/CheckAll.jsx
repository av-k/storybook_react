import React, { Component } from 'react';
import { Checkbox } from 'antd';
import withInfo from '../../../../common/withInfo';

const props = {
  indeterminate: 'boolean',
  onChange: 'function',
  checked: 'boolean',
  options: '{}',
  checkedList: 'string[]',
};

const defaultCheckedList = ['Apple', 'Orange'];
const CheckboxGroup = Checkbox.Group;
const plainOptions = ['Apple', 'Pear', 'Orange'];

class CheckAll extends Component {
  state = {
    checkedList: defaultCheckedList,
    indeterminate: true,
    checkAll: false,
  };

  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Check All</h3>

        <div style={{ borderBottom: '1px solid #E9E9E9' }}>
          <Checkbox
            indeterminate={this.state.indeterminate}
            onChange={this.onCheckAllChange}
            checked={this.state.checkAll}
          >
            Check all
          </Checkbox>
        </div>
        <br />
        <CheckboxGroup
          options={plainOptions}
          value={this.state.checkedList}
          onChange={this.onChange}
        />
      </section>
    );
  }

  onChange = checkedList =>
    this.setState({
      checkedList,
      indeterminate:
        !!checkedList.length && checkedList.length < plainOptions.length,
      checkAll: checkedList.length === plainOptions.length,
    });

  onCheckAllChange = e =>
    this.setState({
      checkedList: e.target.checked ? plainOptions : [],
      indeterminate: false,
      checkAll: e.target.checked,
    });
}

export default withInfo(CheckAll, props);
