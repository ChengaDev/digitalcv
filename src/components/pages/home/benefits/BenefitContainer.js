import React from 'react';
import styled from 'styled-components';

class BenefitSection extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        let image = require('./images/paper.jpg');
        return (
            <Section image={image}>
                <Overlay>
                    {/* <Title>מתקדמים לדיגיטל</Title> */}
                </Overlay>
                <Container>
                    
                </Container>
            </Section>
        );
    }
}

const Section = styled.section`
    margin-bottom: 50px;
    width: 100%;
    margin-top: 100px;
    height: auto;
    min-height: 500px;
    background: url('${props => props.image}') no-repeat center center fixed;    
    background-size: cover;
    
`;

const Overlay = styled.div`
    padding: 30px;
    background-color: rgba(10, 32, 68, 0.7);
    height: 100%;
    width: 100%;
    min-height: 500px;
    text-align: center;
`;

const Title = styled.div`
    font-size: 50px;
    font-family: ${props => props.theme.fontFamilies.assistant};
    color: #fff;
    flex-basis: 100%;
`;

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
`;

export default BenefitSection;