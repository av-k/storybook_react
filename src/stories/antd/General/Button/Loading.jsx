import React, { Component, Fragment } from 'react';
import { Button } from 'antd';
import 'antd/lib/button/style';

class Loading extends Component {
  state = {
    first: false,
    power: false
  };

  render() {
    return (
      <Fragment>
        <h3 className="ex-title">Loading</h3>

        <div>
          <Button type="primary" loading>
            Loading
          </Button>

          <Button type="primary" size="small" className="ml20" loading>
            Loading
          </Button>

          <br /><br />

          <Button type="primary" loading={this.state.first} onClick={() => this.setState({ first: true })}>
            Click me!
          </Button>

          <Button className="ml20" type="primary" icon="poweroff" loading={this.state.power} onClick={() => this.setState({ power: true })}>
            Click me!
          </Button>

          <br /><br />

          <Button shape="circle" loading />

          <Button className="ml20" type="primary" shape="circle" loading />
        </div>
      </Fragment>
    );
  }
}

export default Loading;
