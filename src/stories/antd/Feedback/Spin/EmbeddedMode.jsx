import React, { Component } from 'react';
import { Spin, Switch, Alert } from 'antd';
import 'antd/lib/spin/style';
import 'antd/lib/switch/style';
import 'antd/lib/alert/style';
import { withOptions } from '../../../../common/withOptions';
import * as AllProps from './_DATA';

class EmbeddedMode extends Component {
  state = { loading: false };

  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Embedded mode</h3>
        <Spin spinning={this.state.loading}>
          <Alert
            message="Alert message title"
            description="Further details about the context of this alert."
            type="info"
          />
        </Spin>
        <div style={{ marginTop: 16 }}>
          Loading state：
          <Switch checked={this.state.loading} onChange={this.toggle} />
        </div>
      </section>
    );
  }

  toggle = value => this.setState({ loading: value });
}

export default withOptions(
  EmbeddedMode,
  AllProps,
  `import React, { Component } from 'react';
import { Spin, Switch, Alert } from 'antd';
import 'antd/lib/spin/style';
import 'antd/lib/switch/style';
import 'antd/lib/alert/style';

class EmbeddedMode extends Component {
  state = { loading: false };

  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Embedded mode</h3>
        <Spin spinning={this.state.loading}>
          <Alert
            message="Alert message title"
            description="Further details about the context of this alert."
            type="info"
          />
        </Spin>
        <div style={{ marginTop: 16 }}>
          Loading state：<Switch checked={this.state.loading} onChange={this.toggle} />
        </div>
      </section>
    );
  }

  toggle = value => this.setState({ loading: value });
}`,
);
