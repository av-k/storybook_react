import React, { Component } from 'react';
import { DatePicker } from 'antd';
import 'antd/lib/date-picker/style';
// internal
import { dateFormat, timeFormat } from '../../../../common/constants';

class ChooseTime extends Component {
  render() {
    const { RangePicker } = DatePicker;

    return (
      <section className="example">
        <h3 className="ex-title">Choose Time</h3>
        <DatePicker
          showTime
          format={`${dateFormat} ${timeFormat}`}
          placeholder="Select Time"
        />
        <br />
        <br />
        <RangePicker
          showTime={{ format: timeFormat }}
          format={`${dateFormat} ${timeFormat}`}
          placeholder={['Start Time', 'End Time']}
        />
      </section>
    );
  }
}

export default ChooseTime;
