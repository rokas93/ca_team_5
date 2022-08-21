import React from 'react';
import Button from '../../atoms/Button';
import TEXTS from '../../../shared/texts/texts';

import {
  StyledHero,
  StyledHeroDiv,
  StyledImg,
  StyledDescDiv,
  StyledText,
} from './Hero.style';

const Hero = ({ image, title, desc, path }) => {
  return (
    <StyledHero>
      <StyledHeroDiv>
        <StyledImg image={image}></StyledImg>
        <StyledDescDiv>
          <StyledText>
            <h1>{title}</h1>
            <p>{desc}</p>
          </StyledText>
          <Button bg='primary' text={TEXTS.button.service} path={'/contact'} />
        </StyledDescDiv>
      </StyledHeroDiv>
    </StyledHero>
  );
};

export default Hero;
