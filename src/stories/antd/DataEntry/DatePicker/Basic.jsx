import React, { Component } from 'react';
import { DatePicker } from 'antd';
import 'antd/lib/date-picker/style';
import { withOptions } from '../../../../common/withOptions';
import {
  CommonProps,
  DatePickerProps,
  MonthPickerProps,
  WeekPickerProps,
  RangePickerProps,
} from './_DATA';

class Basic extends Component {
  render() {
    const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
    return (
      <section className="example">
        <h3 className="ex-title">Basic</h3>
        <DatePicker />
        <br />
        <br />
        <MonthPicker placeholder="Select month" />
        <br />
        <br />
        <RangePicker />
        <br />
        <br />
        <WeekPicker placeholder="Select week" />
      </section>
    );
  }
}

export default withOptions(
  Basic,
  {
    CommonProps,
    DatePickerProps,
    MonthPickerProps,
    WeekPickerProps,
    RangePickerProps,
  },
  `import React, { Component } from 'react';
import { DatePicker } from 'antd';
import 'antd/lib/date-picker/style';

class Basic extends Component {
  render() {
    const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
    return (
      <section className="example">
        <h3 className="ex-title">Basic</h3>
        <DatePicker />
        <br />
        <br />
        <MonthPicker placeholder="Select month" />
        <br />
        <br />
        <RangePicker />
        <br />
        <br />
        <WeekPicker placeholder="Select week" />
      </section>
    );
  }
}`,
);
