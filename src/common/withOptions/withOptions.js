import React from 'react';
import { Button, Icon, ButtonGroup } from 'antd';
import PropsModal from './PropsModal';
import HighlightedSourceCode from './HighlightedSourceCode';

export default (Component, dataProps, code) =>
  class WithOptions extends React.Component {
    state = {
      propsModal: false,
      sourceCode: false,
    };
    toggle = value => {
      this.setState({ [value]: !this.state[value] });
    };

    render() {
      const { sourceCode, propsModal } = this.state;
      return (
        <>
          <Component />
          <section className="options">
            <Button.Group>
              <Button
                onClick={() => this.toggle('propsModal')}
                style={{ fontSize: 16 }}
              >
                <Icon type="setting" theme="filled" />
              </Button>
              <Button
                onClick={() => this.toggle('sourceCode')}
                style={{ fontSize: 16 }}
              >
                <Icon type="code" theme="filled" />
              </Button>
            </Button.Group>

            <PropsModal
              dataProps={dataProps}
              propsModal={propsModal}
              toggle={() => this.toggle('propsModal')}
            />

            {sourceCode && <HighlightedSourceCode code={code} />}
          </section>
        </>
      );
    }
  };
