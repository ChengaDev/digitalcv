import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled, { keyframes } from 'styled-components';

const Modal = props => {
  const el = document.createElement('div');
  const modalRoot = document.getElementById('root-portal');

  useEffect(() => {
    modalRoot.appendChild(el);

    // Specify how to clean up after this effect:
    return () => modalRoot.removeChild(el);
  });

  return ReactDOM.createPortal(<DarkOverlay>{props.children}</DarkOverlay>, el);
};

const show = keyframes`
  from {
    transform: scale(0);
    opacity: 0;
    z-index: -1;
  } 
  to {
    transform: scale(1);
    opacity: 1;
    z-index: 2;
  }
`;

const DarkOverlay = styled.div`
  /* animation: ${show} 0.3s linear; */
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0px;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.8);
`;

export default Modal;
