import React from 'react';
import {
  StyledHero,
  StyledHeroBannerService,
  StyledHeroBannerServiceCircle,
  StyledHeroBannerStars,
  StyledHeroBannerStarsWrapper,
  StyledHeroBannerTextWrapper,
  StyledHeroHeading,
  StyledHeroLeft,
  StyledHeroOpenSubTitle,
  StyledHeroOpenTitle,
  StyledHeroOpenWrapper,
  StyledHeroRight,
  StyledHeroRightBg,
} from './Hero.style';
import TEXTS from '../../../../shared/texts/texts';
import { TimeHeroIcon, StarHeroIcon } from '../../../../assets/icons';
import Button from '../../../../components/atoms/Button';
import StyledContainer from '../../../../assets/styles/StyledContainer';

const Hero = () => {
  return (
    <StyledContainer>
      <StyledHero>
        <StyledHeroLeft>
          <StyledHeroHeading>{TEXTS.homePage.hero.heading}</StyledHeroHeading>
          <Button bg={'primary'} text={TEXTS.homePage.hero.button} />
          <StyledHeroOpenWrapper>
            <TimeHeroIcon />
            <StyledHeroOpenSubTitle>
              {TEXTS.homePage.hero.openSubTitle}
            </StyledHeroOpenSubTitle>

            <StyledHeroOpenTitle>
              {TEXTS.homePage.hero.openTitle}
            </StyledHeroOpenTitle>
          </StyledHeroOpenWrapper>
        </StyledHeroLeft>
        <StyledHeroRight>
          <StyledHeroRightBg></StyledHeroRightBg>
          <StyledHeroBannerService>
            <StyledHeroBannerServiceCircle>
              <p>
                {TEXTS.homePage.hero.hr.value}&nbsp;
                <span>{TEXTS.homePage.hero.hr.text}</span>
              </p>
            </StyledHeroBannerServiceCircle>
            <p>{TEXTS.homePage.hero.service}</p>
          </StyledHeroBannerService>
          <StyledHeroBannerStars>
            <StyledHeroBannerTextWrapper>
              {TEXTS.homePage.hero.rating.value}
              <span>{TEXTS.homePage.hero.rating.text}</span>
            </StyledHeroBannerTextWrapper>
            <StyledHeroBannerStarsWrapper>
              <StarHeroIcon />
              <StarHeroIcon />
              <StarHeroIcon />
              <StarHeroIcon />
              <StarHeroIcon />
            </StyledHeroBannerStarsWrapper>
          </StyledHeroBannerStars>
        </StyledHeroRight>
      </StyledHero>
    </StyledContainer>
  );
};

export default Hero;
