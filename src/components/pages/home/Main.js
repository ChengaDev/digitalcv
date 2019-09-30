import React from 'react';
import styled from 'styled-components';
import AdvantagesSection from './advantages/AdvantagesWrapper';
import BenefitSection from './benefits/BenefitContainer';

class Main extends React.Component {
    render() {
        let image = require('./images/computer.jpg');

        return(
            <MainPageWrapper>
                <TopLevelBox image={image}>
                    <Overlay>
                        <MainText>
                            <h1>נגיש. בועט. מתקדם.</h1>
                            <div>הצטרף עכשיו למהפכה בהגשת קורות החיים, ורכוש אתר עם קורות החיים שלך, תחת דומיין עם השם שלך.</div>
                        </MainText>    
                        <MiniForm>
                            <div>מלא פרטים והצטרף למהפכה!</div>
                            <div>
                                <input type="text" placeholder="שם פרטי" />
                                <input type="text" placeholder="שם משפחה" />
                                <input type="text" placeholder="אימייל" />
                                <button>שלח</button>
                            </div>
                        </MiniForm>
                    </Overlay>                    
                </TopLevelBox>      
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

const TopLevelBox = styled.div`
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
    color: #fff;       
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
        font-size: 25px;
    }

    @media (max-width: 1200px) {
        font-size: 40px;
        flex-basis: 50%;
    }

    @media (max-width: 768px) {
        font-size: 30px;
        flex-basis: 100%;
    }
`;

const MiniForm = styled.div`
    flex-basis: 15%;
    order: 2;
    height: 300px;
    min-width: 280px;
    background-color: rgba(0,0,0,0.8);
    border: 1px #fff solid;
    box-shadow: 0 5px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.5);
    margin: 25px;
    color: #fff;
    text-align: center;
    padding: 30px 50px 30px 50px;

    & input {
        font-family: ${props => props.theme.fontFamilies.assistant};
        height: 35px;
        width: 100%;
        margin-top: 25px;
        font-size: 20px;
        text-indent: 15px;
    }

    & button {
        font-family: ${props => props.theme.fontFamilies.assistant};
        margin-top: 25px;
        width: 100%;
        color: #fff;
        background-color: #1a7dd7;
        border: none;
        line-height: 10px;
        font-size: 25px;  
        font-weight: 400;
        height: 40px;   
        cursor: pointer;  
        animation: anim 2s infinite; 
        -webkit-animation: anim 2s infinite;

        :hover {
            transition: background-color 300ms linear;
            background-color: #7499d4;
        }

        @keyframes anim {
            0% {
                background-color: #1a7dd7;
            }
        
            50% {
                background-color: #003a94;
            }
        
            100% {
                background-color: #1a7dd7;
            }
        }
    }
`;

export default Main;