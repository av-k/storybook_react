import React, { Component } from 'react';
import { Pagination } from 'antd';
import 'antd/lib/pagination/style';

class Simple extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Simple mode</h3>
        <Pagination simple defaultCurrent={2} total={50} />
      </section>
    );
  }
}

export default Simple;
