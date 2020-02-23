import React from 'react';
import { withRouter } from 'react-router-dom';

class AutoScrollTop extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.contentRef = React.createRef();
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return <div ref={this.contentRef}>{this.props.children}</div>;
  }
}
export default withRouter(AutoScrollTop);
