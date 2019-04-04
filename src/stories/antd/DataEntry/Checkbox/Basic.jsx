import React, { Component } from 'react';
import { Checkbox } from 'antd';
import withInfo from '../../../../common/withInfo';

const props = {
  onChange: 'boolean',
};
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

export default withInfo(Basic, props);
