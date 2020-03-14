import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';
import { isMobile } from 'react-device-detect';

const Header = props => {
  const logo = require('../images/LOGO_3.png');
  const links = [
    {
      path: '/',
      text: 'בית'
    },
    {
      path: '/about',
      text: 'עלינו'
    },
    {
      path: '/portfolio',
      text: 'תיק עבודות'
    },
    {
      path: '/contactus',
      text: 'צור קשר'
    }
  ];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const onHeaderLogoClicked = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleMenuIcon = () => {
    setIsMobileMenuOpen(prevIsMobileMenuOpen => !prevIsMobileMenuOpen);
  };

  const onLinkClicked = () => {
    toggleMenuIcon();
  };

  const onMenuIconClicked = () => {
    toggleMenuIcon();
  };

  return (
    <React.Fragment>
      <HeaderWrapper isMobile={isMobile}>
        <Link onClick={onHeaderLogoClicked} to='/'>
          <HeaderImage isMobile={isMobile} src={logo} />
        </Link>
        <HeaderItemsContainer isMobile={isMobile}>
          {links.map(link => {
            return (
              <HeaderItem
                key={link.path}
                selected={props.location.pathname === link.path}
              >
                <Link to={link.path}>{link.text}</Link>
              </HeaderItem>
            );
          })}
        </HeaderItemsContainer>
        <MenuIcon onClick={onMenuIconClicked}>
          <i className='material-icons'>menu</i>
        </MenuIcon>
      </HeaderWrapper>
      {isMobile && (
        <MobileNavMenu isOpen={isMobileMenuOpen}>
          {links.map(link => {
            return (
              <MobileHeaderItem key={link.path}>
                <Link onClick={onLinkClicked} to={link.path}>
                  {link.text}
                </Link>
              </MobileHeaderItem>
            );
          })}
        </MobileNavMenu>
      )}
    </React.Fragment>
  );
};

const HeaderWrapper = styled.div`
  user-select: none;
  z-index: 1;
  position: sticky;
  top: 0;
  font-family: ${props => props.theme.fontFamilies.assistant};
  color: #666;
  background-color: ${props => props.theme.colors.white};
  direction: rtl;
  height: ${props => (props.isMobile ? '80px' : '100px')};
  padding-right: 10%;
  padding-left: 10%;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.5);
  user-select: none;
`;

const HeaderItemsContainer = styled.div`
  margin-right: 50px;
  height: 100%;
  display: inline-block;
  line-height: ${props => (props.isMobile ? '80px' : '100px')};
  float: left;

  @media (max-width: 1000px) {
    display: none;
  }
`;

const HeaderItem = styled.div`
  user-select: none;
  font-size: ${props => props.theme.fontSizes.fontSize5};
  float: right;
  height: 100%;
  width: auto;
  min-width: 120px;
  color: #88948b;
  cursor: pointer;
  text-align: center;

  &:hover {
    color: ${props => props.theme.colors.white};
    background-color: #88948b;
    border-bottom: 4px solid #3e79d6;
  }

  & a {
    color: #88948b;
    text-decoration: none;
    display: block;
  }

  &:hover a {
    color: ${props => props.theme.colors.white};
  }

  border-bottom: ${props =>
    props.selected === true ? '4px solid blueviolet' : 'none'};
  box-sizing: border-box;
`;

const MenuIcon = styled.div`
  user-select: none;
  color: #88948b;
  float: left;
  display: none;
  margin-top: 21px;
  cursor: pointer;

  & i {
    font-size: ${props => props.theme.fontSizes.fontSize9};
  }

  @media (max-width: 1000px) {
    display: block;
  }
`;

const MobileNavMenu = styled.div`
  z-index: 1;
  position: fixed;
  top: 80px;
  width: 100%;
  max-height: ${props => (props.isOpen ? '500px' : '0')};
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2);
  transition: max-height 0.5s ease-out;
  overflow: hidden;
  border-top: 1px solid #88948b;
`;

const MobileHeaderItem = styled.span`
  font-family: ${props => props.theme.fontFamilies.assistant};
  width: 100%;
  height: 60px;
  background-color: ${props => props.theme.colors.white};
  text-align: center;
  line-height: 60px;
  display: none;
  border-bottom: 1px solid #88948b;

  & a {
    text-decoration: none;
    display: block;
    color: #88948b;
    font-size: ${props => props.theme.fontSizes.fontSize6};

    & hover {
      background-color: #88948b;
      color: ${props => props.theme.colors.white};
    }
  }

  @media (max-width: 1000px) {
    display: block;
  }
`;

const HeaderImage = styled.img`
  height: ${props => (props.isMobile ? '215px' : '280px')};
  margin-top: ${props => (props.isMobile ? '-65px' : '-90px')};
  margin-right: -41px;
`;

export default withRouter(React.memo(Header));
