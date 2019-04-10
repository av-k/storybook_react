import React, { Component } from 'react';
import { Checkbox } from 'antd';
import { withOptions } from '../../../../common/withOptions';
import { CheckBoxProps } from './_DATA';

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

export default withOptions(
  Disabled,
  { CheckBoxProps },
  `import React, { Component } from 'react';
import { Checkbox } from 'antd';

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
