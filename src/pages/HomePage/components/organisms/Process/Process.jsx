import React from 'react';
import {
  StyledPocessRight,
  StyledProcess,
  StyledProcessDesc,
  StyledProcessHeading,
  StyledProcessLeft,
} from './Process.style';
import TEXTS from '../../../../../shared/texts/texts';
import QuoteCard from '../../../../../components/atoms/QuoteCard/QuoteCard';
import { HOME_PAGE_QUOTES } from '../../../../../shared/constants/quotes';
import Button from '../../../../../components/atoms/Button';
import StyledContainer from '../../../../../assets/styles/StyledContainer';

const Process = () => {
  return (
    <StyledContainer>
      <StyledProcess>
        <StyledProcessLeft>
          <StyledProcessHeading>
            {TEXTS.homePage.process.heading}
          </StyledProcessHeading>
          <StyledProcessDesc>{TEXTS.homePage.process.desc}</StyledProcessDesc>
          <Button bg={'primary'} text={TEXTS.homePage.process.buttonText} />
        </StyledProcessLeft>
        <StyledPocessRight>
          {HOME_PAGE_QUOTES.map((quote, index) => (
            <QuoteCard
              key={quote.id}
              quote={quote}
              number={index + 1}
              line={index !== HOME_PAGE_QUOTES.length - 1}
            />
          ))}
        </StyledPocessRight>
      </StyledProcess>
    </StyledContainer>
  );
};

export default Process;
