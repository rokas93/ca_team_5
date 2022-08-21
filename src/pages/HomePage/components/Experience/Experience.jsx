import React from 'react';
import ExperienceCard from '../../../../components/atoms/ExperienceCard';
import HOME_PAGE_STATS from '../../../../shared/constants/stats';
import { StyledExperience } from './Experience.style';

const Experience = () => {
  return (
    <StyledExperience>
      {HOME_PAGE_STATS.map((stat) => (
        <ExperienceCard key={stat.id} title={stat.title} desc={stat.desc} />
      ))}
    </StyledExperience>
  );
};

export default Experience;
