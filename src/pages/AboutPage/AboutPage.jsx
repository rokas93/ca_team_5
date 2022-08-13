import OurTeam from './components/organisms/OurTeam';
import Features from './components/organisms/Features';
import {
  StyledAboutPage,
  StyledContainer,
  StyledFeaturesWrapper,
} from './AboutPage.style';

const AboutPage = () => {
  return (
    <StyledAboutPage>
      <StyledFeaturesWrapper>
        <StyledContainer>
          <Features />
        </StyledContainer>
      </StyledFeaturesWrapper>
      <StyledContainer>
        <OurTeam />
      </StyledContainer>
    </StyledAboutPage>
  );
};

export default AboutPage;
