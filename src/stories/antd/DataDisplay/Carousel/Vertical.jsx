import React, { Component } from 'react';
import { Carousel } from 'antd';
import 'antd/lib/carousel/style';
import { withOptions } from '../../../../common/withOptions';
import * as AllProps from './_DATA';

class Vertical extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Vertical</h3>
        <Carousel vertical>
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
  Vertical,
  AllProps,
  `import React, { Component } from 'react';
import { Carousel } from 'antd';
import 'antd/lib/carousel/style';

class Vertical extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Vertical</h3>
        <Carousel vertical>
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
