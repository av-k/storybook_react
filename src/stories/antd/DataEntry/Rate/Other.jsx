import React, { Component } from 'react';
import { Rate, Icon } from 'antd';
import 'antd/lib/rate/style';
import 'antd/lib/icon/style';
import { withOptions } from '../../../../common/withOptions';
import * as AllProps from './_DATA';
import { action } from '@storybook/addon-actions';

class Other extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Other Character</h3>
        <Rate
          character={<Icon type="heart" />}
          allowHalf
          onChange={value => action('Rate')(value)}
        />
        <br />
        <Rate
          character="A"
          allowHalf
          style={{ fontSize: 36 }}
          onChange={value => action('Rate')(value)}
        />
        <br />
        <Rate
          character="好"
          allowHalf
          onChange={value => action('Rate')(value)}
        />
      </section>
    );
  }
}

export default withOptions(
  Other,
  AllProps,
  `import React, { Component } from 'react';
import { Rate, Icon } from 'antd';
import 'antd/lib/rate/style';
import 'antd/lib/icon/style';

class Other extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Other Character</h3>
        <Rate character={<Icon type="heart" />} allowHalf />
        <br />
        <Rate character="A" allowHalf style={{ fontSize: 36 }} />
        <br />
        <Rate character="好" allowHalf />
      </section>
    );
  }
}`,
);
