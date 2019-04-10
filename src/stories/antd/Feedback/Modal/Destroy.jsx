import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import 'antd/lib/modal/style';
import 'antd/lib/button/style';
import { withOptions } from '../../../../common/withOptions';
import * as AllProps from './_DATA';

class Destroy extends Component {
  state = { visible: false };

  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Manual to destroy</h3>
        <Button onClick={this.success}>Success</Button>
      </section>
    );
  }

  success() {
    const modal = Modal.success({
      title: 'This is a notification message',
      content: 'This modal will be destroyed after 1 second',
    });
    setTimeout(() => modal.destroy(), 1000);
  }
}

export default withOptions(
  Destroy,
  AllProps,
  `import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import 'antd/lib/modal/style';
import 'antd/lib/button/style';

class Destroy extends Component {
  state = { visible: false };

  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Manual to destroy</h3>
        <Button onClick={this.success}>Success</Button>
      </section>
    );
  }

  success() {
    const modal = Modal.success({
      title: 'This is a notification message',
      content: 'This modal will be destroyed after 1 second',
    });
    setTimeout(() => modal.destroy(), 1000);
  }
}`,
);
