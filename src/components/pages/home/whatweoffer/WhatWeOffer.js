import React from 'react';
import styled from 'styled-components';

class WhatWeOfferSection extends React.Component {
  render() {
    return (
      <OffersSection>
        <Title>
          <div>מה אנחנו מציעים?</div>
        </Title>
        <TitleLine />
        <Offers>
          <OfferWrapper>
            <Offer>
              <OfferTitle>חבילת פרימיום</OfferTitle>
              <OrderNowButton>הזמן עכשיו</OrderNowButton>
            </Offer>
          </OfferWrapper>
          <OfferWrapper>
            <RecommendedBadge>מומלץ!</RecommendedBadge>
            <Offer>
              <OfferTitle>חבילה משודרגת</OfferTitle>
              <OrderNowButton>הזמן עכשיו</OrderNowButton>
            </Offer>
          </OfferWrapper>
          <OfferWrapper>
            <Offer>
              <OfferTitle>חבילת בסיס</OfferTitle>
              <OrderNowButton>הזמן עכשיו</OrderNowButton>
            </Offer>
          </OfferWrapper>
        </Offers>
      </OffersSection>
    );
  }
}

const Title = styled.h2`
  font-size: ${props => props.theme.fontSizes.fontSize10};
  font-weight: 400;
  text-align: center;
  margin-bottom: 20px;
`;

const TitleLine = styled.div`
  display: block;
  width: 100px;
  height: 0px;
  border-radius: 3px;
  border-top: 2px solid #9aa2ad;
  border-bottom: 2px solid #9aa2ad;
  margin: 0 auto;
`;

const OffersSection = styled.div`
  padding-right: 30px;
  padding-left: 30px;
  margin-top: 30px;
  margin: 0 auto;
  margin-bottom: 70px;
  width: 80%;
  flex-direction: row;
  flex-wrap: wrap;

  @media (max-width: 1600px) {
    width: 90%;
  }
`;

const Offers = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: flex-start;
`;

const OfferWrapper = styled.div`
  cursor: pointer;
  position: relative;
  background-color: ${props => props.theme.colors.gray1};
  margin-top: 50px;
  margin-right: 30px;
  margin-left: 30px;
  height: 500px;
  width: 350px;
  border-radius: 5px;
  box-shadow: 0 -2px 8px 0 rgba(0, 0, 0, 0.25), 0 6px 15px 0 rgba(0, 0, 0, 0.35);
  position: relative;
  overflow: hidden;

  @media (max-width: 1400px) {
    margin-right: 15px;
    margin-left: 15px;
  }
`;

const Offer = styled.div`
  padding-top: 30px;
  text-align: center;
`;

const RecommendedBadge = styled.div`
  position: absolute;
  font-weight: bold;
  background-color: ${props => props.theme.colors.red1};
  line-height: 25px;
  color: white;
  font-size: ${props => props.theme.fontSizes.fontSize4};
  width: 125px;
  text-align: center;
  transform: rotate(-45deg);
  top: 23px;
  left: -29px;
`;

const OfferTitle = styled.div`
  font-size: ${props => props.theme.fontSizes.fontSize8};
`;

const OrderNowButton = styled.div`
  position: absolute;
  bottom: 50px;
  height: 33px;
  width: 150px;
  background-color: ${props => props.theme.colors.green1};
  left: 0;
  right: 0;
  font-size: ${props => props.theme.fontSizes.fontSize4};
  color: white;
  line-height: 30px;
  border-radius: 5px;
  margin: 0 auto;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.7);
`;

export default WhatWeOfferSection;
