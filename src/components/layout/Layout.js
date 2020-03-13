import React from 'react';
import WelcomeModal from '../../portals/WelcomeModal';
import { isMobile } from 'react-device-detect';

class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shouldDisplayWelcomeModal: true
    };

    this.onCloseModalClick = this.onCloseModalClick.bind(this);
  }

  onCloseModalClick() {
    this.setState({
      shouldDisplayWelcomeModal: false
    });
  }

  render() {
    return (
      <React.Fragment>
        {!isMobile && this.state.shouldDisplayWelcomeModal && (
          <WelcomeModal onCloseClick={this.onCloseModalClick} />
        )}
        {this.props.children}
      </React.Fragment>
    );
  }
}

export default Layout;
