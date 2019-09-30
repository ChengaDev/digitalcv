import React from 'react';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';

class Header extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.toggleMenuIcon = this.toggleMenuIcon.bind(this);
        this.onMenuIconClicked = this.onMenuIconClicked.bind(this);
        this.onLinkClicked = this.onLinkClicked.bind(this);
 
        this.state = {
            isMobileMenuOpen: false
        };
    }

    onLinkClicked() {
        this.toggleMenuIcon();
    }

    onMenuIconClicked() {
        this.toggleMenuIcon();
    }

    toggleMenuIcon() {
        this.setState({
            isMobileMenuOpen: !this.state.isMobileMenuOpen
        });
    }

    render() {
        return (
            <React.Fragment>
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
                    <MenuIcon onClick={this.onMenuIconClicked}>
                        <i className="material-icons">menu</i>
                    </MenuIcon>
                </HeaderWrapper>
                {
                    <MobileNavMenu isOpen={this.state.isMobileMenuOpen}>
                        <MobileHeaderItem>
                            <Link onClick={this.onLinkClicked} to='/'>בית</Link>
                        </MobileHeaderItem>
                        <MobileHeaderItem>
                            <Link onClick={this.onLinkClicked} to='/models'>דוגמאות</Link>
                        </MobileHeaderItem>
                        <MobileHeaderItem>
                            <Link onClick={this.onLinkClicked} to='/about'>עלינו</Link>
                        </MobileHeaderItem>
                        <MobileHeaderItem>
                            <Link onClick={this.onLinkClicked} to='/contactus'>צור קשר</Link>
                        </MobileHeaderItem>
                    </MobileNavMenu>
                }            
            </React.Fragment>
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
    user-select: none;
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

    @media (max-width: 1000px) {
        display: none;
    }
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
        color: #88948b;
        text-decoration: none;
        display:block;
    }

    &:hover a {
        color: #fff;
    }

    border-bottom: ${props => props.selected === true ? '4px solid blueviolet' : 'none'};
    box-sizing: border-box;
`;

const MenuIcon = styled.div`    
    color: #88948b;
    float: left;
    display: none;
    margin-top: 33px;
    cursor: pointer;

    & i {
        font-size: 34px;
    }

    @media (max-width: 1000px) {
        display: block;
    }
`;

const MobileNavMenu = styled.div`
    position: fixed;
    top: 100px
    width: 100%;
    max-height: ${props => props.isOpen ? '500px' : '0'};
    box-shadow: 0 5px 8px 0 rgba(0,0,0,0.2);
    transition: max-height 0.5s ease-out;
    overflow: hidden;
    border-top: 1px solid #88948b;
`;

const MobileHeaderItem = styled.span`
    font-family: ${props => props.theme.fontFamilies.assistant};
    width: 100%;
    height: 100px;
    background-color: #fff;    
    text-align: center;
    line-height: 100px;
    display: none;
    border-bottom: 1px solid #88948b;
    
    & a {
        text-decoration: none;
        display: block;
        color: #88948b;
        font-size: 30px;

        &: hover {
            background-color: #88948b;
            color: #fff;
        }
    }

    @media (max-width: 1000px) {
        display: block;
    }
`;

export default withRouter(Header);