import React, { Component } from 'react';
import { message, Button } from 'antd';
import 'antd/lib/message/style';
import 'antd/lib/button/style';

class Loading extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Message of loading</h3>
        <Button onClick={this.success}>Display a loading indicator</Button>
      </section>
    );
  }

  success = () => {
    const hide = message.loading('Action in progress..', 0);
    setTimeout(hide, 2500);
  };
}

export default Loading;
