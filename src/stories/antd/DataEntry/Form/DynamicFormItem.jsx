import React, { Component } from 'react';
import { Form, Input, Icon, Button } from 'antd';
import 'antd/lib/form/style';
import 'antd/lib/input/style';
import 'antd/lib/icon/style';
import 'antd/lib/button/style';
import { withOptions } from '../../../../common/withOptions';
import * as AllProps from './_DATA';
import { action } from '@storybook/addon-actions';

const FormItem = Form.Item;
let uuid = 0;

class DynamicFormItem extends Component {
  state = {};

  render() {
    const { getFieldDecorator, getFieldValue } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 20 },
      },
    };

    const formItemLayoutWithOutLabel = {
      wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 20, offset: 4 },
      },
    };

    getFieldDecorator('keys', { initialValue: [] });

    const keys = getFieldValue('keys');

    const formItems = keys.map((k, index) => {
      return (
        <FormItem
          {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
          label={index === 0 ? 'Passengers' : ''}
          required={false}
          key={k}
        >
          {getFieldDecorator(`names[${k}]`, {
            validateTrigger: ['onChange', 'onBlur'],
            rules: [
              {
                required: true,
                whitespace: true,
                message: "Please input passenger's name or delete this field.",
              },
            ],
          })(
            <Input
              placeholder="passenger name"
              style={{ width: '60%', marginRight: 8 }}
            />,
          )}
          {keys.length > 1 ? (
            <Icon
              className="dynamic-delete-button"
              type="minus-circle-o"
              disabled={keys.length === 1}
              onClick={() => this.remove(k)}
            />
          ) : null}
        </FormItem>
      );
    });

    return (
      <section className="example">
        <h3 className="ex-title">Dynamic Form Item</h3>

        <Form style={{ width: '600px' }} onSubmit={this.handleSubmit}>
          {formItems}
          <FormItem {...formItemLayoutWithOutLabel}>
            <Button type="dashed" onClick={this.add} style={{ width: '60%' }}>
              <Icon type="plus" /> Add field
            </Button>
          </FormItem>
          <FormItem {...formItemLayoutWithOutLabel}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </FormItem>
        </Form>
      </section>
    );
  }

  remove = k => {
    const { form } = this.props;
    // can use data-binding to get
    const keys = form.getFieldValue('keys');
    // We need at least one passenger
    if (keys.length === 1) {
      return;
    }

    // can use data-binding to set
    form.setFieldsValue({
      keys: keys.filter(key => key !== k),
    });
  };

  add = () => {
    const { form } = this.props;
    const keys = form.getFieldValue('keys');
    const nextKeys = keys.concat(uuid);
    uuid++;

    form.setFieldsValue({
      keys: nextKeys,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        action('Submit Form')(values);
      }
    });
  };
}

DynamicFormItem = Form.create()(DynamicFormItem);

export default withOptions(
  DynamicFormItem,
  AllProps,
  `import React, { Component } from 'react';
import { Form, Input, Icon, Button } from 'antd';
import 'antd/lib/form/style';
import 'antd/lib/input/style';
import 'antd/lib/icon/style';
import 'antd/lib/button/style';


const FormItem = Form.Item;
let uuid = 0;

class DynamicFormItem extends Component {
	state = {};

	render() {
		const { getFieldDecorator, getFieldValue } = this.props.form;

		const formItemLayout = {
			labelCol: {
				xs: { span: 24 },
				sm: { span: 4 },
			},
			wrapperCol: {
				xs: { span: 24 },
				sm: { span: 20 },
			},
		};

		const formItemLayoutWithOutLabel = {
			wrapperCol: {
				xs: { span: 24, offset: 0 },
				sm: { span: 20, offset: 4 },
			},
		};

		getFieldDecorator('keys', { initialValue: [] });

		const keys = getFieldValue('keys');

		const formItems = keys.map((k, index) => {
			return (
				<FormItem
					{...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
					label={index === 0 ? 'Passengers' : ''}
					required={false}
					key={k}
				>
					{getFieldDecorator(\`names[\${ k }]\`, {
						validateTrigger: ['onChange', 'onBlur'],
						rules: [{
							required: true,
							whitespace: true,
							message: "Please input passenger's name or delete this field.",
						}],
					})(
						<Input placeholder="passenger name" style={{ width: '60%', marginRight: 8 }} />
					)}
					{keys.length > 1 ? (
						<Icon
							className="dynamic-delete-button"
							type="minus-circle-o"
							disabled={keys.length === 1}
							onClick={() => this.remove(k)}
						/>
					) : null}
				</FormItem>
			);
		});

		return (
			<section className="example">
				<h3 className="ex-title">Dynamic Form Item</h3>

				<Form style={{ width: '600px' }} onSubmit={this.handleSubmit}>
					{formItems}
					<FormItem {...formItemLayoutWithOutLabel}>
						<Button type="dashed" onClick={this.add} style={{ width: '60%' }}>
							<Icon type="plus" /> Add field
            </Button>
					</FormItem>
					<FormItem {...formItemLayoutWithOutLabel}>
						<Button type="primary" htmlType="submit">Submit</Button>
					</FormItem>
				</Form>
			</section>
		);
	}

	remove = (k) => {
		const { form } = this.props;
		// can use data-binding to get
		const keys = form.getFieldValue('keys');
		// We need at least one passenger
		if (keys.length === 1) {
			return;
		}

		// can use data-binding to set
		form.setFieldsValue({
			keys: keys.filter(key => key !== k),
		});
	};

	add = () => {
		const { form } = this.props;
		const keys = form.getFieldValue('keys');
		const nextKeys = keys.concat(uuid);
		uuid++;

		form.setFieldsValue({
			keys: nextKeys
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values);
			}
		});
	};
}

DynamicFormItem = Form.create()(DynamicFormItem);`,
);
