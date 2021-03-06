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

const customPanelStyle = {
  background: '#f7f7f7',
  borderRadius: 4,
  marginBottom: 24,
  border: 0,
  overflow: 'hidden',
};

class Custom extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Custom Panel</h3>
        <Collapse
          bordered={false}
          defaultActiveKey={['1']}
          onChange={e => action('Revealed Custom Items')(e)}
        >
          <Panel
            header="This is panel header 1"
            key="1"
            style={customPanelStyle}
          >
            <p>{text}</p>
          </Panel>
          <Panel
            header="This is panel header 2"
            key="2"
            style={customPanelStyle}
          >
            <p>{text}</p>
          </Panel>
          <Panel
            header="This is panel header 3"
            key="3"
            style={customPanelStyle}
          >
            <p>{text}</p>
          </Panel>
        </Collapse>
      </section>
    );
  }
}

export default withOptions(
  Custom,
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

const customPanelStyle = {
  background: '#f7f7f7',
  borderRadius: 4,
  marginBottom: 24,
  border: 0,
  overflow: 'hidden',
};

class Custom extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Custom Panel</h3>
        <Collapse bordered={false} defaultActiveKey={['1']}>
          <Panel header="This is panel header 1" key="1" style={customPanelStyle}>
            <p>{text}</p>
          </Panel>
          <Panel header="This is panel header 2" key="2" style={customPanelStyle}>
            <p>{text}</p>
          </Panel>
          <Panel header="This is panel header 3" key="3" style={customPanelStyle}>
            <p>{text}</p>
          </Panel>
        </Collapse>
      </section>
    );
  }
}`,
);
