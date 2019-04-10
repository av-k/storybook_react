import React, { Component } from 'react';
import { InputNumber } from 'antd';
import 'antd/lib/input-number/style';
import { withOptions } from '../../../../common/withOptions';
import * as AllProps from './_DATA';
import { action } from '@storybook/addon-actions';

class Formatter extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Formatter</h3>
        <InputNumber
          defaultValue={1000}
          formatter={value =>
            `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
          }
          parser={value => value.replace(/\$\s?|(,*)/g, '')}
          onChange={e => action('Value')(e)}
        />
        <InputNumber
          style={{ marginLeft: '20px' }}
          defaultValue={100}
          min={0}
          max={100}
          formatter={value => `${value}%`}
          parser={value => value.replace('%', '')}
          onChange={e => action('Value')(e)}
        />
      </section>
    );
  }
}

export default withOptions(
  Formatter,
  AllProps,
  `import React, { Component } from 'react';
import { InputNumber } from 'antd';
import 'antd/lib/input-number/style';

class Formatter extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Formatter</h3>
        <InputNumber
          defaultValue={1000}
          formatter={value => \`$ \${value}\`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          parser={value => value.replace(/\$\s?|(,*)/g, '')}
        />
        <InputNumber
          style={{marginLeft: '20px'}}
          defaultValue={100}
          min={0}
          max={100}
          formatter={value => \`\${value}%\`}
          parser={value => value.replace('%', '')}
        />
      </section>
    );
  }
}`,
);
