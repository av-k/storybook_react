import React, { Component } from 'react';
import { Rate } from 'antd';
import 'antd/lib/rate/style';

class HalfStar extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Half Star</h3>
        <Rate allowHalf defaultValue={2.5} />
      </section>
    );
  }
}

export default HalfStar;
