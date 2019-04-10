import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import 'antd/lib/modal/style';
import 'antd/lib/button/style';
import { withOptions } from '../../../../common/withOptions';
import * as AllProps from './_DATA';

class Basic extends Component {
  state = { visible: false };

  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Basic</h3>
        <div>
          <Button type="primary" onClick={this.showModal}>
            Open
          </Button>
          <Modal
            title="Basic Modal"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>
        </div>
      </section>
    );
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({
      visible: false,
    });
  };

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };
}

export default withOptions(
  Basic,
  AllProps,
  `import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import 'antd/lib/modal/style';
import 'antd/lib/button/style';

class Basic extends Component {
  state = { visible: false };

  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Basic</h3>
        <div>
          <Button type="primary" onClick={this.showModal}>Open</Button>
          <Modal
            title="Basic Modal"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>
        </div>
      </section>
    );
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({
      visible: false,
    });
  };

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };
}`,
);
