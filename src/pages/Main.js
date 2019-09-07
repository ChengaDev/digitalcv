import React from 'react';
import styled from 'styled-components';

class Main extends React.Component {
    render() {
        return(
            <MainPageWrapper>
                אל תהיה מסמך בערימת קורות חיים!
                <br />
                Don't be  a document!
            </MainPageWrapper>
        );
    };
};

const MainPageWrapper = styled.div`
    font-size: 25px;
    font-family: ${props => props.theme.fontFamilies.assistant};
    font-weight: 400;
`;

export default Main;