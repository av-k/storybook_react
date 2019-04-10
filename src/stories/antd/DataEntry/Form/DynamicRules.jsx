import React, { Component } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import 'antd/lib/form/style';
import 'antd/lib/input/style';
import 'antd/lib/button/style';
import 'antd/lib/checkbox/style';
import { withOptions } from '../../../../common/withOptions';
import * as AllProps from './_DATA';
import { action } from '@storybook/addon-actions';

const FormItem = Form.Item;

const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 },
};

const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8, offset: 4 },
};

class DynamicRules extends Component {
  state = {
    checkNick: false,
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <section className="example">
        <h3 className="ex-title">Dynamic Rules</h3>
        <FormItem {...formItemLayout} label="Name">
          {getFieldDecorator('username', {
            rules: [
              {
                required: true,
                message: 'Please input your name',
              },
            ],
          })(<Input placeholder="Please input your name" />)}
        </FormItem>

        <FormItem {...formItemLayout} label="Nickname">
          {getFieldDecorator('nickname', {
            rules: [
              {
                required: this.state.checkNick,
                message: 'Please input your nickname',
              },
            ],
          })(<Input placeholder="Please input your nickname" />)}
        </FormItem>

        <FormItem {...formTailLayout}>
          <Checkbox value={this.state.checkNick} onChange={this.handleChange}>
            Nickname is required
          </Checkbox>
        </FormItem>

        <FormItem {...formTailLayout}>
          <Button type="primary" onClick={this.check}>
            Check
          </Button>
        </FormItem>
      </section>
    );
  }

  check = () => {
    this.props.form.validateFields(err => {
      action('Error')(err);
      if (!err) {
        console.info('success');
        action('Success')();
      }
    });
  };

  handleChange = e => {
    this.setState(
      {
        checkNick: e.target.checked,
      },
      () => {
        this.props.form.validateFields(['nickname'], { force: true });
      },
    );
  };
}

DynamicRules = Form.create()(DynamicRules);

export default withOptions(
  DynamicRules,
  AllProps,
  `import React, { Component } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import 'antd/lib/form/style';
import 'antd/lib/input/style';
import 'antd/lib/button/style';
import 'antd/lib/checkbox/style';

const FormItem = Form.Item;

const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 },
};

const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8, offset: 4 },
};

class DynamicRules extends Component {
  state = {
    checkNick: false,
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <section className="example">
        <h3 className="ex-title">Dynamic Rules</h3>
        <FormItem {...formItemLayout} label="Name">
          {getFieldDecorator('username', {
            rules: [{
              required: true,
              message: 'Please input your name',
            }],
          })(
            <Input placeholder="Please input your name" />
          )}
        </FormItem>

        <FormItem {...formItemLayout} label="Nickname">
          {getFieldDecorator('nickname', {
            rules: [{
              required: this.state.checkNick,
              message: 'Please input your nickname',
            }],
          })(
            <Input placeholder="Please input your nickname" />
          )}
        </FormItem>

        <FormItem {...formTailLayout}>
          <Checkbox
            value={this.state.checkNick}
            onChange={this.handleChange}
          >
            Nickname is required
          </Checkbox>
        </FormItem>

        <FormItem {...formTailLayout}>
          <Button type="primary" onClick={this.check}>
            Check
          </Button>
        </FormItem>
      </section>
    );
  }

  check = () => {
    this.props.form.validateFields(
      (err) => {
        if (!err) {
          console.info('success');
        }
      },
    );
  };

  handleChange = (e) => {
    this.setState({
      checkNick: e.target.checked,
    }, () => {
      this.props.form.validateFields(['nickname'], { force: true });
    });
  };
}

DynamicRules = Form.create()(DynamicRules);`,
);
