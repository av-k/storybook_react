import React, { Component } from 'react';
import moment from 'moment';
import { DatePicker } from 'antd';
import 'antd/lib/date-picker/style';
// internal
import { dateFormat, timeFormat } from '../../../../common/constants';
import { withOptions } from '../../../../common/withOptions';
import {
  CommonProps,
  DatePickerProps,
  MonthPickerProps,
  RangePickerProps,
} from './_DATA';

const { MonthPicker, RangePicker } = DatePicker;

function range(start, end) {
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
}

function disabledDate(current) {
  return current && current < moment().endOf('day');
}

function disabledDateTime() {
  return {
    disabledHours: () => range(0, 24).splice(4, 20),
    disabledMinutes: () => range(30, 60),
    disabledSeconds: () => [55, 56],
  };
}

function disabledRangeTime(_, type) {
  if (type === 'start') {
    return {
      disabledHours: () => range(0, 60).splice(4, 20),
      disabledMinutes: () => range(30, 60),
      disabledSeconds: () => [55, 56],
    };
  }
  return {
    disabledHours: () => range(0, 60).splice(20, 4),
    disabledMinutes: () => range(0, 31),
    disabledSeconds: () => [55, 56],
  };
}

class DisDate extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Disabled Date & Time</h3>

        <DatePicker
          format={`${dateFormat} ${timeFormat}`}
          disabledDate={disabledDate}
          disabledTime={disabledDateTime}
          showTime={{ defaultValue: moment('00:00:00', timeFormat) }}
        />
        <br />
        <br />
        <MonthPicker disabledDate={disabledDate} placeholder="Select month" />
        <br />
        <br />
        <RangePicker
          disabledDate={disabledDate}
          disabledTime={disabledRangeTime}
          showTime={{
            hideDisabledOptions: true,
            defaultValue: [
              moment('00:00:00', timeFormat),
              moment('11:59:59', timeFormat),
            ],
          }}
          format={`${dateFormat} ${timeFormat}`}
        />
      </section>
    );
  }
}

export default withOptions(
  DisDate,
  { CommonProps, DatePickerProps, MonthPickerProps, RangePickerProps },
  `
import React, { Component } from 'react';
import moment from 'moment';
import { DatePicker } from 'antd';
import 'antd/lib/date-picker/style';

const { MonthPicker, RangePicker } = DatePicker;

function range(start, end) {
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
}

function disabledDate(current) {
  return current && current < moment().endOf('day');
}

function disabledDateTime() {
  return {
    disabledHours: () => range(0, 24).splice(4, 20),
    disabledMinutes: () => range(30, 60),
    disabledSeconds: () => [55, 56],
  };
}

function disabledRangeTime(_, type) {
  if (type === 'start') {
    return {
      disabledHours: () => range(0, 60).splice(4, 20),
      disabledMinutes: () => range(30, 60),
      disabledSeconds: () => [55, 56],
    };
  }
  return {
    disabledHours: () => range(0, 60).splice(20, 4),
    disabledMinutes: () => range(0, 31),
    disabledSeconds: () => [55, 56],
  };
}

class DisDate extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Disabled Date & Time</h3>

        <DatePicker
          format={\`${dateFormat} ${timeFormat}\`}
          disabledDate={disabledDate}
          disabledTime={disabledDateTime}
          showTime={{ defaultValue: moment('00:00:00', timeFormat) }}
        />
        <br />
        <br />
        <MonthPicker disabledDate={disabledDate} placeholder="Select month" />
        <br />
        <br />
        <RangePicker
          disabledDate={disabledDate}
          disabledTime={disabledRangeTime}
          showTime={{
            hideDisabledOptions: true,
            defaultValue: [
              moment('00:00:00', timeFormat),
              moment('11:59:59', timeFormat),
            ],
          }}
          format={\`${dateFormat} ${timeFormat}\`}
        />
      </section>
    );
  }
}`,
);
