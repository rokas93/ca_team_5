import React from 'react';
import {
  StyledExperienceCard,
  StyledExperienceCardTitle,
  StyledExperienceCardDesc,
} from './ExperienceCard.style';

const ExperienceCard = (props) => {
  return (
    <StyledExperienceCard>
      <StyledExperienceCardTitle>{props.title}</StyledExperienceCardTitle>
      <StyledExperienceCardDesc>{props.desc}</StyledExperienceCardDesc>
    </StyledExperienceCard>
  );
};

export default ExperienceCard;
