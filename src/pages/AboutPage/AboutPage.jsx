import OurTeam from './components/OurTeam';
import Features from './components/Features';
import CallToAction from '../../components/organisms/CallToAction';

import StyledContainer from '../../assets/styles/StyledContainer';
import StyledWrapper from '../../assets/styles/StyledWrapper';
import Highlights from './components/Highlights';
import Steps from './components/Steps/Steps';
import Hero from '../../components/organisms/Hero';

import heroImage from '../../assets/images/hero-about-img.jpg';

import TEXTS from '../../shared/texts/texts';
import Main from '../../components/atoms/Main';

const AboutPage = () => {
  return (
    <Main>
      <StyledWrapper>
        <StyledContainer>
          <Hero
            image={heroImage}
            title={TEXTS.navigation.aboutus}
            desc={TEXTS.aboutPage.aboutDesc}
          />
        </StyledContainer>
      </StyledWrapper>
      <StyledWrapper>
        <StyledContainer>
          <Steps />
        </StyledContainer>
      </StyledWrapper>
      <StyledWrapper>
        <Highlights />
      </StyledWrapper>
      <StyledWrapper theme={'lighter'}>
        <StyledContainer>
          <Features />
        </StyledContainer>
      </StyledWrapper>
      <StyledWrapper>
        <StyledContainer>
          <OurTeam />
        </StyledContainer>
      </StyledWrapper>
      <CallToAction />
    </Main>
  );
};

export default AboutPage;
