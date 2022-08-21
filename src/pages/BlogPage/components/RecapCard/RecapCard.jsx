import React from 'react';
import { StyledCard, StyledText, StyledImgDiv } from './RecapCard.style';

const RecapCard = ({ image, alt, title, date }) => {
  return (
    <StyledCard>
      <StyledImgDiv>
        <img src={image} alt={alt} />
      </StyledImgDiv>
      <StyledText>
        <h3>{title}</h3>
        <span>{date}</span>
      </StyledText>
    </StyledCard>
  );
};

export default RecapCard;
