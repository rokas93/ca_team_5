import React from 'react';
import { StyleCard, StyleCardText } from './Card.styled';

const Card = ({ service }) => {
  return (
    <StyleCard>
      {service.logo}
      <StyleCardText>{service.text}</StyleCardText>
    </StyleCard>
  );
};

export default Card;
