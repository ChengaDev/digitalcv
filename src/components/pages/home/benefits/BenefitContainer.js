import React from 'react';
import styled from 'styled-components';

class BenefitSection extends React.Component {
  render() {
    let image = require('./images/paper.jpg');
    return (
      <Section image={image}>
        <Overlay>
          <Title>
            <div>עולם קורות החיים</div>
            <h3>מתקדם לדיגיטל</h3>
          </Title>
        </Overlay>
      </Section>
    );
  }
}

const Section = styled.section`
box-shadow: 0 8px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    margin-bottom: 50px;
    width: 100%;
    margin-top: 100px;
    height: auto;
    min-height: 250px;
    background: url('${props =>
      props.image}') no-repeat center center fixed;    
    background-size: cover;
`;

const Overlay = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  background-color: rgba(10, 32, 68, 0.7);
  height: 100%;
  width: 100%;
  min-height: 250px;
  text-align: center;
`;

const Title = styled.div`
  font-size: ${props => props.theme.fontSizes.fontSize9};
  font-family: ${props => props.theme.fontFamilies.assistant};
  color: ${props => props.theme.colors.white};
  flex-basis: 100%;

  & h3 {
    margin-top: 0;
    margin-bottom: 10px;
    font-size: 70px;
  }
`;

export default BenefitSection;
