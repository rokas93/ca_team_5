import React from 'react';
import Button from '../../atoms/Button';
import TEXTS from '../../../shared/texts/texts';

import {
  StyledHero,
  StyledHeroDiv,
  StyledDescDiv,
  StyledText,
} from './Hero.style';

const Hero = ({ image, title, desc }) => {
  return (
    <StyledHero>
      <StyledHeroDiv>
        <img src={image} alt='' />
        <StyledDescDiv>
          <StyledText>
            <h1>{title}</h1>
            <p>{desc}</p>
          </StyledText>
          <Button bg='primary' text={TEXTS.button.service} />
        </StyledDescDiv>
      </StyledHeroDiv>
    </StyledHero>
  );
};

export default Hero;
