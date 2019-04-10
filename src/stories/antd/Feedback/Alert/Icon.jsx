import React, { Component } from 'react';
import { Alert } from 'antd';
import 'antd/lib/alert/style';
import { withOptions } from '../../../../common/withOptions';
import * as AllProps from './_DATA';

class Icon extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Icon</h3>
        <Alert
          className="mb20"
          message="Success Tips"
          type="success"
          showIcon
        />
        <Alert
          className="mb20"
          message="Informational Notes"
          type="info"
          showIcon
        />
        <Alert className="mb20" message="Warning" type="warning" showIcon />
        <Alert className="mb20" message="Error" type="error" showIcon />
        <Alert
          className="mb20"
          message="Success Tips"
          description="Detailed description and advices about successful copywriting."
          type="success"
          showIcon
        />
        <Alert
          className="mb20"
          message="Informational Notes"
          description="Additional description and informations about copywriting."
          type="info"
          showIcon
        />
        <Alert
          className="mb20"
          message="Warning"
          description="This is a warning notice about copywriting."
          type="warning"
          showIcon
        />
        <Alert
          message="Error"
          description="This is an error message about copywriting."
          type="error"
          showIcon
        />
      </section>
    );
  }
}

export default withOptions(
  Icon,
  AllProps,
  `import React, { Component } from 'react';
import { Alert } from 'antd';
import 'antd/lib/alert/style';

class Icon extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Icon</h3>
        <Alert className="mb20" message="Success Tips" type="success" showIcon />
        <Alert className="mb20" message="Informational Notes" type="info" showIcon />
        <Alert className="mb20" message="Warning" type="warning" showIcon />
        <Alert className="mb20" message="Error" type="error" showIcon />
        <Alert
          className="mb20"
          message="Success Tips"
          description="Detailed description and advices about successful copywriting."
          type="success"
          showIcon
        />
        <Alert
          className="mb20"
          message="Informational Notes"
          description="Additional description and informations about copywriting."
          type="info"
          showIcon
        />
        <Alert
          className="mb20"
          message="Warning"
          description="This is a warning notice about copywriting."
          type="warning"
          showIcon
        />
        <Alert
          message="Error"
          description="This is an error message about copywriting."
          type="error"
          showIcon
        />
      </section>
    );
  }
}`,
);
