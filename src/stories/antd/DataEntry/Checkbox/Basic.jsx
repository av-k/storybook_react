import React, { Component } from 'react';
import { Checkbox } from 'antd';
import { withOptions } from '../../../../common/withOptions';
import { CheckBoxProps } from './_DATA';
import { action } from '@storybook/addon-actions';

class Basic extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Basic</h3>
        <Checkbox onChange={e => action('Checked')(e.target.checked)}>
          Checkbox
        </Checkbox>
      </section>
    );
  }
}

export default withOptions(
  Basic,
  { CheckBoxProps },
  `import React, { Component } from 'react';
import { Checkbox } from 'antd';

class Basic extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Basic</h3>
        <Checkbox>Checkbox</Checkbox>
      </section>
    );
  }
}`,
);
