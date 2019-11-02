import React from 'react';
import styled from 'styled-components';
import AdvantagesSection from './advantages/AdvantagesWrapper';
import BenefitSection from './benefits/BenefitContainer';
import Jumbotron from './jumbotron/Jumbotron';

class Main extends React.Component {
    render() {
        return(
            <MainPageWrapper>
                <Jumbotron />      
                <AdvantagesSection />
                <BenefitSection />
            </MainPageWrapper>
        );
    };
};

const MainPageWrapper = styled.div`
    direction: rtl;
    font-size: 25px;
    font-family: ${props => props.theme.fontFamilies.assistant};
    font-weight: 400;
`;

export default Main;