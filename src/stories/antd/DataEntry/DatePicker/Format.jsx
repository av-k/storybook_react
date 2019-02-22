import React, { Component } from 'react';
import { DatePicker } from 'antd';
import 'antd/lib/date-picker/style';
import moment from 'moment';
// internal
import { dateFormat } from '../../../../common/constants';

class Format extends Component {
  render() {
    const { MonthPicker, RangePicker } = DatePicker;
    const dateFormat = dateFormat;
    const monthFormat = 'YYYY/MM';

    return (
      <section className="example">
        <h3 className="ex-title">Date Format</h3>
        <DatePicker defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} />
        <br /><br />
        <MonthPicker defaultValue={moment('2015/01', monthFormat)} format={monthFormat} />
        <br /><br />
        <RangePicker
          defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
          format={dateFormat}
        />
      </section>
    );
  }
}

export default Format;
