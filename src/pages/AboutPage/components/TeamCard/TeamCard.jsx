import React from 'react';
import {
  StyledCardWrapper,
  StyledCardBottomDiv,
  StyledCardNameTitle,
  StyledCardPositionSpan,
} from './TeamCard.style';
import { motion } from 'framer-motion';

const StyledCardBottomDivMotion = motion(StyledCardBottomDiv);

const TeamCard = ({ name, position, image }) => {
  return (
    <StyledCardWrapper image={image}>
      <StyledCardBottomDivMotion
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <StyledCardNameTitle>{name}</StyledCardNameTitle>
        <StyledCardPositionSpan>{position}</StyledCardPositionSpan>
      </StyledCardBottomDivMotion>
    </StyledCardWrapper>
  );
};

export default TeamCard;
