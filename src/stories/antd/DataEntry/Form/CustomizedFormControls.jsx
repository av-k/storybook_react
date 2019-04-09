import React, { Component } from 'react';
import { Form, Input, Select, Button } from 'antd';
import 'antd/lib/form/style';
import 'antd/lib/input/style';
import 'antd/lib/select/style';
import 'antd/lib/button/style';
import { withOptions } from '../../../../common/withOptions';
import * as AllProps from './_DATA';
import { action } from '@storybook/addon-actions';

const FormItem = Form.Item;
const Option = Select.Option;

class PriceInput extends React.Component {
  constructor(props) {
    super(props);

    const value = this.props.value || {};
    this.state = {
      number: value.number || 0,
      currency: value.currency || 'rmb',
    };
  }
  componentWillReceiveProps(nextProps) {
    if ('value' in nextProps) {
      const value = nextProps.value;
      this.setState(value);
    }
  }

  handleNumberChange = e => {
    const number = parseInt(e.target.value || 0, 10);
    if (isNaN(number)) {
      return;
    }
    if (!('value' in this.props)) {
      this.setState({ number });
    }
    this.triggerChange({ number });
  };

  handleCurrencyChange = currency => {
    if (!('value' in this.props)) {
      this.setState({ currency });
    }
    this.triggerChange({ currency });
  };

  triggerChange = changedValue => {
    const onChange = this.props.onChange;
    if (onChange) {
      onChange(Object.assign({}, this.state, changedValue));
    }
  };

  render() {
    const { size } = this.props;
    const state = this.state;
    return (
      <span>
        <Input
          type="text"
          size={size}
          value={state.number}
          onChange={this.handleNumberChange}
          style={{ width: '65%', marginRight: '3%' }}
        />
        <Select
          value={state.currency}
          size={size}
          style={{ width: '32%' }}
          onChange={this.handleCurrencyChange}
        >
          <Option value="rmb">RMB</Option>
          <Option value="dollar">Dollar</Option>
        </Select>
      </span>
    );
  }
}

class CustomizedFormControls extends Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <section className="example">
        <h3 className="ex-title">Customized Form Controls</h3>
        <Form layout="inline" onSubmit={this.handleSubmit}>
          <FormItem label="Price">
            {getFieldDecorator('price', {
              initialValue: { number: 0, currency: 'rmb' },
              rules: [{ validator: this.checkPrice }],
            })(<PriceInput />)}
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </FormItem>
        </Form>
      </section>
    );
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        action('Submit Form')(values);
      }
    });
  };

  checkPrice = (rule, value, callback) => {
    if (value.number > 0) {
      callback();
      return;
    }
    callback('Price must greater than zero!');
  };
}

CustomizedFormControls = Form.create()(CustomizedFormControls);

export default withOptions(
  CustomizedFormControls,
  AllProps,
  `import React, { Component } from 'react';
import { Form, Input, Select, Button } from 'antd';
import 'antd/lib/form/style';
import 'antd/lib/input/style';
import 'antd/lib/select/style';
import 'antd/lib/button/style';


const FormItem = Form.Item;
const Option = Select.Option;

class PriceInput extends React.Component {
	constructor(props) {
		super(props);

		const value = this.props.value || {};
		this.state = {
			number: value.number || 0,
			currency: value.currency || 'rmb',
		};
	}
	componentWillReceiveProps(nextProps) {
		if ('value' in nextProps) {
			const value = nextProps.value;
			this.setState(value);
		}
	}

	handleNumberChange = (e) => {
		const number = parseInt(e.target.value || 0, 10);
		if (isNaN(number)) {
			return;
		}
		if (!('value' in this.props)) {
			this.setState({ number });
		}
		this.triggerChange({ number });
	};

	handleCurrencyChange = (currency) => {
		if (!('value' in this.props)) {
			this.setState({ currency });
		}
		this.triggerChange({ currency });
	};

	triggerChange = (changedValue) => {
		const onChange = this.props.onChange;
		if (onChange) {
			onChange(Object.assign({}, this.state, changedValue));
		}
	};

	render() {
		const { size } = this.props;
		const state = this.state;
		return (
			<span>
				<Input
					type="text"
					size={size}
					value={state.number}
					onChange={this.handleNumberChange}
					style={{ width: '65%', marginRight: '3%' }}
				/>
				<Select
					value={state.currency}
					size={size}
					style={{ width: '32%' }}
					onChange={this.handleCurrencyChange}
				>
					<Option value="rmb">RMB</Option>
					<Option value="dollar">Dollar</Option>
				</Select>
			</span>
		);
	}
}

class CustomizedFormControls extends Component {
	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<section className="example">
				<h3 className="ex-title">Customized Form Controls</h3>
				<Form layout="inline" onSubmit={this.handleSubmit}>
					<FormItem label="Price">
						{getFieldDecorator('price', {
							initialValue: { number: 0, currency: 'rmb' },
							rules: [{ validator: this.checkPrice }],
						})(<PriceInput />)}
					</FormItem>
					<FormItem>
						<Button type="primary" htmlType="submit">Submit</Button>
					</FormItem>
				</Form>
			</section>
		);
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values);
			}
		});
	};

	checkPrice = (rule, value, callback) => {
		if (value.number > 0) {
			callback();
			return;
		}
		callback('Price must greater than zero!');
	}
}

CustomizedFormControls = Form.create()(CustomizedFormControls);`,
);
