import React from 'react';
import { Button, Icon } from 'antd';

export default (Component, props) =>
  class withInfo extends React.Component {
    state = {
      showInfo: false,
    };
    toggleInfo = () => {
      this.setState(({ showInfo }) => ({ showInfo: !showInfo }));
    };
    render() {
      return (
        <>
          <Component />
          <section className="info">
            <Button onClick={this.toggleInfo}>
              <Icon type="setting" /> Settings
            </Button>
            <div style={{ display: !this.state.showInfo && 'none' }}>
              <h4 className="info-title">Props to use</h4>
              <ul>
                {Object.keys(props).map(key => (
                  <li>
                    <span className="info-prop">{key}</span> :{' '}
                    <span className="info-prop-value">{props[key]}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </>
      );
    }
  };
