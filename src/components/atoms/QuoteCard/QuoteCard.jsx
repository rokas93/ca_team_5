import React from 'react';
import {
  StyledQuoteCard,
  StyledQuoteCardCircle,
  StyledQuoteCardLine,
  StyledQuoteDesc,
  StyledQuoteTitle,
  StyledQuoteCardCircleBottom,
} from './QuoteCard.style';
import { motion } from 'framer-motion';

const CardMotion = motion(StyledQuoteCard);

const QuoteCard = ({ quote, line, number, variants }) => {
  return (
    <CardMotion variants={variants} transition={{ delay: number / 10 }}>
      <StyledQuoteCardCircle>
        <StyledQuoteCardCircleBottom />
        <span>{'0' + number}</span>
      </StyledQuoteCardCircle>
      {line && <StyledQuoteCardLine></StyledQuoteCardLine>}
      <StyledQuoteTitle>{quote.title}</StyledQuoteTitle>
      <StyledQuoteDesc>{quote.desc}</StyledQuoteDesc>
    </CardMotion>
  );
};

export default QuoteCard;
