import React from 'react';
import QuoteCard from '../../../../components/atoms/QuoteCard';
import TEXTS from '../../../../shared/texts/texts';
import { ABOUT_PAGE_QUOTES } from '../../../../shared/constants/quotes';

import {
  StyledSteps,
  StyledImageDiv,
  StyledContentDiv,
  StyledTexts,
  StyledQuotesDiv,
} from './Steps.style';

const Steps = () => {
  return (
    <StyledSteps>
      <StyledContentDiv>
        <StyledTexts>
          <h3>{TEXTS.aboutPage.steps.title}</h3>
          <p>{TEXTS.aboutPage.steps.desc}</p>
        </StyledTexts>
        <StyledQuotesDiv>
          {ABOUT_PAGE_QUOTES.map((quote, index) => (
            <QuoteCard
              key={quote.id}
              quote={quote}
              number={index + 1}
              line={index !== ABOUT_PAGE_QUOTES.length - 1}
            />
          ))}
        </StyledQuotesDiv>
      </StyledContentDiv>
      <StyledImageDiv></StyledImageDiv>
    </StyledSteps>
  );
};

export default Steps;
