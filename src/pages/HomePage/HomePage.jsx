import React from 'react';
import StyledWrapper from '../../assets/styles/StyledWrapper';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Abilities from './components/Abilities';
import Experience from './components/Experience';
import Brands from './components/Brands';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import CallToAction from '../../components/organisms/CallToAction';
import StyledContainer from '../../assets/styles/StyledContainer';
import Main from '../../components/atoms/Main';

const HomePage = () => {
  return (
    <Main>
      <StyledWrapper>
        <StyledContainer>
          <Hero />
        </StyledContainer>
      </StyledWrapper>

      <StyledWrapper theme={'light'}>
        <StyledContainer>
          <Services />
        </StyledContainer>
      </StyledWrapper>

      <StyledWrapper>
        <StyledContainer>
          <Process />
        </StyledContainer>
      </StyledWrapper>

      <StyledWrapper theme={'lighter'}>
        <StyledContainer>
          <Abilities />
        </StyledContainer>
      </StyledWrapper>

      <CallToAction />

      <StyledWrapper theme={'lighter'}>
        <StyledContainer>
          <Experience />
        </StyledContainer>
      </StyledWrapper>

      <StyledWrapper>
        <StyledContainer>
          <Brands />
        </StyledContainer>
      </StyledWrapper>

      <StyledWrapper theme={'lighter'}>
        <StyledContainer>
          <Testimonials />
        </StyledContainer>
      </StyledWrapper>

      <StyledWrapper theme={'light'}>
        <StyledContainer>
          <Faq />
        </StyledContainer>
      </StyledWrapper>
    </Main>
  );
};

export default HomePage;
