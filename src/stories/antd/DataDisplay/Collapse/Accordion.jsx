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

class Accordion extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Accordion</h3>
        <Collapse accordion onChange={e => action('Revealed Item #')(e[0])}>
          <Panel header="This is panel header 1" key="1">
            <p>{text}</p>
          </Panel>
          <Panel header="This is panel header 2" key="2">
            <p>{text}</p>
          </Panel>
          <Panel header="This is panel header 3" key="3">
            <p>{text}</p>
          </Panel>
        </Collapse>
      </section>
    );
  }
}

export default withOptions(
  Accordion,
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

class Accordion extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Accordion</h3>
        <Collapse accordion>
          <Panel header="This is panel header 1" key="1">
            <p>{text}</p>
          </Panel>
          <Panel header="This is panel header 2" key="2">
            <p>{text}</p>
          </Panel>
          <Panel header="This is panel header 3" key="3">
            <p>{text}</p>
          </Panel>
        </Collapse>
      </section>
    );
  }
}`,
);
