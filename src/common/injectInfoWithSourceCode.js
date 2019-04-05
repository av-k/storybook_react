import React from 'react';
import { Button, Icon, Tooltip, Modal } from 'antd';
import Prism from 'prismjs';
import PrismJsx from 'prismjs/components/prism-jsx.min';
import { Object } from 'es6-shim';

export default (Component, props, getCode) =>
  class EnhancedComponent extends React.Component {
    state = {
      showInfo: false,
      showCode: false,
    };
    componentDidMount() {
      Prism.highlightAll();
    }
    componentDidUpdate() {
      Prism.highlightAll();
    }

    toggleInfo = () => {
      this.setState(({ showInfo }) => ({
        showInfo: !showInfo,
        showCode: false,
      }));
    };
    toggleCode = () => {
      this.setState(({ showCode }) => ({
        showCode: !showCode,
        showInfo: false,
      }));
    };

    render() {
      const { showCode, showInfo } = this.state;
      return (
        <>
          <Component />
          <section className="info">
            <Button onClick={this.toggleInfo}>
              <Icon type="setting" /> Settings
            </Button>

            <Button onClick={this.toggleCode}>
              <Icon type="code" /> Code
            </Button>

            {showInfo && (
              <>
                <h4 className="info-title">Props to use</h4>
                <ul>
                  {Object.keys(props).map(propName => (
                    <li key={propName}>
                      <Tooltip
                        title={props[propName].description}
                        placement="right"
                      >
                        <span className="info-prop-name">{propName}</span>:{' '}
                      </Tooltip>
                      <span className="info-prop-type">
                        {props[propName].type}
                      </span>
                    </li>
                  ))}
                </ul>
              </>
            )}

            {showCode && (
              <pre>
                <code className="language-jsx">{getCode()}</code>
              </pre>
            )}
          </section>
        </>
      );
    }
  };
