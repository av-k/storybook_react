import React, { useEffect } from 'react';
import Prism from 'prismjs';
import PrismJsx from 'prismjs/components/prism-jsx.min';

class HighlightedSourceCode extends React.Component {
  componentDidMount() {
    Prism.highlightAll();
  }

  componentDidUpdate() {
    Prism.highlightAll();
  }

  render() {
    return (
      <pre>
        <code className="language-jsx">{this.props.code}</code>
      </pre>
    );
  }
}

export default HighlightedSourceCode;
