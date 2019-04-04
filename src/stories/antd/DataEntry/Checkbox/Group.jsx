import React, { Component } from 'react';
import { Checkbox } from 'antd';
import withInfo from '../../../../common/withInfo';

const props = {
  options: '{}[]',
  disabled: 'boolean',
  defaultValue: 'string[]',
};
class Group extends Component {
  render() {
    const CheckboxGroup = Checkbox.Group;

    const plainOptions = ['Apple', 'Pear', 'Orange'];

    const options = [
      { label: 'Apple', value: 'Apple' },
      { label: 'Pear', value: 'Pear' },
      { label: 'Orange', value: 'Orange' },
    ];

    const optionsWithDisabled = [
      { label: 'Apple', value: 'Apple' },
      { label: 'Pear', value: 'Pear' },
      { label: 'Orange', value: 'Orange', disabled: false },
    ];

    return (
      <section className="example">
        <h3 className="ex-title">Checkbox Group</h3>

        <CheckboxGroup options={plainOptions} defaultValue={['Apple']} />
        <br />
        <br />
        <CheckboxGroup options={options} defaultValue={['Pear']} />
        <br />
        <br />
        <CheckboxGroup
          options={optionsWithDisabled}
          disabled
          defaultValue={['Apple']}
        />
      </section>
    );
  }
}

export default withInfo(Group, props);
