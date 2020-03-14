import React from 'react';
import styled from 'styled-components';
import Offer from './Offer';

const WhatWeOfferSection = () => {
  const offers = [
    {
      title: 'חבילת בסיס',
      price: '100',
      shouldShowRecommendedBadge: false
    },
    {
      title: 'חבילה משודרגת',
      price: '500',
      shouldShowRecommendedBadge: true
    },
    {
      title: 'חבילת פרימיום',
      price: '1,000',
      shouldShowRecommendedBadge: false
    }
  ];

  return (
    <OffersSection>
      <Title>
        <div>מה אנחנו מציעים?</div>
      </Title>
      <TitleLine />
      <Offers>
        {offers.map(offer => {
          return (
            <Offer
              key={offer.title}
              price={offer.price}
              title={offer.title}
              shouldShowRecommendedBadge={offer.shouldShowRecommendedBadge}
            />
          );
        })}
      </Offers>
    </OffersSection>
  );
};

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

export default WhatWeOfferSection;
