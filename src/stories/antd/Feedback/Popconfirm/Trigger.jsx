import React, { Component } from 'react';
import { Popconfirm, Switch, message } from 'antd';
import 'antd/lib/popconfirm/style';
import 'antd/lib/switch/style';
import 'antd/lib/message/style';
import { withOptions } from '../../../../common/withOptions';
import * as AllProps from './_DATA';

class Trigger extends Component {
  state = {
    visible: false,
    condition: true,
  };

  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Conditional trigger</h3>
        <div>
          <Popconfirm
            title="Are you sure delete this task?"
            visible={this.state.visible}
            onVisibleChange={this.handleVisibleChange}
            onConfirm={this.confirm}
            onCancel={this.cancel}
            okText="Yes"
            cancelText="No"
          >
            <a href="#">Delete a task</a>
          </Popconfirm>
          <br />
          <br />
          Whether directly execute：
          <Switch defaultChecked onChange={this.changeCondition} />
        </div>
      </section>
    );
  }

  changeCondition = value => {
    this.setState({ condition: value });
  };

  confirm = () => {
    this.setState({ visible: false });
    message.success('Next step.');
  };

  cancel = () => {
    this.setState({ visible: false });
    message.error('Click on cancel.');
  };

  handleVisibleChange = visible => {
    if (!visible) {
      this.setState({ visible });
      return;
    }
    if (this.state.condition) {
      this.confirm();
    } else {
      this.setState({ visible });
    }
  };
}

export default withOptions(
  Trigger,
  AllProps,
  `import React, { Component } from 'react';
import { Popconfirm, Switch, message } from 'antd';
import 'antd/lib/popconfirm/style';
import 'antd/lib/switch/style';
import 'antd/lib/message/style';

class Trigger extends Component {
  state = {
    visible: false,
    condition: true
  };

  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Conditional trigger</h3>
        <div>
          <Popconfirm
            title="Are you sure delete this task?"
            visible={this.state.visible}
            onVisibleChange={this.handleVisibleChange}
            onConfirm={this.confirm}
            onCancel={this.cancel}
            okText="Yes"
            cancelText="No"
          >
            <a href="#">Delete a task</a>
          </Popconfirm>
          <br />
          <br />
          Whether directly execute：<Switch defaultChecked onChange={this.changeCondition} />
        </div>
      </section>
    );
  }

  changeCondition = (value) => {
    this.setState({ condition: value });
  };

  confirm = () => {
    this.setState({ visible: false });
    message.success('Next step.');
  };

  cancel = () => {
    this.setState({ visible: false });
    message.error('Click on cancel.');
  };

  handleVisibleChange = (visible) => {
    if (!visible) {
      this.setState({ visible });
      return;
    }
    if (this.state.condition) {
      this.confirm();
    } else {
      this.setState({ visible });
    }
  };
}`,
);
