import React from 'react';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';

class Header extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.logo = require('../images/LOGO_3.png');

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
          <Link to='/'>
            {/* <HeaderTitle>Kuala</HeaderTitle> */}
            <HeaderImage src={this.logo} />
          </Link>
          <HeaderItemsContainer>
            <HeaderItem selected={this.props.location.pathname === '/'}>
              <Link to='/'>בית</Link>
            </HeaderItem>
            <HeaderItem selected={this.props.location.pathname === '/about'}>
              <Link to='/about'>עלינו</Link>
            </HeaderItem>
            <HeaderItem
              selected={this.props.location.pathname === '/portfolio'}
            >
              <Link to='/portfolio'>תיק עבודות</Link>
            </HeaderItem>
            <HeaderItem
              selected={this.props.location.pathname === '/contactus'}
            >
              <Link to='/contactus'>צור קשר</Link>
            </HeaderItem>
          </HeaderItemsContainer>
          <MenuIcon onClick={this.onMenuIconClicked}>
            <i className='material-icons'>menu</i>
          </MenuIcon>
        </HeaderWrapper>
        {
          <MobileNavMenu isOpen={this.state.isMobileMenuOpen}>
            <MobileHeaderItem>
              <Link onClick={this.onLinkClicked} to='/'>
                בית
              </Link>
            </MobileHeaderItem>
            <MobileHeaderItem>
              <Link onClick={this.onLinkClicked} to='/about'>
                עלינו
              </Link>
            </MobileHeaderItem>
            <MobileHeaderItem>
              <Link onClick={this.onLinkClicked} to='/portfolio'>
                תיק עבודות
              </Link>
            </MobileHeaderItem>
            <MobileHeaderItem>
              <Link onClick={this.onLinkClicked} to='/contactus'>
                צור קשר
              </Link>
            </MobileHeaderItem>
          </MobileNavMenu>
        }
      </React.Fragment>
    );
  }
}

const HeaderWrapper = styled.div`
  z-index: 1;
  position: sticky;
  top: 0;
  font-family: ${props => props.theme.fontFamilies.assistant};
  color: #666;
  background-color: ${props => props.theme.colors.white};
  direction: rtl;
  height: 100px;
  padding-right: 10%;
  padding-left: 10%;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.5);
  user-select: none;
`;

// const HeaderTitle = styled.div`
//   color: rgba(10, 32, 68);
//   display: inline-block;
//   line-height: 100px;
//   font-size: ${props => props.theme.fontSizes.fontSize9};
//   height: 100%;
//   font-weight: 600;
//   float: right;
//   cursor: pointer;
//   /* color: #88948b !important; */
// `;

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
  color: #88948b;
  float: left;
  display: none;
  margin-top: 33px;
  cursor: pointer;

  & i {
    font-size: ${props => props.theme.fontSizes.fontSize8};
  }

  @media (max-width: 1000px) {
    display: block;
  }
`;

const MobileNavMenu = styled.div`
  z-index: 1;
  position: fixed;
  top: 100px;
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
  height: 100px;
  background-color: ${props => props.theme.colors.white};
  text-align: center;
  line-height: 100px;
  display: none;
  border-bottom: 1px solid #88948b;

  & a {
    text-decoration: none;
    display: block;
    color: #88948b;
    font-size: ${props => props.theme.fontSizes.fontSize7};

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
  height: 280px;
  margin-top: -90px;
  margin-right: -40px;
`;

export default withRouter(Header);
