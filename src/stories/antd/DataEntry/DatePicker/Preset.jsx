import React, { Component } from 'react';
import { DatePicker } from 'antd';
import 'antd/lib/date-picker/style';
import moment from 'moment';
// internal
import { dateFormat, timeFormat } from '../../../../common/constants';

class Preset extends Component {
  state = {};

  render() {
    const RangePicker = DatePicker.RangePicker;
    return (
      <section className="example">
        <h3 className="ex-title">Presetted Ranges</h3>
        <RangePicker
          ranges={{ Today: [moment(), moment()], 'This Month': [moment(), moment().endOf('month')] }}
        />
        <br /><br/>
        <RangePicker
          ranges={{ Today: [moment(), moment()], 'This Month': [moment(), moment().endOf('month')] }}
          showTime
          format={`${dateFormat} ${timeFormat}`}
        />
      </section>
    );
  }
}

export default Preset;
