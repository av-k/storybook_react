import React, { Component } from 'react';
import { Collapse } from 'antd';
import 'antd/lib/collapse/style';

const Panel = Collapse.Panel;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

class Nested extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Nested Panel</h3>

        <Collapse>
          <Panel header="This is panel header 1" key="1">
            <Collapse defaultActiveKey="1">
              <Panel header="This is panel nest panel" key="1">
                <p>{text}</p>
              </Panel>
            </Collapse>
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

export default Nested;
