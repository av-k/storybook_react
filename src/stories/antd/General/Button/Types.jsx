import React, { Component, Fragment } from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from 'antd';
import 'antd/lib/button/style';

class Types extends Component {
  render() {
    return (
      <Fragment>
        <h3 className="ex-title">Type</h3>
        <Button type="primary" onClick={action('Primary Button Clicked')}>Primary</Button>
        <Button className="ml20" onClick={action('Default Button Clicked')}>Default</Button>
        <Button className="ml20" type="dashed" onClick={action('Dashed Button Clicked')}>Dashed</Button>
        <Button className="ml20" type="danger" onClick={action('Danger Button Clicked')}>Danger</Button>
      </Fragment>
    );
  }
}

export default Types;
