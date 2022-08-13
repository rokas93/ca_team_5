import React from 'react';
import {
  StyledQuoteCard,
  StyledQuoteCardCircle,
  StyledQuoteCardLine,
  StyledQuoteDesc,
  StyledQuoteTitle,
  StyledQuoteCardCircleBottom,
} from './QuoteCard.style';

const QuoteCard = ({ quote, line, number }) => {
  return (
    <StyledQuoteCard>
      <StyledQuoteCardCircle>
        <StyledQuoteCardCircleBottom />
        <span>{'0' + number}</span>
      </StyledQuoteCardCircle>
      {line && <StyledQuoteCardLine></StyledQuoteCardLine>}
      <StyledQuoteTitle>{quote.title}</StyledQuoteTitle>
      <StyledQuoteDesc>{quote.desc}</StyledQuoteDesc>
    </StyledQuoteCard>
  );
};

export default QuoteCard;
