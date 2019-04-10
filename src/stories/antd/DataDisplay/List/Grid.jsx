import React, { Component } from 'react';
import { List, Card } from 'antd';
import 'antd/lib/list/style';
import 'antd/lib/card/style';
import { withOptions } from '../../../../common/withOptions';
import * as AllProps from './_DATA';

const data = [
  { title: 'Title 1' },
  { title: 'Title 2' },
  { title: 'Title 3' },
  { title: 'Title 4' },
];

class Grid extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Grid</h3>
        <List
          grid={{ gutter: 16, column: 4 }}
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <Card title={item.title}>Card content</Card>
            </List.Item>
          )}
        />
      </section>
    );
  }
}

export default withOptions(
  Grid,
  AllProps,
  `import React, { Component } from 'react';
import { List, Card } from 'antd';
import 'antd/lib/list/style';
import 'antd/lib/card/style';

const data = [
  { title: 'Title 1' },
  { title: 'Title 2' },
  { title: 'Title 3' },
  { title: 'Title 4' }
];

class Grid extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Grid</h3>
        <List
          grid={{ gutter: 16, column: 4 }}
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <Card title={item.title}>Card content</Card>
            </List.Item>
          )}
        />
      </section>
    );
  }
}`,
);
