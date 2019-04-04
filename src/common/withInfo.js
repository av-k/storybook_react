import React from 'react';
import { Button, Icon, Tooltip } from 'antd';

export default (Component, props) =>
  class withInfo extends React.Component {
    state = {
      showInfo: false,
    };
    toggleInfo = () => {
      this.setState(({ showInfo }) => ({ showInfo: !showInfo }));
    };
    render() {
      console.log(props);
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
                {Object.keys(props).map(propName => (
                  <li key={propName}>
                    <Tooltip
                      title={props[propName].description}
                      placement="right"
                    >
                      <span className="info-prop-name">{propName}</span>
                    </Tooltip>
                    <span className="info-prop-type">
                      : {props[propName].type}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </>
      );
    }
  };
