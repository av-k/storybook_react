import React, { Component } from 'react';
import { Carousel } from 'antd';
import 'antd/lib/carousel/style';
import { withOptions } from '../../../../common/withOptions';
import * as AllProps from './_DATA';

class Auto extends Component {
  state = {};

  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Scroll automatically</h3>
        <Carousel autoplay>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
        </Carousel>
      </section>
    );
  }
}

export default withOptions(
  Auto,
  AllProps,
  `import React, { Component } from 'react';
import { Carousel } from 'antd';
import 'antd/lib/carousel/style';

class Auto extends Component {
  state = {};

  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Scroll automatically</h3>
        <Carousel autoplay>
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
        </Carousel>
      </section>
    );
  }
}`,
);
