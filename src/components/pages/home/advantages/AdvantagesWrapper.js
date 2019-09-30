import React from 'react';
import AdvantageItem from './AdvantageItem';
import styled from 'styled-components';

class AdvantagesSection extends React.Component {
    render () {
        return (
            <AdvantagesWrapper>
                <AdvantageTitle>
                    <div>למה זה עדיף?</div>                                                
                </AdvantageTitle>
                <TitleLine />
                <AdvantangesContainer>
                    <AdvantageItem icon="eco" title="אקולוגי" content="לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן קוואזי במר מודוף." />
                    <AdvantageItem icon="wifi" title="נגיש מכל מקום" content="לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן קוואזי במר מודוף." />
                    <AdvantageItem icon="whatshot" title="מרשים יותר" content="לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן קוואזי במר מודוף." />
                </AdvantangesContainer>          
            </AdvantagesWrapper>
        );
    };
}

const AdvantangesContainer = styled.div`
    width: 70%;
    margin: 0 auto;
    margin-top: 50px;
    margin-bottom: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media (max-width: 1400px) {
        width: 90%;
        flex-wrap: wrap;
    }

    @media (max-width: 1000px) {
        width: 100%;
        flex-wrap: wrap;
    }


    @media (max-width: 768px) {
        width: 90%;
        flex-wrap: wrap;
        margin-top: 0;
    }
`;

const AdvantagesWrapper = styled.section`
    width: 100%;
    margin-top: 50px;
`;

const AdvantageTitle = styled.h2`
    font-size: 50px;
    font-weight: 400;
    text-align: center;    
    margin-bottom: 20px;
`;

const TitleLine = styled.div`
    display: block;
    width: 100px;
    height: 0px;
    margin-bottom: 50px;
    border-radius: 3px;
    border-top: 2px solid #9aa2ad;
    border-bottom: 2px solid #9aa2ad;
    margin: 0 auto;
`;

export default AdvantagesSection;