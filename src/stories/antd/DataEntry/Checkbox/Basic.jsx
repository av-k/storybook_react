import React, { Component } from 'react';
import { Checkbox } from 'antd';
import { withOptions } from '../../../../common/withOptions';
import { CheckBoxProps } from './_DATA';

class Basic extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Basic</h3>
        <Checkbox>Checkbox</Checkbox>
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
