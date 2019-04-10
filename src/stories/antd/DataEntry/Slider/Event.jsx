import React, { Component } from 'react';
import { Slider } from 'antd';
import 'antd/lib/slider/style';
import { withOptions } from '../../../../common/withOptions';
import * as AllProps from './_DATA';
import { action } from '@storybook/addon-actions';

class EventSlider extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Event</h3>
        <div>
          <Slider defaultValue={30} onChange={e => action('Value')(e)} />
          <Slider
            range
            step={10}
            defaultValue={[20, 50]}
            onChange={e => action('Value')(e)}
          />
        </div>
      </section>
    );
  }
}

export default withOptions(
  EventSlider,
  AllProps,
  `import React, { Component } from 'react';
import { Slider } from 'antd';
import 'antd/lib/slider/style';

class EventSlider extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Event</h3>
        <div>
          <Slider defaultValue={30}/>
          <Slider range step={10} defaultValue={[20, 50]} />
        </div>
      </section>
    );
  }
}`,
);
