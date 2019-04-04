import React, { Component } from 'react';
import { Checkbox } from 'antd';
import withInfo from '../../../../common/withInfo';

const props = {
  defaultChecked: 'boolean',
  disable: 'boolean',
};
class Disabled extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Disabled Checkbox</h3>
        <Checkbox defaultChecked={false} disabled>
          Disabled
        </Checkbox>
        <Checkbox className="ml20" defaultChecked disabled>
          Disabled
        </Checkbox>
      </section>
    );
  }
}

export default withInfo(Disabled, props);
