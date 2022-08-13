import React from 'react';
import ExperienceCard from '../../../../../components/atoms/ExperienceCard';
import { StyledExperience } from './Experience.style';
import HOME_PAGE_STATS from '../../../../../shared/constants/stats';
import StyledContainer from '../../../../../assets/styles/StyledContainer';

const Experience = () => {
  return (
    <StyledContainer>
      <StyledExperience>
        {HOME_PAGE_STATS.map((stat) => (
          <ExperienceCard key={stat.id} title={stat.title} desc={stat.desc} />
        ))}
      </StyledExperience>
    </StyledContainer>
  );
};

export default Experience;
