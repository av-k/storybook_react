import React, { Component } from 'react';
import { withOptions } from '../../../../common/withOptions';
import { Checkbox } from 'antd';
import * as AllProps from './_DATA';
import { action } from '@storybook/addon-actions';

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

        <CheckboxGroup
          options={plainOptions}
          defaultValue={['Apple']}
          onChange={action('Checkbox Group 1')}
        />
        <br />
        <br />
        <CheckboxGroup
          options={options}
          defaultValue={['Pear']}
          onChange={action('Checkbox Group 2')}
        />
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

export default withOptions(
  Group,
  AllProps,
  `import React, { Component } from 'react';
import { Checkbox } from 'antd';

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
}`,
);
