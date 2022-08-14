import React from 'react';
import { StyledHomePage } from './HomePage.style';
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

const HomePage = () => {
  return (
    <StyledHomePage>
      <StyledWrapper>
        <Hero />
      </StyledWrapper>

      <StyledWrapper theme={'light'}>
        <Services />
      </StyledWrapper>

      <StyledWrapper>
        <Process />
      </StyledWrapper>

      <StyledWrapper theme={'lighter'}>
        <Abilities />
      </StyledWrapper>

      <CallToAction />

      <StyledWrapper theme={'lighter'}>
        <Experience />
      </StyledWrapper>

      <StyledWrapper>
        <Brands />
      </StyledWrapper>

      <StyledWrapper theme={'lighter'}>
        <Testimonials />
      </StyledWrapper>

      <StyledWrapper theme={'light'}>
        <Faq />
      </StyledWrapper>
    </StyledHomePage>
  );
};

export default HomePage;
