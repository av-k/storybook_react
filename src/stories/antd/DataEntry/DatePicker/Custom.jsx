import React, { Component } from 'react';
import { DatePicker } from 'antd';
import 'antd/lib/date-picker/style';
// internal
import { dateFormat, timeFormat } from '../../../../common/constants';

class Custom extends Component {
  state = {
    startValue: null,
    endValue: null,
    endOpen: false,
  };

  render() {
    const { startValue, endValue, endOpen } = this.state;
    return (
      <section className="example">
        <h3 className="ex-title">Customized Range Picker</h3>
        <DatePicker
          disabledDate={this.disabledStartDate}
          showTime
          format={`${dateFormat} ${timeFormat}`}
          value={startValue}
          placeholder="Start"
          onChange={this.onStartChange}
          onOpenChange={this.handleStartOpenChange}
        />
        <DatePicker
          style={{marginLeft: '20px'}}
          disabledDate={this.disabledEndDate}
          showTime
          format={`${dateFormat} ${timeFormat}`}
          value={endValue}
          placeholder="End"
          onChange={this.onEndChange}
          open={endOpen}
          onOpenChange={this.handleEndOpenChange}
        />
      </section>
    );
  }

  disabledStartDate = (startValue) => {
    const endValue = this.state.endValue;
    if (!startValue || !endValue) {
      return false;
    }
    return startValue.valueOf() > endValue.valueOf();
  };

  disabledEndDate = (endValue) => {
    const startValue = this.state.startValue;
    if (!endValue || !startValue) {
      return false;
    }
    return endValue.valueOf() <= startValue.valueOf();
  };

  onChange = (field, value) => {
    this.setState({
      [field]: value,
    });
  };

  onStartChange = (value) => {
    this.onChange('startValue', value);
  };

  onEndChange = (value) => {
    this.onChange('endValue', value);
  };

  handleStartOpenChange = (open) => {
    if (!open) {
      this.setState({ endOpen: true });
    }
  };

  handleEndOpenChange = (open) => {
    this.setState({ endOpen: open });
  };
}

export default Custom;
