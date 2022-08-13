import React from 'react';
import Abilities from './components/organisms/Abilities';
import Hero from './components/organisms/Hero/Hero';
import Process from './components/organisms/Process';
import Services from './components/organisms/Services';
import Experience from './components/organisms/Experience';
import Brands from './components/organisms/Brands';
import CallToAction from '../../components/organisms/CallToAction';
import { StyledHomePage } from './HomePage.style';
import StyledWrapper from '../../assets/styles/StyledWrapper';
import Testimonials from './components/organisms/Testimonials/Testimonials';
import Faq from './components/organisms/Faq';

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
