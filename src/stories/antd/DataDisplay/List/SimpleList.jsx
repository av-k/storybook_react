import React, { Component } from 'react';
import { List } from 'antd';
import 'antd/lib/list/style';
import { withOptions } from '../../../../common/withOptions';
import * as AllProps from './_DATA';

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

class SimpleList extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Simple List</h3>
        <div>
          <h3 style={{ marginBottom: 16 }}>Default Size</h3>
          <List
            header={<div>Header</div>}
            footer={<div>Footer</div>}
            bordered
            dataSource={data}
            renderItem={item => <List.Item>{item}</List.Item>}
          />
          <h3 style={{ margin: '16px 0' }}>Small Size</h3>
          <List
            size="small"
            header={<div>Header</div>}
            footer={<div>Footer</div>}
            bordered
            dataSource={data}
            renderItem={item => <List.Item>{item}</List.Item>}
          />
          <h3 style={{ margin: '16px 0' }}>Large Size</h3>
          <List
            size="large"
            header={<div>Header</div>}
            footer={<div>Footer</div>}
            bordered
            dataSource={data}
            renderItem={item => <List.Item>{item}</List.Item>}
          />
        </div>
      </section>
    );
  }
}

export default withOptions(
  SimpleList,
  AllProps,
  `import React, { Component } from 'react';
import { List } from 'antd';
import 'antd/lib/list/style';

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

class SimpleList extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Simple List</h3>
        <div>
          <h3 style={{ marginBottom: 16 }}>Default Size</h3>
          <List
            header={<div>Header</div>}
            footer={<div>Footer</div>}
            bordered
            dataSource={data}
            renderItem={item => (<List.Item>{item}</List.Item>)}
          />
          <h3 style={{ margin: '16px 0' }}>Small Size</h3>
          <List
            size="small"
            header={<div>Header</div>}
            footer={<div>Footer</div>}
            bordered
            dataSource={data}
            renderItem={item => (<List.Item>{item}</List.Item>)}
          />
          <h3 style={{ margin: '16px 0' }}>Large Size</h3>
          <List
            size="large"
            header={<div>Header</div>}
            footer={<div>Footer</div>}
            bordered
            dataSource={data}
            renderItem={item => (<List.Item>{item}</List.Item>)}
          />
        </div>
      </section>
    );
  }
}`,
);
