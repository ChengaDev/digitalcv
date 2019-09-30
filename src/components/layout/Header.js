import React from 'react';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';

class Header extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <HeaderWrapper>
                <HeaderTitle>קורות חיים דיגיטליים</HeaderTitle>
                <HeaderItemsContainer>
                    <HeaderItem selected={this.props.location.pathname === '/'}>
                        <Link to='/'>בית</Link>
                    </HeaderItem>
                    <HeaderItem selected={this.props.location.pathname === '/models'}>
                        <Link to='/models'>דוגמאות</Link>
                    </HeaderItem>
                    <HeaderItem selected={this.props.location.pathname === '/about'}>
                        <Link to='/about'>עלינו</Link>
                    </HeaderItem>
                    <HeaderItem selected={this.props.location.pathname === '/contactus'}>
                        <Link to='/contactus'>צור קשר</Link>
                    </HeaderItem>
                </HeaderItemsContainer>
            </HeaderWrapper>
        );
    }
}

const HeaderWrapper = styled.div`
    position: sticky;    
    top: 0;
    font-family: ${props => props.theme.fontFamilies.assistant};
    color: #666;
    background-color: #fff;
    direction: rtl;
    height: 100px;
    padding-right: 10%;
    padding-left: 10%;
    box-shadow: 0 5px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.5);
`;

const HeaderTitle = styled.div`
    display: inline-block;
    line-height: 100px;    
    font-size: 30px;
    height: 100%;
    font-weight: 600;
    float: right;
    cursor: pointer;
`;

const HeaderItemsContainer = styled.div`
    margin-right: 50px;
    height: 100%;
    display: inline-block;
    line-height: 100px;    
    float: left;
`;

const HeaderItem = styled.div`
    user-select: none;
    font-size: 22px;
    float: right;
    height: 100%;
    width: auto;
    min-width: 120px;
    color: #88948b;
    cursor: pointer;
    text-align: center;

    &:hover {
        color: #fff;
        background-color: #88948b;
        border-bottom: 4px solid #3e79d6;
    }

    & a {
        text-decoration: none;
        display:block;
    }

    &:hover a {
        color: #fff;
    }

    border-bottom: ${props => props.selected === true ? '4px solid blueviolet' : 'none'};
    box-sizing: border-box;
`;

export default withRouter(Header);