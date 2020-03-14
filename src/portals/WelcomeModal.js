import Modal from './Modal';
import React from 'react';
import styled from 'styled-components';

const WelcomeModal = props => {
  return (
    <Modal>
      <ModalWrapper>
        <div>ברוכים הבאים לקואלה!</div>
        <ModalText>
          מתרגשים להיות באוויר :)
          <br /> מבצעי הכרות מטורפים ללקוחות חדשים, מהרו להצטרף ולהפוך למקוונים!
        </ModalText>
        <CloseButton onClick={props.onCloseClick}>סגור</CloseButton>
      </ModalWrapper>
    </Modal>
  );
};

const ModalWrapper = styled.div`
  direction: rtl;
  text-align: center;
  font-family: ${props => props.theme.fontFamilies.assistant};
  font-size: ${props => props.theme.fontSizes.fontSize9};
  height: 300px;
  width: 500px;
  background-color: ${props => props.theme.colors.white};
  position: relative;
  margin: 0 auto;
  margin-top: 200px;
  padding: 30px;
  padding-right: 40px;
  padding-left: 40px;
  border-radius: 5px;
`;

const ModalText = styled.div`
  font-size: ${props => props.theme.fontSizes.fontSize6};
  margin: 0 auto;
  position: relative;
  margin-top: 30px;
`;

const CloseButton = styled.div`
  border-radius: 5px;
  color: ${props => props.theme.colors.white};
  cursor: pointer;
  height: 50px;
  line-height: 50px;
  width: 100px;
  font-size: ${props => props.theme.fontSizes.fontSize4};
  position: relative;
  margin: 0 auto;
  margin-top: 60px;
  background-color: ${props => props.theme.colors.gray2};

  &:hover {
    background-color: ${props => props.theme.colors.gray3};
  }
`;

export default WelcomeModal;
