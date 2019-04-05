import React, { Component } from 'react';
import { Checkbox } from 'antd';
import injectInfoWithSourceCode from '../../../../common/injectInfoWithSourceCode';
import { CheckBoxProps } from '../../../../common/propsCollection';

const { onChange } = CheckBoxProps;

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

export default injectInfoWithSourceCode(
  Basic,
  { onChange },
  () => `import { Checkbox } from 'antd';

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
