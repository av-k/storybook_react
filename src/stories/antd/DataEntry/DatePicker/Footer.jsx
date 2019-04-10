import React, { Component } from 'react';
import { DatePicker } from 'antd';
import 'antd/lib/date-picker/style';
import { withOptions } from '../../../../common/withOptions';
import {
  CommonProps,
  DatePickerProps,
  RangePickerProps,
  MonthPickerProps,
} from './_DATA';
import { action } from '@storybook/addon-actions';

class Footer extends Component {
  state = {};

  render() {
    const { RangePicker, MonthPicker } = DatePicker;
    return (
      <section className="example">
        <h3 className="ex-title">Extra Footer</h3>
        <DatePicker
          onChange={action('Picked')}
          renderExtraFooter={() => 'extra footer'}
        />
        <DatePicker
          onChange={action('Picked')}
          style={{ marginLeft: '20px' }}
          renderExtraFooter={() => 'extra footer'}
          showTime
        />
        <br />
        <br />
        <RangePicker
          onChange={action('Picked')}
          renderExtraFooter={() => 'extra footer'}
        />
        <br />
        <br />
        <RangePicker
          onChange={action('Picked')}
          renderExtraFooter={() => 'extra footer'}
          showTime
        />
        <MonthPicker
          onChange={action('Picked')}
          style={{ marginLeft: '20px' }}
          renderExtraFooter={() => 'extra footer'}
          placeholder="Select month"
        />
      </section>
    );
  }
}

export default withOptions(
  Footer,
  { CommonProps, DatePickerProps, RangePickerProps, MonthPickerProps },
  `import React, { Component } from 'react';
import { DatePicker } from 'antd';
import 'antd/lib/date-picker/style';

class Footer extends Component {
  state = {};

  render() {
    const { RangePicker, MonthPicker } = DatePicker;
    return (
      <section className="example">
        <h3 className="ex-title">Extra Footer</h3>
        <DatePicker renderExtraFooter={() => 'extra footer'} />
        <DatePicker
          style={{ marginLeft: '20px' }}
          renderExtraFooter={() => 'extra footer'}
          showTime
        />
        <br />
        <br />
        <RangePicker renderExtraFooter={() => 'extra footer'} />
        <br />
        <br />
        <RangePicker renderExtraFooter={() => 'extra footer'} showTime />
        <MonthPicker
          style={{ marginLeft: '20px' }}
          renderExtraFooter={() => 'extra footer'}
          placeholder="Select month"
        />
      </section>
    );
  }
}`,
);
