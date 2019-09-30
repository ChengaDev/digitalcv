import React from 'react';
import styled from 'styled-components';

class AdvantangeItem extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return(
            <ItemWrapper icon={this.props.icon}>
                <h4>{this.props.title}</h4>
                <p>{this.props.content}</p>
            </ItemWrapper>
        );
    }
}

const ItemWrapper = styled.div`
    text-align: center;
    box-shadow: 0 0 5px rgba(0,0,0,.4);
    flex-basis: 25%;
    min-width: 300px;
    height: 250px;
    margin-top: 30px;
    padding: 10px;
    background-color: #d5dbe3;
    

    &:before {
        margin-top: -70px;
        display: inline-block;
        width: 100px;
        height: auto;
        min-height: 100px;
        -webkit-border-radius: 50px;
        -moz-border-radius: 50px;
        border-radius: 50px;
        background-color: #6e8dcc;
        box-shadow: 0 0 3px rgba(0,0,0,.7);
        color #fff;
        font-weight: 900;
        font-size: 50px;
        line-height: 100px;        
        font-family: 'Material Icons';
        content: "${props => props.icon}";
    }
    
    :hover {
        &:before {
            animation: bgHover 1s;
            background-color: #6e8dcc;
        }
    }

    & h4 {
        margin: 15px;
    }

    & p {
        font-size: 20px;
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

export default AdvantangeItem;
