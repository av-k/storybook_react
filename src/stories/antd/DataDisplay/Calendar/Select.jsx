import React, { Component } from 'react';
import { Calendar, Alert } from 'antd';
import moment from 'moment';
// internal
import { dateFormat } from '../../../../common/constants';
import { withOptions } from '../../../../common/withOptions';
import * as AllProps from './_DATA';
import { action } from '@storybook/addon-actions';

class Select extends Component {
  state = {
    value: moment().subtract(1, 'months'),
    selectedValue: moment().subtract(1, 'months'),
  };

  render() {
    const { value, selectedValue = {} } = this.state;

    return (
      <section className="example">
        <h3 className="ex-title">Selectable Calendar</h3>
        <div>
          <Alert
            message={`You selected date: ${selectedValue.format(dateFormat)}`}
          />
          <Calendar
            value={value}
            onSelect={this.onSelect}
            onPanelChange={this.onPanelChange}
            onSelect={value => action('Date')(value.format(dateFormat))}
          />
        </div>
      </section>
    );
  }

  onSelect = value => {
    this.setState({
      value,
      selectedValue: value,
    });
  };

  onPanelChange = value => {
    this.setState({ value });
  };
}

export default withOptions(
  Select,
  AllProps,
  `import React, { Component } from 'react';
import { Calendar, Alert } from 'antd';
import moment from 'moment';
// internal
import { dateFormat } from '../../../../common/constants';

class Select extends Component {
  state = {
    value: moment().subtract(1, 'months'),
    selectedValue: moment().subtract(1, 'months')
  };

  render() {
    const { value, selectedValue = {} } = this.state;

    return (
      <section className="example">
        <h3 className="ex-title">Selectable Calendar</h3>
        <div>
          <Alert message={\`You selected date: \${selectedValue.format(dateFormat)}\`} />
          <Calendar value={value} onSelect={this.onSelect} onPanelChange={this.onPanelChange} />
        </div>
      </section>
    );
  }

  onSelect = (value) => {
    this.setState({
      value,
      selectedValue: value,
    });
  };

  onPanelChange = (value) => {
    this.setState({ value });
  }
}`,
);
