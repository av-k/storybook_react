import React, { Component } from 'react';
import { DatePicker } from 'antd';
import 'antd/lib/date-picker/style';
import moment from 'moment';
// internal
import { dateFormat } from '../../../../common/constants';
import { withOptions } from '../../../../common/withOptions';
import { CommonProps, DatePickerProps, RangePickerProps } from './_DATA';

class Disabled extends Component {
  render() {
    const { MonthPicker, RangePicker } = DatePicker;

    return (
      <section className="example">
        <h3 className="ex-title">Disabled</h3>
        <DatePicker defaultValue={moment('2015-06-06', dateFormat)} disabled />
        <br />
        <br />
        <MonthPicker defaultValue={moment('2015-06', 'YYYY-MM')} disabled />
        <br />
        <br />
        <RangePicker
          defaultValue={[
            moment('2015-06-06', dateFormat),
            moment('2015-06-06', dateFormat),
          ]}
          disabled
        />
      </section>
    );
  }
}

export default withOptions(
  Disabled,
  { CommonProps, DatePickerProps, RangePickerProps },
  `import React, { Component } from 'react';
import { DatePicker } from 'antd';
import 'antd/lib/date-picker/style';
import moment from 'moment';

class Disabled extends Component {
  render() {
    const { MonthPicker, RangePicker } = DatePicker;

    return (
      <section className="example">
        <h3 className="ex-title">Disabled</h3>
        <DatePicker defaultValue={moment('2015-06-06', dateFormat)} disabled />
        <br />
        <br />
        <MonthPicker defaultValue={moment('2015-06', 'YYYY-MM')} disabled />
        <br />
        <br />
        <RangePicker
          defaultValue={[
            moment('2015-06-06', dateFormat),
            moment('2015-06-06', dateFormat),
          ]}
          disabled
        />
      </section>
    );
  }
}`,
);
