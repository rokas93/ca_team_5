import React from 'react';
import {
  StyledHowWorksTop,
  StyledHowWorksTopContent,
  StyledHowWorksTopHeading,
  StyledHowWorksTopLeft,
  StyledHowWorksTopRight,
} from './HowWorksTop.style';
import CRITERIA from '../../../../shared/constants/criteria';
import HowWorksCard from '../HowWorksCard';
import TEXTS from '../../../../shared/texts/texts';

import howWorksBg1 from '../../../../assets/images/how-works-bg-1.jpg';
import howWorksBg2 from '../../../../assets/images/how-works-bg-2.jpg';

const HowWorksTop = () => {
  return (
    <StyledHowWorksTop>
      <StyledHowWorksTopLeft>
        <StyledHowWorksTopHeading>
          {TEXTS.servicesPage.howWorks.heading1}
        </StyledHowWorksTopHeading>
        <StyledHowWorksTopContent>
          {CRITERIA.map((criteria) => (
            <HowWorksCard
              key={criteria.id}
              color={criteria.color}
              title={criteria.title}
              icon={criteria.icon}
            />
          ))}
        </StyledHowWorksTopContent>
      </StyledHowWorksTopLeft>
      <StyledHowWorksTopRight>
        <img src={howWorksBg1} alt='howWorksBg1.jpg' />
        <img src={howWorksBg2} alt='howWorksBg2.jpg' />
      </StyledHowWorksTopRight>
    </StyledHowWorksTop>
  );
};

export default HowWorksTop;
