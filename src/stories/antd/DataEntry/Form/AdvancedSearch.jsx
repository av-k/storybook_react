import React, { Component } from 'react';
import { Form, Row, Col, Input, Button, Icon } from 'antd';
import 'antd/lib/form/style';
import 'antd/lib/row/style';
import 'antd/lib/input/style';
import 'antd/lib/button/style';
import 'antd/lib/icon/style';
import { withOptions } from '../../../../common/withOptions';
import * as AllProps from './_DATA';

const FormItem = Form.Item;

class AdvancedSearch extends Component {
  state = {
    expand: false,
  };

  render() {
    const style = {
      marginTop: '20px',
      height: '200px',
      background: '#ccc',
      color: '#666',
      textAlign: 'center',
      fontSize: '20px',
      lineHeight: '200px',
    };

    return (
      <section className="example">
        <h3 className="ex-title">Advanced search</h3>
        <Form className="ant-advanced-search-form" onSubmit={this.handleSearch}>
          <Row gutter={24}>{this.getFields()}</Row>
          <Row>
            <Col span={24} style={{ textAlign: 'right' }}>
              <Button type="primary" htmlType="submit">
                Search
              </Button>
              <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
                Clear
              </Button>
              <a style={{ marginLeft: 8, fontSize: 12 }} onClick={this.toggle}>
                Collapse <Icon type={this.state.expand ? 'up' : 'down'} />
              </a>
            </Col>
          </Row>
        </Form>
        <div style={style}>Search Result List</div>
      </section>
    );
  }

  handleSearch = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log('Received values of form: ', values);
    });
  };

  handleReset = () => {
    this.props.form.resetFields();
  };

  toggle = () => {
    const { expand } = this.state;
    this.setState({ expand: !expand });
  };

  getFields() {
    const count = this.state.expand ? 10 : 6;
    const { getFieldDecorator } = this.props.form;
    const children = [];
    for (let i = 0; i < 10; i++) {
      children.push(
        <Col span={8} key={i} style={{ display: i < count ? 'block' : 'none' }}>
          <FormItem label={`Field ${i}`}>
            {getFieldDecorator(`field-${i}`)(
              <Input placeholder="placeholder" />,
            )}
          </FormItem>
        </Col>,
      );
    }
    return children;
  }
}

AdvancedSearch = Form.create()(AdvancedSearch);

export default withOptions(
  AdvancedSearch,
  AllProps,
  `import React, { Component } from 'react';
import { Form, Row, Col, Input, Button, Icon } from 'antd';
import 'antd/lib/form/style';
import 'antd/lib/row/style';
import 'antd/lib/input/style';
import 'antd/lib/button/style';
import 'antd/lib/icon/style';

const FormItem = Form.Item;

class AdvancedSearch extends Component {
	state = {
		expand: false,
	};

	render() {
		const style = {
			marginTop: '20px',
			height: '200px',
			background: '#ccc',
			color: '#666',
			textAlign: 'center',
			fontSize: '20px',
			lineHeight: '200px'
		};

		return (
			<section className="example">
				<h3 className="ex-title">Advanced search</h3>
				<Form className="ant-advanced-search-form" onSubmit={this.handleSearch} >
					<Row gutter={24}>{this.getFields()}</Row>
					<Row>
						<Col span={24} style={{ textAlign: 'right' }}>
							<Button type="primary" htmlType="submit">Search</Button>
							<Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
								Clear
              </Button>
							<a style={{ marginLeft: 8, fontSize: 12 }} onClick={this.toggle}>
								Collapse <Icon type={this.state.expand ? 'up' : 'down'} />
							</a>
						</Col>
					</Row>
				</Form>
				<div style={style}>Search Result List</div>
			</section>
		);
	}

	handleSearch = (e) => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			console.log('Received values of form: ', values);
		});
	};

	handleReset = () => {
		this.props.form.resetFields();
	};

	toggle = () => {
		const { expand } = this.state;
		this.setState({ expand: !expand });
	};

	getFields() {
		const count = this.state.expand ? 10 : 6;
		const { getFieldDecorator } = this.props.form;
		const children = [];
		for (let i = 0; i < 10; i++) {
			children.push(
				<Col span={8} key={i} style={{ display: i < count ? 'block' : 'none' }}>
					<FormItem label={\`Field \${i}\`}>
						{getFieldDecorator(\`field-\${i}\`)(
							<Input placeholder="placeholder" />
						)}
					</FormItem>
				</Col>
			);
		}
		return children;
	}
}

AdvancedSearch = Form.create()(AdvancedSearch);`,
);
