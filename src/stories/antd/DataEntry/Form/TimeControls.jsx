import React, { Component } from 'react';
import { Form, DatePicker, TimePicker, Button } from 'antd';
import 'antd/lib/form/style';
import 'antd/lib/date-picker/style';
import 'antd/lib/time-picker/style';
import 'antd/lib/button/style';
// internal
import { dateFormat, timeFormat } from '../../../../common/constants';
import { withOptions } from '../../../../common/withOptions';
import * as AllProps from './_DATA';

const FormItem = Form.Item;
const MonthPicker = DatePicker.MonthPicker;
const RangePicker = DatePicker.RangePicker;

class TimeControls extends Component {
  state = {};

  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };

    const config = {
      rules: [
        { type: 'object', required: true, message: 'Please select time!' },
      ],
    };

    const rangeConfig = {
      rules: [
        { type: 'array', required: true, message: 'Please select time!' },
      ],
    };

    return (
      <section className="example">
        <h3 className="ex-title">Time-related Controls</h3>
        <Form style={{ width: '700px' }} onSubmit={this.handleSubmit}>
          <FormItem {...formItemLayout} label="DatePicker">
            {getFieldDecorator('date-picker', config)(<DatePicker />)}
          </FormItem>
          <FormItem {...formItemLayout} label="DatePicker[showTime]">
            {getFieldDecorator('date-time-picker', config)(
              <DatePicker showTime format={`${dateFormat} ${timeFormat}`} />,
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="MonthPicker">
            {getFieldDecorator('month-picker', config)(<MonthPicker />)}
          </FormItem>
          <FormItem {...formItemLayout} label="RangePicker">
            {getFieldDecorator('range-picker', rangeConfig)(<RangePicker />)}
          </FormItem>
          <FormItem {...formItemLayout} label="RangePicker[showTime]">
            {getFieldDecorator('range-time-picker', rangeConfig)(
              <RangePicker showTime format={`${dateFormat} ${timeFormat}`} />,
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="TimePicker">
            {getFieldDecorator('time-picker', config)(<TimePicker />)}
          </FormItem>
          <FormItem
            wrapperCol={{
              xs: { span: 24, offset: 0 },
              sm: { span: 16, offset: 8 },
            }}
          >
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

    this.props.form.validateFields((err, fieldsValue) => {
      if (err) {
        return;
      }

      const rangeValue = fieldsValue['range-picker'];
      const rangeTimeValue = fieldsValue['range-time-picker'];
      const values = {
        ...fieldsValue,
        'date-picker': fieldsValue['date-picker'].format(dateFormat),
        'date-time-picker': fieldsValue['date-time-picker'].format(
          `${dateFormat} ${timeFormat}`,
        ),
        'month-picker': fieldsValue['month-picker'].format('YYYY-MM'),
        'range-picker': [
          rangeValue[0].format(dateFormat),
          rangeValue[1].format(dateFormat),
        ],
        'range-time-picker': [
          rangeTimeValue[0].format(`${dateFormat} ${timeFormat}`),
          rangeTimeValue[1].format(`${dateFormat} ${timeFormat}`),
        ],
        'time-picker': fieldsValue['time-picker'].format(timeFormat),
      };
      console.info('Received from form: ', { values });
    });
  };
}

TimeControls = Form.create()(TimeControls);

export default withOptions(
  TimeControls,
  AllProps,
  `import React, { Component } from 'react';
import { Form, DatePicker, TimePicker, Button } from 'antd';
import 'antd/lib/form/style';
import 'antd/lib/date-picker/style';
import 'antd/lib/time-picker/style';
import 'antd/lib/button/style';

const FormItem = Form.Item;
const MonthPicker = DatePicker.MonthPicker;
const RangePicker = DatePicker.RangePicker;

class TimeControls extends Component {
  state = {};

  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };

    const config = {
      rules: [{ type: 'object', required: true, message: 'Please select time!' }],
    };

    const rangeConfig = {
      rules: [{ type: 'array', required: true, message: 'Please select time!' }],
    };

    return (
      <section className="example">
        <h3 className="ex-title">Time-related Controls</h3>
        <Form style={{width: '700px'}} onSubmit={this.handleSubmit}>
          <FormItem
            {...formItemLayout}
            label="DatePicker">
            {getFieldDecorator('date-picker', config)(<DatePicker />)}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="DatePicker[showTime]">
            {getFieldDecorator('date-time-picker', config)(
              <DatePicker showTime format={\`\${dateFormat} \${timeFormat}\`} />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="MonthPicker">
            {getFieldDecorator('month-picker', config)(<MonthPicker />)}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="RangePicker">
            {getFieldDecorator('range-picker', rangeConfig)(<RangePicker />)}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="RangePicker[showTime]">
            {getFieldDecorator('range-time-picker', rangeConfig)(
              <RangePicker showTime format={\`\${dateFormat} \${timeFormat}\`} />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="TimePicker">
            {getFieldDecorator('time-picker', config)(<TimePicker />)}
          </FormItem>
          <FormItem
            wrapperCol={{
              xs: { span: 24, offset: 0 },
              sm: { span: 16, offset: 8 }
            }}>
            <Button type="primary" htmlType="submit">Submit</Button>
          </FormItem>
        </Form>
      </section>
    );
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.form.validateFields((err, fieldsValue) => {
      if (err) {
        return;
      }

      const rangeValue = fieldsValue['range-picker'];
      const rangeTimeValue = fieldsValue['range-time-picker'];
      const values = {
        ...fieldsValue,
        'date-picker': fieldsValue['date-picker'].format(dateFormat),
        'date-time-picker': fieldsValue['date-time-picker'].format(\`\${dateFormat} \${timeFormat}\`),
        'month-picker': fieldsValue['month-picker'].format('YYYY-MM'),
        'range-picker': [rangeValue[0].format(dateFormat), rangeValue[1].format(dateFormat)],
        'range-time-picker': [
          rangeTimeValue[0].format(\`\${dateFormat} \${timeFormat}\`),
          rangeTimeValue[1].format(\`\${dateFormat} \${timeFormat}\`)
        ],
        'time-picker': fieldsValue['time-picker'].format(timeFormat)
      };
      console.info('Received from form: ', { values });
    });
  }
}

TimeControls = Form.create()(TimeControls);`,
);
