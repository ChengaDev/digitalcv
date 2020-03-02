import React from 'react';
import styled from 'styled-components';
import Jumbotron from './jumbotron/Jumbotron';
import AdvantagesSection from './advantages/AdvantagesWrapper';
import DigitalTransformSection from './benefits/DigitalTransformSection';
import WhatWeOfferSection from './whatweoffer/WhatWeOffer';

class Main extends React.Component {
  render() {
    return (
      <MainPageWrapper>
        <Jumbotron />
        <AdvantagesSection />
        <DigitalTransformSection />
        <WhatWeOfferSection />
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
