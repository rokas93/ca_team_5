import React from 'react';
import StyledWrapper from '../../assets/styles/StyledWrapper';
import Services from './components/Services';
import HowWorksTop from './components/HowWorksTop';
import StyledContainer from '../../assets/styles/StyledContainer';
import HowWorksBottom from './components/HowWorksBottom';
import Header from './components/Header';
import CallToAction from '../../components/organisms/CallToAction';
import Main from '../../components/atoms/Main';

const ServicesPage = () => {
  return (
    <Main>
      <StyledWrapper>
        <StyledContainer>
          <Header />
        </StyledContainer>
      </StyledWrapper>

      <StyledWrapper theme={'grey'}>
        <StyledContainer>
          <Services />
        </StyledContainer>
      </StyledWrapper>

      <StyledWrapper>
        <StyledContainer>
          <HowWorksTop />
        </StyledContainer>
      </StyledWrapper>

      <StyledWrapper>
        <StyledContainer>
          <HowWorksBottom />
        </StyledContainer>
      </StyledWrapper>

      <CallToAction />
    </Main>
  );
};

export default ServicesPage;
