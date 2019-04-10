import React, { Component } from 'react';
import { Button, Modal, Form, Input, Radio } from 'antd';
import 'antd/lib/button/style';
import 'antd/lib/modal/style';
import 'antd/lib/form/style';
import 'antd/lib/input/style';
import 'antd/lib/radio/style';
import { withOptions } from '../../../../common/withOptions';
import * as AllProps from './_DATA';
import { action } from '@storybook/addon-actions';

const FormItem = Form.Item;
const CollectionCreateForm = Form.create()(props => {
  const { visible, onCancel, onCreate, form } = props;
  const { getFieldDecorator } = form;
  return (
    <Modal
      visible={visible}
      title="Create a new collection"
      okText="Create"
      onCancel={onCancel}
      onOk={onCreate}
    >
      <Form layout="vertical">
        <FormItem label="Title">
          {getFieldDecorator('title', {
            rules: [
              {
                required: true,
                message: 'Please input the title of collection!',
              },
            ],
          })(<Input />)}
        </FormItem>
        <FormItem label="Description">
          {getFieldDecorator('description')(<Input type="textarea" />)}
        </FormItem>
        <FormItem className="collection-create-form_last-form-item">
          {getFieldDecorator('modifier', {
            initialValue: 'public',
          })(
            <Radio.Group>
              <Radio value="public">Public</Radio>
              <Radio value="private">Private</Radio>
            </Radio.Group>,
          )}
        </FormItem>
      </Form>
    </Modal>
  );
});

class FormInModal extends Component {
  state = {
    visible: false,
  };

  showModal = () => {
    this.setState({ visible: true });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  handleCreate = () => {
    const form = this.form;
    form.validateFields((err, values) => {
      action('Submit Form')(values);
      if (err) {
        return;
      }

      console.log('Received values of form: ', values);
      form.resetFields();
      this.setState({ visible: false });
    });
  };

  saveFormRef = form => {
    this.form = form;
  };

  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Form in Modal to Create</h3>
        <Button type="primary" onClick={this.showModal}>
          New Collection
        </Button>
        <CollectionCreateForm
          ref={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
      </section>
    );
  }
}

export default withOptions(
  FormInModal,
  AllProps,
  `import React, { Component } from 'react';
import { Button, Modal, Form, Input, Radio } from 'antd';
import 'antd/lib/button/style';
import 'antd/lib/modal/style';
import 'antd/lib/form/style';
import 'antd/lib/input/style';
import 'antd/lib/radio/style';

const FormItem = Form.Item;
const CollectionCreateForm = Form.create()(
  (props) => {
    const { visible, onCancel, onCreate, form } = props;
    const { getFieldDecorator } = form;
    return (
      <Modal
        visible={visible}
        title="Create a new collection"
        okText="Create"
        onCancel={onCancel}
        onOk={onCreate}
      >
        <Form layout="vertical">
          <FormItem label="Title">
            {getFieldDecorator('title', {
              rules: [{ required: true, message: 'Please input the title of collection!' }],
            })(
              <Input />
            )}
          </FormItem>
          <FormItem label="Description">
            {getFieldDecorator('description')(<Input type="textarea" />)}
          </FormItem>
          <FormItem className="collection-create-form_last-form-item">
            {getFieldDecorator('modifier', {
              initialValue: 'public',
            })(
              <Radio.Group>
                <Radio value="public">Public</Radio>
                <Radio value="private">Private</Radio>
              </Radio.Group>
            )}
          </FormItem>
        </Form>
      </Modal>
    );
  }
);

class FormInModal extends Component {
  state = {
    visible: false,
  };

  showModal = () => {
    this.setState({ visible: true });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  handleCreate = () => {
    const form = this.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      console.log('Received values of form: ', values);
      form.resetFields();
      this.setState({ visible: false });
    });
  };

  saveFormRef = (form) => {
    this.form = form;
  };

  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Form in Modal to Create</h3>
        <Button type="primary" onClick={this.showModal}>New Collection</Button>
        <CollectionCreateForm
          ref={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
      </section>
    );
  }
}`,
);
