import React, { Component } from 'react';
import { Form, Input } from 'antd';
import 'antd/lib/form/style';
import 'antd/lib/input/style';
import { withOptions } from '../../../../common/withOptions';
import * as AllProps from './_DATA';
import { action } from '@storybook/addon-actions';

const FormItem = Form.Item;

const CustomizedForm = Form.create({
  onFieldsChange(props, changedFields) {
    props.onChange(changedFields);
  },
  mapPropsToFields(props) {
    return {
      username: Form.createFormField({
        ...props.username,
        value: props.username.value,
      }),
    };
  },
  onValuesChange(_, values) {
    action('Changed')(values);
    console.log(values);
  },
})(props => {
  const { getFieldDecorator } = props.form;
  return (
    <Form layout="inline">
      <FormItem label="Username">
        {getFieldDecorator('username', {
          rules: [{ required: true, message: 'Username is required!' }],
        })(<Input />)}
      </FormItem>
    </Form>
  );
});

class StoreFormData extends Component {
  state = {
    fields: {
      username: {
        value: 'benjycui',
      },
    },
  };

  handleFormChange = changedFields => {
    this.setState({
      fields: { ...this.state.fields, ...changedFields },
    });
  };

  render() {
    const fields = this.state.fields;

    return (
      <section className="example">
        <h3 className="ex-title">Store Form Data into Upper Component</h3>
        <CustomizedForm {...fields} onChange={this.handleFormChange} />
        <pre className="language-bash">{JSON.stringify(fields, null, 2)}</pre>
      </section>
    );
  }
}

export default withOptions(
  StoreFormData,
  AllProps,
  `import React, { Component } from 'react';
import { Form, Input } from 'antd';
import 'antd/lib/form/style';
import 'antd/lib/input/style';

const FormItem = Form.Item;

const CustomizedForm = Form.create({
  onFieldsChange(props, changedFields) {
    props.onChange(changedFields);
  },
  mapPropsToFields(props) {
    return {
      username: Form.createFormField({
        ...props.username,
        value: props.username.value,
      }),
    };
  },
  onValuesChange(_, values) {
    console.log(values);
  },
})((props) => {
  const { getFieldDecorator } = props.form;
  return (
    <Form layout="inline">
      <FormItem label="Username">
        {getFieldDecorator('username', {
          rules: [{ required: true, message: 'Username is required!' }],
        })(<Input />)}
      </FormItem>
    </Form>
  );
});

class StoreFormData extends Component {
  state = {
    fields: {
      username: {
        value: 'benjycui'
      },
    },
  };

  handleFormChange = (changedFields) => {
    this.setState({
      fields: { ...this.state.fields, ...changedFields },
    });
  };

  render() {
    const fields = this.state.fields;

    return (
      <section className="example">
        <h3 className="ex-title">Store Form Data into Upper Component</h3>
        <CustomizedForm {...fields} onChange={this.handleFormChange} />
        <pre className="language-bash">
          {JSON.stringify(fields, null, 2)}
        </pre>
      </section>
    );
  }
}`,
);
