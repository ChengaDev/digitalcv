import React from 'react';
import styled from 'styled-components';
import Form from './Form';

const Jumbotron = () => {
  const image = require('../images/computer.jpg');

  return (
    <Section image={image}>
      <Overlay>
        <MainText>
          <h1>נגיש. בועט. מתקדם.</h1>
          <div>
            <strong>קורות חיים מקוונים.</strong> הצטרף עכשיו למהפכה בקורות
            החיים, אל תישאר מסמך!
          </div>
        </MainText>
        <Form />
      </Overlay>
    </Section>
  );
};

const Section = styled.div`
    height: 500px;
    background: url('${props => props.image}') no-repeat center center fixed;
    background-size: cover;
    width: 100%;
    box-shadow: 0 8px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);

    @media (max-width: 1200px) {
        min-height: 400px;
        height: auto;
    }
`;

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  min-height: 400px;
  background-color: rgba(67, 65, 224, 0.5);
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const MainText = styled.div`
  flex-basis: 50%;
  color: ${props => props.theme.colors.white};
  text-align: center;
  order: 1;
  padding: 20px;

  & h1 {
    margin-top: 0;
    margin-bottom: 25px;
    font-size: 75px;
    font-weight: 700;
    line-height: 70px;
  }

  & div {
    font-size: ${props => props.theme.fontSizes.fontSize6};
  }

  @media (max-width: 1200px) {
    font-size: ${props => props.theme.fontSizes.fontSize9};
    flex-basis: 50%;
  }

  @media (max-width: 768px) {
    font-size: ${props => props.theme.fontSizes.fontSize7};
    flex-basis: 100%;
  }
`;

export default Jumbotron;
