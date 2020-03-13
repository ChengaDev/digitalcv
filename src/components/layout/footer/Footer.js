import React from 'react';
import styled from 'styled-components';

class Footer extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.logo = require('../images/LOGO_3.png');
  }

  render() {
    return (
      <FooterContainer>
        <AllRights id='allRightsReserved'>
          כל הזכויות שמורות לקואלה - קורות חיים מקוונים ©
        </AllRights>
        <SocialMediaIcons>
          <SocialIcon>
            <i className='fa fa-instagram'></i>
          </SocialIcon>
          <SocialIcon>
            <i className='fa fa-facebook-official'></i>
          </SocialIcon>
          <SocialIcon>
            <i className='fa fa-at'></i>
          </SocialIcon>
        </SocialMediaIcons>
        <FooterLogoWrapper>
          <FooterImage src={this.logo} />
        </FooterLogoWrapper>
      </FooterContainer>
    );
  }
}

const FooterContainer = styled.div`
  overflow: hidden;
  direction: rtl;
  font-family: ${props => props.theme.fontFamilies.assistant};
  position: relative;
  bottom: 0;
  width: 100%;
  height: 150px;
  background-color: #6e9da2;
  color: ${props => props.theme.colors.white};
  padding-top: 20px;
  padding-bottom: 20px;
`;

const AllRights = styled.div`
  text-align: center;
  width: 100%;
`;

const SocialMediaIcons = styled.div`
  margin-top: 20px;
  width: 100%;
  text-align: center;
  font-size: 25px;
  color: white;
`;

const SocialIcon = styled.div`
  cursor: pointer;
  display: inline-block;
  margin-left: 15px;
  margin-right: 15px;

  &:hover {
    color: gray;
  }
`;

const FooterLogoWrapper = styled.div`
  text-align: center;
`;

const FooterImage = styled.img`
  height: 200px;
  position: relative;
  top: -55px;
  margin: 0 auto;
`;

export default Footer;
