import React, { Component } from 'react';
import { Carousel } from 'antd';
import { withOptions } from '../../../../common/withOptions';
import * as AllProps from './_DATA';
import { action } from '@storybook/addon-actions';

const onChange = a => {
  console.log(a);
  action('Slide #')(a + 1);
};

class Basic extends Component {
  state = {};

  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Basic</h3>
        <Carousel afterChange={onChange}>
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
  Basic,
  AllProps,
  `import React, { Component } from 'react';
import { Carousel } from 'antd';

class Basic extends Component {
  state = {};

  render() {
    return (
      <section className="example">
				<h3 className="ex-title">Basic</h3>
				<Carousel afterChange={onChange}>
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
}`,
);
