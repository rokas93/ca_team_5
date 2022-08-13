import React from 'react';
import { StyledServiceCard } from './ServiceCard.style';

const ServiceCard = ({ experiance }) => {
  return (
    <StyledServiceCard>
      <img src={experiance.icon} alt='' />
      <p>{experiance.title}</p>
      <span>{experiance.desc}</span>
    </StyledServiceCard>
  );
};

export default ServiceCard;
