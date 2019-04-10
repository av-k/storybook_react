import React, { Component } from 'react';
import { Carousel } from 'antd';
import 'antd/lib/carousel/style';
import { withOptions } from '../../../../common/withOptions';
import * as AllProps from './_DATA';
import { action } from '@storybook/addon-actions';

const onChange = a => {
  console.log(a);
  action('Slide #')(a + 1);
};

class FadeIn extends Component {
  state = {};

  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Fade In</h3>
        <Carousel effect="fade" afterChange={onChange}>
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
  FadeIn,
  AllProps,
  `import React, { Component } from 'react';
import { Carousel } from 'antd';
import 'antd/lib/carousel/style';

class FadeIn extends Component {
  state = {};

  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Fade In</h3>
        <Carousel effect="fade">
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
