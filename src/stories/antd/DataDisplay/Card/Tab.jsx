import React, { Component } from 'react';
import { Card } from 'antd';
import 'antd/lib/card/style';
import { withOptions } from '../../../../common/withOptions';
import * as AllProps from './_DATA';
import { action } from '@storybook/addon-actions';

class Tab extends Component {
  state = {
    key: 'tab1',
    noTitleKey: 'article',
  };

  render() {
    const tabList = [
      {
        key: 'tab1',
        tab: 'tab1',
      },
      {
        key: 'tab2',
        tab: 'tab2',
      },
    ];

    const contentList = {
      tab1: <p>content1</p>,
      tab2: <p>content2</p>,
    };

    const tabListNoTitle = [
      {
        key: 'article',
        tab: 'article',
      },
      {
        key: 'app',
        tab: 'app',
      },
      {
        key: 'project',
        tab: 'project',
      },
    ];

    const contentListNoTitle = {
      article: <p>article content</p>,
      app: <p>app content</p>,
      project: <p>project content</p>,
    };

    return (
      <section className="example">
        <h3 className="ex-title">Width Tabs</h3>

        <div>
          <Card
            style={{ width: '100%' }}
            title="Card title"
            extra={
              <a
                href="http://google.com"
                onClick={e => {
                  e.preventDefault();
                  action('Go to')(e.target.href);
                }}
              >
                More
              </a>
            }
            tabList={tabList}
            onTabChange={key => {
              this.onTabChange(key, 'key');
            }}
          >
            {contentList[this.state.key]}
          </Card>
          <br />
          <br />
          <Card
            style={{ width: '100%' }}
            tabList={tabListNoTitle}
            onTabChange={key => {
              this.onTabChange(key, 'noTitleKey');
            }}
          >
            {contentListNoTitle[this.state.noTitleKey]}
          </Card>
        </div>
      </section>
    );
  }

  onTabChange = (key, type) => this.setState({ [type]: key });
}

export default withOptions(
  Tab,
  AllProps,
  `import React, { Component } from 'react';
import { Card } from 'antd';
import 'antd/lib/card/style';

class Tab extends Component {
  state = {
    key: 'tab1',
    noTitleKey: 'article',
  };

  render() {
    const tabList = [{
      key: 'tab1',
      tab: 'tab1',
    }, {
      key: 'tab2',
      tab: 'tab2',
    }];

    const contentList = {
      tab1: <p>content1</p>,
      tab2: <p>content2</p>,
    };

    const tabListNoTitle = [{
      key: 'article',
      tab: 'article',
    }, {
      key: 'app',
      tab: 'app',
    }, {
      key: 'project',
      tab: 'project',
    }];

    const contentListNoTitle = {
      article: <p>article content</p>,
      app: <p>app content</p>,
      project: <p>project content</p>,
    };

    return (
      <section className="example">
        <h3 className="ex-title">Width Tabs</h3>

        <div>
          <Card
            style={{ width: '100%' }}
            title="Card title"
            extra={<a href="#">More</a>}
            tabList={tabList}
            onTabChange={(key) => { this.onTabChange(key, 'key'); }}
          >
            {contentList[this.state.key]}
          </Card>
          <br /><br />
          <Card
            style={{ width: '100%' }}
            tabList={tabListNoTitle}
            onTabChange={(key) => { this.onTabChange(key, 'noTitleKey'); }}
          >
            {contentListNoTitle[this.state.noTitleKey]}
          </Card>
        </div>
      </section>
    );
  }

  onTabChange = (key, type) => this.setState({ [type]: key });
}`,
);
