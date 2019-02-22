import React, { Component, Fragment } from 'react';
import { action } from '@storybook/addon-actions';
import { Button, Dropdown, Icon, Menu } from 'antd';
import 'antd/lib/button/style';
import 'antd/lib/dropdown/style';
import 'antd/lib/icon/style';
import 'antd/lib/menu/style';

class ButtonMultiple extends Component {
  render() {
    const menu = (
      <Menu onClick={action('Click')}>
        <Menu.Item key="1">1st item</Menu.Item>
        <Menu.Item key="2">2nd item</Menu.Item>
        <Menu.Item key="3">3rd item</Menu.Item>
      </Menu>
    );

    return (
      <Fragment>
        <h3 className="ex-title">Multiple Buttons</h3>
        <div>
          <Dropdown overlay={menu}>
            <Button>
              more <Icon type="down" />
            </Button>
          </Dropdown>
        </div>
      </Fragment>
    );
  }
}

export default ButtonMultiple;
