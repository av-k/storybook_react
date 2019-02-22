import React, { Component, Fragment } from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from 'antd';
import 'antd/lib/button/style';

class Icon extends Component {
  render() {
    return (
      <Fragment>
        <h3 className="ex-title">Icon</h3>
        <div>
          <Button type="primary" shape="circle" icon="search" onClick={action('Search')} />
          <Button className="ml20" type="primary" icon="search" onClick={action('Search')}>Search</Button>
          <Button className="ml20" shape="circle" icon="search" onClick={action('Search')} />
          <Button className="ml20" icon="search" onClick={action('Search')}>Search</Button>
          <Button className="ml20" type="dashed" shape="circle" icon="search" onClick={action('Search')} />
          <Button className="ml20" type="dashed" icon="search" onClick={action('Search')}>Search</Button>
        </div>

      </Fragment>
    );
  }
}

export default Icon;
