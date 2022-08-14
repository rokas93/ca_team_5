import React from 'react';
import {
  StyledHowWorksCard,
  StyledHowWorksCardCricle,
  StyledHowWorksCardTitle,
} from './HowWorksCard.style';

const HowWorksCard = (props) => {
  return (
    <StyledHowWorksCard>
      <StyledHowWorksCardCricle color={props.color}>
        {props.icon}
      </StyledHowWorksCardCricle>
      <StyledHowWorksCardTitle>{props.title}</StyledHowWorksCardTitle>
    </StyledHowWorksCard>
  );
};

export default HowWorksCard;
