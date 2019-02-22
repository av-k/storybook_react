import React, { Component } from 'react';
import { Pagination } from 'antd';
import 'antd/lib/pagination/style';

class Changer extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Change pagination</h3>
        <Pagination showSizeChanger defaultCurrent={3} total={500} />
      </section>
    );
  }
}

export default Changer;
