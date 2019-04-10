import React, { Component } from 'react';
import { Card, Icon, Avatar } from 'antd';
import 'antd/lib/card/style';
import 'antd/lib/icon/style';
import 'antd/lib/avatar/style';
import { withOptions } from '../../../../common/withOptions';
import * as AllProps from './_DATA';
import { action } from '@storybook/addon-actions';

const { Meta } = Card;

class Config extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Support more content configuration</h3>
        <Card
          style={{ width: 300 }}
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
          actions={[
            <Icon type="setting" onClick={action('Settings')} />,
            <Icon type="edit" onClick={action('Edit')} />,
            <Icon type="ellipsis" onClick={action('More')} />,
          ]}
        >
          <Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title="Card title"
            description="This is the description"
          />
        </Card>
      </section>
    );
  }
}

export default withOptions(
  Config,
  AllProps,
  `import React, { Component } from 'react';
import { Card, Icon, Avatar } from 'antd';
import 'antd/lib/card/style';
import 'antd/lib/icon/style';
import 'antd/lib/avatar/style';

const { Meta } = Card;

class Config extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Support more content configuration</h3>
        <Card
          style={{ width: 300 }}
          cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
          actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}>
          <Meta
            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
            title="Card title"
            description="This is the description"
          />
        </Card>
      </section>
    );
  }
}`,
);
