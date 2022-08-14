import React from 'react';
import { StyledCard, StyledTextDiv } from './HighlightCard.style';

const HighlightCard = ({ color, image, title, description }) => {
  return (
    <StyledCard image={image}>
      <StyledTextDiv color={color}>
        <h4>{title}</h4>
        <p>{description}</p>
      </StyledTextDiv>
    </StyledCard>
  );
};

export default HighlightCard;
