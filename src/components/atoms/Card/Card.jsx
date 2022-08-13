import React from 'react';
import { StyleCard, StyleCardText } from './Card.styled';

const Card = (props) => {
  return (
    <StyleCard>
      {props.logo}
      <StyleCardText>{props.text}</StyleCardText>
    </StyleCard>
  );
};

export default Card;
