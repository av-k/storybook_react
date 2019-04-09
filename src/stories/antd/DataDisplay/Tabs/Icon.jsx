import React, { Component } from 'react';
import { Tabs, Icon } from 'antd';
import 'antd/lib/tabs/style';
import 'antd/lib/icon/style';
import { withOptions } from '../../../../common/withOptions';
import * as AllProps from './_DATA';

const TabPane = Tabs.TabPane;

class IconTabs extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Icon</h3>
        <Tabs>
          <TabPane
            tab={
              <span>
                <Icon type="apple" />
                Tab 1
              </span>
            }
            key="1"
          >
            Tab 1
          </TabPane>
          <TabPane
            tab={
              <span>
                <Icon type="android" />
                Tab 2
              </span>
            }
            key="2"
          >
            Tab 2
          </TabPane>
        </Tabs>
      </section>
    );
  }
}

export default withOptions(
  IconTabs,
  AllProps,
  `import React, { Component } from 'react';
import { Tabs, Icon } from 'antd';
import 'antd/lib/tabs/style';
import 'antd/lib/icon/style';

const TabPane = Tabs.TabPane;

class IconTabs extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Icon</h3>
        <Tabs>
          <TabPane tab={<span><Icon type="apple" />Tab 1</span>} key="1">
            Tab 1
          </TabPane>
          <TabPane tab={<span><Icon type="android" />Tab 2</span>} key="2">
            Tab 2
          </TabPane>
        </Tabs>
      </section>
    );
  }
}`,
);
