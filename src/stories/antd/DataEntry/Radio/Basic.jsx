import React, { Component } from 'react';
import { Radio } from 'antd';
import 'antd/lib/radio/style';
import { withOptions } from '../../../../common/withOptions';
import { RadioProps } from './_DATA';
import { action } from '@storybook/addon-actions';

class Basic extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Basic</h3>
        <Radio onChange={e => action('Radio')(e.target.checked)}>Radio</Radio>
      </section>
    );
  }
}

export default withOptions(
  Basic,
  { RadioProps },
  `import React, { Component } from 'react';
import { Radio } from 'antd';
import 'antd/lib/radio/style';

class Basic extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Basic</h3>
        <Radio>Radio</Radio>
      </section>
    );
  }
}`,
);
