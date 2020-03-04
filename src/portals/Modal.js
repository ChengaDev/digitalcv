import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const modalRoot = document.getElementById('root-portal');

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.el = document.createElement('div');
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  renderWithDarkOverlay() {
    return <DarkOverlay>{this.props.children}</DarkOverlay>;
  }

  render() {
    return ReactDOM.createPortal(this.renderWithDarkOverlay(), this.el);
  }
}

const DarkOverlay = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0px;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.8);
`;

export default Modal;
