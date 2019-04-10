import React, { Component } from 'react';
import { Button, notification } from 'antd';
import 'antd/lib/button/style';
import 'antd/lib/notification/style';
import { withOptions } from '../../../../common/withOptions';
import * as AllProps from './_DATA';

class Never extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">
          Duration after which the notification box is closed
        </h3>
        <Button type="primary" onClick={this.openNotification}>
          Open the notification box
        </Button>
      </section>
    );
  }

  openNotification = () => {
    const args = {
      message: 'Notification Title',
      description:
        'I will never close automatically. I will be close automatically. I will never close automatically.',
      duration: 0,
    };
    notification.open(args);
  };
}

export default withOptions(
  Never,
  AllProps,
  `import React, { Component } from 'react';
import { Button, notification } from 'antd';
import 'antd/lib/button/style';
import 'antd/lib/notification/style';

class Never extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Duration after which the notification box is closed</h3>
        <Button type="primary" onClick={this.openNotification}>Open the notification box</Button>
      </section>
    );
  }

  openNotification = () => {
    const args = {
      message: 'Notification Title',
      description: 'I will never close automatically. I will be close automatically. I will never close automatically.',
      duration: 0,
    };
    notification.open(args);
  };
}`,
);
