import React, { Component } from 'react';
import { Collapse } from 'antd';
import 'antd/lib/collapse/style';
import { withOptions } from '../../../../common/withOptions';
import * as AllProps from './_DATA';
import { action } from '@storybook/addon-actions';

const Panel = Collapse.Panel;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

class NoArrow extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">No arrow</h3>
        <Collapse
          defaultActiveKey={['1']}
          onChange={e => action('Revealed No Arrow Items')(e)}
        >
          <Panel
            showArrow={false}
            header="This is panel header with arrow icon"
            key="1"
          >
            <p>{text}</p>
          </Panel>
          <Panel
            showArrow={false}
            header="This is panel header with no arrow icon"
            key="2"
          >
            <p>{text}</p>
          </Panel>
        </Collapse>
      </section>
    );
  }
}

export default withOptions(
  NoArrow,
  AllProps,
  `import React, { Component } from 'react';
import { Collapse } from 'antd';
import 'antd/lib/collapse/style';

const Panel = Collapse.Panel;

const text = \`
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
\`;

class NoArrow extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">No arrow</h3>
        <Collapse defaultActiveKey={['1']}>
          <Panel showArrow={false} header="This is panel header with arrow icon" key="1">
            <p>{text}</p>
          </Panel>
          <Panel showArrow={false} header="This is panel header with no arrow icon" key="2">
            <p>{text}</p>
          </Panel>
        </Collapse>
      </section>
    );
  }
}`,
);
