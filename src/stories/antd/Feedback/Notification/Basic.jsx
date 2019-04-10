import React, { Component } from 'react';
import { Button, notification } from 'antd';
import 'antd/lib/button/style';
import 'antd/lib/notification/style';
import { withOptions } from '../../../../common/withOptions';
import * as AllProps from './_DATA';

class Basic extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Basic</h3>
        <Button type="primary" onClick={this.openNotification}>
          Open the notification box
        </Button>
      </section>
    );
  }

  openNotification = () => {
    notification.open({
      message: 'Notification Title',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    });
  };
}

export default withOptions(
  Basic,
  AllProps,
  `import React, { Component } from 'react';
import { Button, notification } from 'antd';
import 'antd/lib/button/style';
import 'antd/lib/notification/style';

class Basic extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Basic</h3>
        <Button type="primary" onClick={this.openNotification}>Open the notification box</Button>
      </section>
    );
  }

  openNotification = () => {
    notification.open({
      message: 'Notification Title',
      description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    });
  };
}`,
);
