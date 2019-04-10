import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import 'antd/lib/modal/style';
import 'antd/lib/button/style';
import { withOptions } from '../../../../common/withOptions';
import * as AllProps from './_DATA';

class Info extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Information modal dialog</h3>
        <Button onClick={this.info}>Info</Button>
        <Button className="ml20" onClick={this.success}>
          Success
        </Button>
        <Button className="ml20" onClick={this.error}>
          Error
        </Button>
        <Button className="ml20" onClick={this.warning}>
          Warning
        </Button>
      </section>
    );
  }

  info() {
    Modal.info({
      title: 'This is a notification message',
      content: (
        <div>
          <p>some messages...some messages...</p>
          <p>some messages...some messages...</p>
        </div>
      ),
      onOk() {},
    });
  }

  success() {
    Modal.success({
      title: 'This is a success message',
      content: 'some messages...some messages...',
    });
  }

  error() {
    Modal.error({
      title: 'This is an error message',
      content: 'some messages...some messages...',
    });
  }

  warning() {
    Modal.warning({
      title: 'This is a warning message',
      content: 'some messages...some messages...',
    });
  }
}

export default withOptions(
  Info,
  AllProps,
  `import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import 'antd/lib/modal/style';
import 'antd/lib/button/style';

class Info extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Information modal dialog</h3>
        <Button onClick={this.info}>Info</Button>
        <Button className="ml20" onClick={this.success}>Success</Button>
        <Button className="ml20" onClick={this.error}>Error</Button>
        <Button className="ml20" onClick={this.warning}>Warning</Button>
      </section>
    );
  }

  info() {
    Modal.info({
      title: 'This is a notification message',
      content: (
        <div>
          <p>some messages...some messages...</p>
          <p>some messages...some messages...</p>
        </div>
      ),
      onOk() {},
    });
  }

  success() {
    Modal.success({
      title: 'This is a success message',
      content: 'some messages...some messages...',
    });
  }

  error() {
    Modal.error({
      title: 'This is an error message',
      content: 'some messages...some messages...',
    });
  }

  warning() {
    Modal.warning({
      title: 'This is a warning message',
      content: 'some messages...some messages...',
    });
  }
}`,
);
