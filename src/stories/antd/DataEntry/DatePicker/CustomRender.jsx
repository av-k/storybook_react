import React, { Component } from 'react';
import { DatePicker } from 'antd';
import 'antd/lib/date-picker/style';
import { withOptions } from '../../../../common/withOptions';
import { CommonProps, DatePickerProps, RangePickerProps } from './_DATA';
import { action } from '@storybook/addon-actions';

class CustomRender extends Component {
  render() {
    const { RangePicker } = DatePicker;

    return (
      <section className="example">
        <h3 className="ex-title">Customized Date Rendering</h3>
        <DatePicker
          onChange={action('Picked')}
          dateRender={current => {
            const style = {};
            if (current.date() === 1) {
              style.border = '1px solid #1890ff';
              style.borderRadius = '50%';
            }
            return (
              <div className="ant-calendar-date" style={style}>
                {current.date()}
              </div>
            );
          }}
        />
        <br />
        <br />
        <RangePicker
          onChange={action('Picked')}
          dateRender={current => {
            const style = {};
            if (current.date() === 1) {
              style.border = '1px solid #1890ff';
              style.borderRadius = '50%';
            }
            return (
              <div className="ant-calendar-date" style={style}>
                {current.date()}
              </div>
            );
          }}
        />
      </section>
    );
  }
}

export default withOptions(
  CustomRender,
  { CommonProps, DatePickerProps, RangePickerProps },
  `import React, { Component } from 'react';
import { DatePicker } from 'antd';
import 'antd/lib/date-picker/style';

class CustomRender extends Component {
  render() {
    const { RangePicker } = DatePicker;

    return (
      <section className="example">
        <h3 className="ex-title">Customized Date Rendering</h3>
        <DatePicker
          dateRender={current => {
            const style = {};
            if (current.date() === 1) {
              style.border = '1px solid #1890ff';
              style.borderRadius = '50%';
            }
            return (
              <div className="ant-calendar-date" style={style}>
                {current.date()}
              </div>
            );
          }}
        />
        <br />
        <br />
        <RangePicker
          dateRender={current => {
            const style = {};
            if (current.date() === 1) {
              style.border = '1px solid #1890ff';
              style.borderRadius = '50%';
            }
            return (
              <div className="ant-calendar-date" style={style}>
                {current.date()}
              </div>
            );
          }}
        />
      </section>
    );
  }
}`,
);
