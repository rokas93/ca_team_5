import React from 'react';
import {
  StyledCardWrapper,
  StyledCardBottomDiv,
  StyledCardNameTitle,
  StyledCardPositionSpan,
} from './TeamCard.style';

const TeamCard = ({ name, position, image }) => {
  return (
    <StyledCardWrapper image={image}>
      <StyledCardBottomDiv>
        <StyledCardNameTitle>{name}</StyledCardNameTitle>
        <StyledCardPositionSpan>{position}</StyledCardPositionSpan>
      </StyledCardBottomDiv>
    </StyledCardWrapper>
  );
};

export default TeamCard;
