import React, { Component } from 'react';
import { Checkbox } from 'antd';
import injectInfoWithSourceCode from '../../../../common/injectInfoWithSourceCode';
import { defaultChecked, disabled } from '../../../../common/propsCollection';

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

export default injectInfoWithSourceCode(
  Disabled,
  { defaultChecked, disabled },
  () => `import { Checkbox } from 'antd';

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
}`,
);
