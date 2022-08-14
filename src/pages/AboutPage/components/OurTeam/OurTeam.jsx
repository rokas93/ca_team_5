import React from 'react';
import TeamCard from '../TeamCard';
import TEXTS from '../../../../shared/texts/texts';
import { MEMBERS } from '../../../../shared/constants/team';
import { StyledTeam, StyledHeading, StyledTeamCardsDiv } from './OurTeam.style';

const OurTeam = () => {
  return (
    <StyledTeam>
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
    </StyledTeam>
  );
};

export default OurTeam;
