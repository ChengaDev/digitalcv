import React from 'react';
import styled from 'styled-components';
import imagechen from './images/workitemchen.png';

class PortfolioPage extends React.Component {
  render() {
    return (
      <Wrapper>
        <PageTitle>תיק עבודות</PageTitle>
        <WorkItemsContainer>
          <WorkItemWrapper>
            <WorkItem>
              <WorkItemLink target='_blank' href='https://www.chengazit.co.il'>
                <WorkItemImage src={imagechen} />
                <DarkOverlay />
              </WorkItemLink>
            </WorkItem>
          </WorkItemWrapper>
          <WorkItemWrapper>
            <WorkItem>
              <WorkItemLink target='_blank' href='https://www.chengazit.co.il'>
                <WorkItemImage src={imagechen} />
                <DarkOverlay />
              </WorkItemLink>
            </WorkItem>
          </WorkItemWrapper>
          <WorkItemWrapper>
            <WorkItem>
              <WorkItemLink target='_blank' href='https://www.chengazit.co.il'>
                <WorkItemImage src={imagechen} />
                <DarkOverlay />
              </WorkItemLink>
            </WorkItem>
          </WorkItemWrapper>
        </WorkItemsContainer>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  font-family: ${props => props.theme.fontFamilies.assistant};
  padding: 30px;
`;

const PageTitle = styled.h1`
  margin-bottom: 50px;
  text-align: center;
`;

const WorkItemsContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1000px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 1000px) {
    justify-content: center;
  }
`;

const WorkItemWrapper = styled.div`
  align-self: center;
  height: 300px;
  text-align: center;
  flex-basis: 43%;
  margin-bottom: 50px;
  width: 100%;

  @media (max-width: 1000px) {
    flex-basis: 100%;
  }
`;

const WorkItem = styled.div`
  margin: 0 auto;
  width: 430px;
  height: 100%;
  box-shadow: 0px 2px 15px -2px rgba(0, 0, 0, 0.75);
  cursor: pointer;
  position: relative;
`;

const WorkItemLink = styled.a`
  width: 100%;
  height: 100%;
`;

const WorkItemImage = styled.img`
  left: 0;
  position: absolute;
  width: 100%;
  height: 100%;
`;

const DarkOverlay = styled.div`
  opacity: 0;
  left: 0;
  background-color: #000;
  width: 100%;
  height: 100%;
  position: absolute;

  ${WorkItem}:hover & {
    opacity: 0.8;
  }
`;

export default PortfolioPage;
