import React from 'react';
import styled from 'styled-components';
import AdvantagesSection from './advantages/AdvantagesWrapper';
import BenefitSection from './benefits/BenefitContainer';
import Jumbotron from './jumbotron/Jumbotron';
import WhatWeOffer from './whatweoffer/WhatWeOffer';

class Main extends React.Component {
  render() {
    return (
      <MainPageWrapper>
        <Jumbotron />
        <AdvantagesSection />
        <BenefitSection />
        <WhatWeOffer />
      </MainPageWrapper>
    );
  }
}

const MainPageWrapper = styled.div`
  direction: rtl;
  font-size: ${props => props.theme.fontSizes.fontSize6};
  font-family: ${props => props.theme.fontFamilies.assistant};
  font-weight: 400;
`;

export default Main;
