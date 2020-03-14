import React from 'react';
import styled, { keyframes } from 'styled-components';

const Offer = props => {
  return (
    <OfferWrapper>
      {props.shouldShowRecommendedBadge && (
        <RecommendedBadge>מומלץ!</RecommendedBadge>
      )}
      <OfferItem>
        <OfferTitle>{props.title}</OfferTitle>
        <Services>
          <Service>דומיין על שמך</Service>
          <Service>עיצוב לבחירתך</Service>
          <Service>טופס צור קשר</Service>
          <Service>שכתוב ושדרוג תוכן</Service>
          <Service>תמיכה במספר שפות</Service>
        </Services>
        <Price>{props.price + '₪'}</Price>
        <OrderNowButton>הזמן עכשיו</OrderNowButton>
      </OfferItem>
    </OfferWrapper>
  );
};

const swing = keyframes`
    15%
    {
        -webkit-transform: translateX(5px);
        transform: translateX(5px);
    }
    30%
    {
        -webkit-transform: translateX(-5px);
        transform: translateX(-5px);
    }
    50%
    {
        -webkit-transform: translateX(3px);
        transform: translateX(3px);
    }
    65%
    {
        -webkit-transform: translateX(-3px);
        transform: translateX(-3px);
    }
    80%
    {
        -webkit-transform: translateX(2px);
        transform: translateX(2px);
    }
    100%
    {
        -webkit-transform: translateX(0);
        transform: translateX(0);
    }
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

  &:hover {
    animation: ${swing} 0.5s ease;
    animation-iteration-count: 1;
  }

  @media (max-width: 1400px) {
    margin-right: 15px;
    margin-left: 15px;
  }
`;

const OfferItem = styled.div`
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

const Services = styled.div`
  margin-top: 30px;
  width: 100%;
`;

const Service = styled.div`
  font-size: 22px;
  margin-top: 18px;
  margin-bottom: 18px;
`;

const Price = styled.div`
  margin-top: 20px;
  font-size: 40px;
  font-weight: bold;
  color: red;
`;

export default Offer;
