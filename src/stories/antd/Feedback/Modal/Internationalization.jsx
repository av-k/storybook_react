import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import 'antd/lib/modal/style';
import 'antd/lib/button/style';
import { withOptions } from '../../../../common/withOptions';
import * as AllProps from './_DATA';

function confirm() {
  Modal.confirm({
    title: 'Confirm',
    content: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
      ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
      in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
      Excepteur sint occaecat cupidatat non proident, sunt in culpa 
      qui officia deserunt mollit anim id est laborum.
    `,
    okText: 'OK',
    cancelText: 'CANCEL',
  });
}

class Internationalization extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Internationalization</h3>
        <Button onClick={confirm}>Confirm</Button>
      </section>
    );
  }
}

export default withOptions(
  Internationalization,
  AllProps,
  `import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import 'antd/lib/modal/style';
import 'antd/lib/button/style';

function confirm() {
  Modal.confirm({
    title: 'Confirm',
    content: \`
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
      ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
      in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
      Excepteur sint occaecat cupidatat non proident, sunt in culpa 
      qui officia deserunt mollit anim id est laborum.
    \`,
    okText: 'OK',
    cancelText: 'CANCEL'
  });
}

class Internationalization extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Internationalization</h3>
        <Button onClick={confirm}>Confirm</Button>
      </section>
    );
  }
}`,
);
