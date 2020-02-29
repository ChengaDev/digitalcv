import React from 'react';
import styled from 'styled-components';

class Footer extends React.Component {
  render() {
    return (
      <FooterContainer>
        <div id='allRightsReserved'>
          כל הזכויות שמורות לקואלה - קורות חיים מקוונים ©
        </div>
      </FooterContainer>
    );
  }
}

const FooterContainer = styled.div`
  font-family: ${props => props.theme.fontFamilies.assistant};
  position: relative;
  bottom: 0;
  width: 100%;
  height: 60px;
  background-color: ${props => props.theme.colors.black};
  color: ${props => props.theme.colors.white};
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
`;

export default Footer;
