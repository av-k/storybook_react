import React, { Component } from 'react';
import { Card } from 'antd';
import 'antd/lib/card/style';
import { withOptions } from '../../../../common/withOptions';
import * as AllProps from './_DATA';

class Grid extends Component {
  render() {
    const gridStyle = {
      width: '25%',
      textAlign: 'center',
    };

    return (
      <section className="example">
        <h3 className="ex-title">Grid card</h3>
        <Card title="Card Title">
          <Card.Grid style={gridStyle}>Content</Card.Grid>
          <Card.Grid style={gridStyle}>Content</Card.Grid>
          <Card.Grid style={gridStyle}>Content</Card.Grid>
          <Card.Grid style={gridStyle}>Content</Card.Grid>
          <Card.Grid style={gridStyle}>Content</Card.Grid>
          <Card.Grid style={gridStyle}>Content</Card.Grid>
          <Card.Grid style={gridStyle}>Content</Card.Grid>
        </Card>
      </section>
    );
  }
}

export default withOptions(
  Grid,
  AllProps,
  `import React, { Component } from 'react';
import { Card } from 'antd';
import 'antd/lib/card/style';

class Grid extends Component {
  render() {
    const gridStyle = {
      width: '25%',
      textAlign: 'center',
    };

    return (
      <section className="example">
        <h3 className="ex-title">Grid card</h3>
        <Card title="Card Title">
          <Card.Grid style={gridStyle}>Content</Card.Grid>
          <Card.Grid style={gridStyle}>Content</Card.Grid>
          <Card.Grid style={gridStyle}>Content</Card.Grid>
          <Card.Grid style={gridStyle}>Content</Card.Grid>
          <Card.Grid style={gridStyle}>Content</Card.Grid>
          <Card.Grid style={gridStyle}>Content</Card.Grid>
          <Card.Grid style={gridStyle}>Content</Card.Grid>
        </Card>
      </section>
    );
  }
}`,
);
