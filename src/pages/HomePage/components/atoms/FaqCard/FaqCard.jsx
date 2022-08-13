import React from 'react';
import {
  StyledFaqCard,
  StyledFaqCardButton,
  StyledFaqCardContent,
  StyledFaqCardTitle,
} from './FaqCard.style';
import { PlusIcon } from '../../../../../assets/icons';
import { motion } from 'framer-motion';

const FaqCardContentMotion = motion(StyledFaqCardContent);

const FaqCard = (props) => {
  return (
    <StyledFaqCard onClick={props.action}>
      <StyledFaqCardTitle>{props.question}</StyledFaqCardTitle>
      <StyledFaqCardButton>
        <PlusIcon isActive={props.isActive} />
      </StyledFaqCardButton>
      {props.isActive && (
        <FaqCardContentMotion
          style={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          {props.answer}
        </FaqCardContentMotion>
      )}
    </StyledFaqCard>
  );
};

export default FaqCard;
