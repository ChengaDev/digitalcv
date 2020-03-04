import React from 'react';
import styled from 'styled-components';

class Offer extends React.Component {
  render() {
    return (
      <OfferWrapper>
        {this.props.shouldShowRecommendedBadge && (
          <RecommendedBadge>מומלץ!</RecommendedBadge>
        )}
        <OfferItem>
          <OfferTitle>{this.props.title}</OfferTitle>
          <OrderNowButton>הזמן עכשיו</OrderNowButton>
        </OfferItem>
      </OfferWrapper>
    );
  }
}

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

export default Offer;
