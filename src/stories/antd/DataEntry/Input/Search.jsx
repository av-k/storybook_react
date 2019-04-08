import React, { Component } from 'react';
import { Input } from 'antd';
import 'antd/lib/input/style';
import { withOptions } from '../../../../common/withOptions'
import * as AllProps from './_DATA'

const Search = Input.Search;

class SearchBox extends Component {
	render() {
		return (
			<section className="example">
				<h3 className="ex-title">Search</h3>
				<div style={{ width: 350 }}>
					<Search
						placeholder="input search text"
						onSearch={value => console.log(value)}
						style={{ width: 200 }}
					/>
					<br /><br />
					<Search
						placeholder="input search text"
						onSearch={value => console.log(value)}
						enterButton
					/>
					<br /><br />
					<Search placeholder="input search text" enterButton="Search" size="large" />
				</div>
			</section>
		);
	}
}

export default withOptions(SearchBox, AllProps, `import React, { Component } from 'react';
import { Input } from 'antd';
import 'antd/lib/input/style';

const Search = Input.Search;

class SearchBox extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Search</h3>
        <div style={{width: 350}}>
          <Search
            placeholder="input search text"
            onSearch={value => console.log(value)}
            style={{ width: 200 }}
          />
          <br /><br />
          <Search
            placeholder="input search text"
            onSearch={value => console.log(value)}
            enterButton
          />
          <br /><br />
          <Search placeholder="input search text" enterButton="Search" size="large" />
        </div>
      </section>
    );
  }
}`);
