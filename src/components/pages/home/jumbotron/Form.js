import React from 'react';
import styled from 'styled-components';

class Form extends React.Component {
    render() {
        return(
            <MiniForm>
                <div>מלא פרטים והצטרף למהפכה!</div>
                <div>
                    <input type="text" placeholder="שם פרטי" />
                    <input type="text" placeholder="שם משפחה" />
                    <input type="text" placeholder="אימייל" />
                    <button>שלח</button>
                </div>
            </MiniForm>
        );
    }
}

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

export default Form;