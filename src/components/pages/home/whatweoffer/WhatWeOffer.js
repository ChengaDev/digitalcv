import React from 'react';
import styled from 'styled-components';

class WhatWeOffer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <AdvantageTitle>
          <div>מה אנחנו מציעים?</div>
        </AdvantageTitle>
        <TitleLine />
        <div>מציעים</div>
      </React.Fragment>
    );
  }
}

const AdvantageTitle = styled.h2`
  font-size: ${props => props.theme.fontSizes.fontSize10};
  font-weight: 400;
  text-align: center;
  margin-bottom: 20px;
`;

const TitleLine = styled.div`
  display: block;
  width: 100px;
  height: 0px;
  margin-bottom: 50px;
  border-radius: 3px;
  border-top: 2px solid #9aa2ad;
  border-bottom: 2px solid #9aa2ad;
  margin: 0 auto;
`;

export default WhatWeOffer;
