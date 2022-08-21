import React from 'react';
import {
  StyledFaqCard,
  StyledFaqCardButton,
  StyledFaqCardContent,
  StyledFaqCardTitle,
} from './FaqCard.style';
import { PlusIcon } from '../../../../assets/icons';
import { motion } from 'framer-motion';

const FaqCardContentMotion = motion(StyledFaqCardContent);
const FaqCardMotion = motion(StyledFaqCard);

const FaqCard = (props) => {
  return (
    <FaqCardMotion
      onClick={props.action}
      variants={props.variants}
      transition={{ delay: props.index * 0.3 }}
    >
      <StyledFaqCardTitle>{props.question}</StyledFaqCardTitle>
      <StyledFaqCardButton>
        <PlusIcon active={props.isActive ? 'true' : undefined} />
      </StyledFaqCardButton>
      {props.isActive && (
        <FaqCardContentMotion
          style={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          {props.answer}
        </FaqCardContentMotion>
      )}
    </FaqCardMotion>
  );
};

export default FaqCard;
