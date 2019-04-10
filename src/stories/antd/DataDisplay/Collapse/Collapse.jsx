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

class CollapseBasic extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Collapse</h3>
        <Collapse
          defaultActiveKey={['1']}
          onChange={e => action('Revealed Items')(e)}
        >
          <Panel header="This is panel header 1" key="1">
            <p>{text}</p>
          </Panel>
          <Panel header="This is panel header 2" key="2">
            <p>{text}</p>
          </Panel>
          <Panel header="This is panel header 3" key="3" disabled>
            <p>{text}</p>
          </Panel>
        </Collapse>
      </section>
    );
  }
}

export default withOptions(
  CollapseBasic,
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

class CollapseBasic extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Collapse</h3>
        <Collapse defaultActiveKey={['1']}>
          <Panel header="This is panel header 1" key="1">
            <p>{text}</p>
          </Panel>
          <Panel header="This is panel header 2" key="2">
            <p>{text}</p>
          </Panel>
          <Panel header="This is panel header 3" key="3" disabled>
            <p>{text}</p>
          </Panel>
        </Collapse>
      </section>
    );
  }
}`,
);
