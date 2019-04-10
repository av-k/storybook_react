import React, { Component } from 'react';
import { Popconfirm } from 'antd';
import 'antd/lib/popconfirm/style';
import { withOptions } from '../../../../common/withOptions';
import * as AllProps from './_DATA';

class LocaleText extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Locale Text</h3>
        <Popconfirm title="Are you sure？" okText="Yes" cancelText="No">
          <a href="#">Delete</a>
        </Popconfirm>
      </section>
    );
  }
}

export default withOptions(
  LocaleText,
  AllProps,
  `import React, { Component } from 'react';
import { Popconfirm } from 'antd';
import 'antd/lib/popconfirm/style';

class LocaleText extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Locale Text</h3>
        <Popconfirm title="Are you sure？" okText="Yes" cancelText="No">
          <a href="#">Delete</a>
        </Popconfirm>
      </section>
    );
  }
}`,
);
