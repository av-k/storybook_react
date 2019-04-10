import React, { Component } from 'react';
import { Button, notification } from 'antd';
import 'antd/lib/button/style';
import 'antd/lib/notification/style';
import { withOptions } from '../../../../common/withOptions';
import * as AllProps from './_DATA';

class Icon extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Notification with icon</h3>
        <div>
          <Button onClick={() => this.openNotificationWithIcon('success')}>
            Success
          </Button>
          <Button
            className="ml20"
            onClick={() => this.openNotificationWithIcon('info')}
          >
            Info
          </Button>
          <Button
            className="ml20"
            onClick={() => this.openNotificationWithIcon('warning')}
          >
            Warning
          </Button>
          <Button
            className="ml20"
            onClick={() => this.openNotificationWithIcon('error')}
          >
            Error
          </Button>
        </div>
      </section>
    );
  }

  openNotificationWithIcon = type => {
    notification[type]({
      message: 'Notification Title',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    });
  };
}

export default withOptions(
  Icon,
  AllProps,
  `import React, { Component } from 'react';
import { Button, notification } from 'antd';
import 'antd/lib/button/style';
import 'antd/lib/notification/style';

class Icon extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Notification with icon</h3>
        <div>
          <Button onClick={() => this.openNotificationWithIcon('success')}>Success</Button>
          <Button className="ml20" onClick={() => this.openNotificationWithIcon('info')}>Info</Button>
          <Button className="ml20" onClick={() => this.openNotificationWithIcon('warning')}>Warning</Button>
          <Button className="ml20" onClick={() => this.openNotificationWithIcon('error')}>Error</Button>
        </div>
      </section>
    );
  }

  openNotificationWithIcon = (type) => {
    notification[type]({
      message: 'Notification Title',
      description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    });
  };
}`,
);
