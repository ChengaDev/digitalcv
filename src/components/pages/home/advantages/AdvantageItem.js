import React from 'react';
import styled from 'styled-components';

class AdvantangeItem extends React.Component {
  render() {
    return (
      <ItemWrapper icon={this.props.icon}>
        <ItemTitle>{this.props.title}</ItemTitle>
        <ItemContent>{this.props.content}</ItemContent>
      </ItemWrapper>
    );
  }
}

const ItemWrapper = styled.div`
    text-align: center;
    border-radius: 5px;
    box-shadow: 0 -2px 8px 0 rgba(0, 0, 0, 0.25), 0 6px 15px 0 rgba(0, 0, 0, 0.35);
    flex-basis: 25%;
    min-width: 300px;
    margin-top: 30px;
    padding-right: 30px;
    padding-left: 30px;
    background-color: ${props => props.theme.colors.gray1};
    
    &:before {
        margin-top: -70px;
        display: inline-block;
        width: 100px;
        -webkit-border-radius: 50px;
        -moz-border-radius: 50px;
        border-radius: 50px;
        background-color: #6e8dcc;
        box-shadow: 0 0 3px rgba(0,0,0,.7);
        color: ${props => props.theme.colors.white};
        font-weight: 900;
        font-size: ${props => props.theme.fontSizes.fontSize10};
        line-height: 100px;        
        font-family: 'Material Icons';
        content: "${props => props.icon}";
    }
    
    &:hover {
        &:before {
            animation: bgHover 1s;
            background-color: #6e8dcc;
        }
    }

    & p {
        font-size: ${props => props.theme.fontSizes.fontSize4};
        padding-left: 20px;
        padding-right: 20px;
    }

    @keyframes bgHover {
        from {
            background-color: #6e8dcc;
        }
    
        to {
            background-color: #5a6161;
        }
    }

    @media (max-width: 1500px) {
        flex-basis: 27%;
        min-width: 250px;
    }

    @media (max-width: 1000px) {
        flex-basis: 25%;
        min-width: 200px;
    }

    @media (max-width: 768px) {
        flex-basis: 75%;
        margin-top: 80px;
    }
`;

const ItemTitle = styled.div`
  font-size: ${props => props.theme.fontSizes.fontSize8};
  margin-top: 15px;
  margin-bottom: 35px;
  font-weight: bold;
`;

const ItemContent = styled.div`
  font-size: ${props => props.theme.fontSizes.fontSize6};
  position: relative;
  bottom: 25px;
`;

export default AdvantangeItem;
