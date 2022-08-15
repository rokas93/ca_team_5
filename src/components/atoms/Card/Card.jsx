import React from 'react';
import { StyleCard, StyleCardText } from './Card.styled';
import { useNavigate } from 'react-router-dom';

const Card = (props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/services/${props.id}`);
  };

  return (
    <StyleCard onClick={handleClick}>
      {props.logo}
      <StyleCardText>{props.text}</StyleCardText>
    </StyleCard>
  );
};

export default Card;
