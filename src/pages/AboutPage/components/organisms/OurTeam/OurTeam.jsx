import React from 'react';
import TeamCard from '../../atoms/TeamCard';
import TEXTS from '../../../../../shared/texts/texts';
import { MEMBERS } from '../../../../../shared/constants/team';
import {
  StyledSection,
  StyledHeading,
  StyledTeamCardsDiv,
} from './OurTeam.style';

const OurTeam = () => {
  return (
    <StyledSection>
      <StyledHeading>{TEXTS.aboutPage.team.heading}</StyledHeading>
      <StyledTeamCardsDiv>
        {MEMBERS.map((member) => (
          <TeamCard
            key={member.id}
            name={member.title}
            position={member.desc}
            image={member.image}
          />
        ))}
      </StyledTeamCardsDiv>
    </StyledSection>
  );
};

export default OurTeam;
