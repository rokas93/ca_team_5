import React from 'react';
import { StyledCard, StyledText, StyledImgDiv } from './RecapCard.style';
import { useNavigate } from 'react-router-dom';

const RecapCard = ({ image, alt, title, date, id }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/blog/${id}`);
  };
  return (
    <StyledCard onClick={handleClick}>
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
