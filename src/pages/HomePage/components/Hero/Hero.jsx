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
import { motion } from 'framer-motion';

const ServiceMotion = motion(StyledHeroBannerService);
const StarsMotion = motion(StyledHeroBannerStars);

const variants = {
  left: { x: '-100px', opacity: 0 },
  right: { x: '100px', opacity: 0 },
};

const Hero = () => {
  return (
    <StyledHero>
      <StyledHeroLeft>
        <StyledHeroHeading>{TEXTS.homePage.hero.heading}</StyledHeroHeading>
        <Button
          bg={'primary'}
          text={TEXTS.homePage.hero.button}
          path={'/contact'}
        />
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
        <ServiceMotion
          initial={'left'}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          variants={variants}
        >
          <StyledHeroBannerServiceCircle>
            <p>
              {TEXTS.homePage.hero.hr.value}&nbsp;
              <span>{TEXTS.homePage.hero.hr.text}</span>
            </p>
          </StyledHeroBannerServiceCircle>
          <p>{TEXTS.homePage.hero.service}</p>
        </ServiceMotion>
        <StarsMotion
          initial={'right'}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          variants={variants}
        >
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
        </StarsMotion>
      </StyledHeroRight>
    </StyledHero>
  );
};

export default Hero;
