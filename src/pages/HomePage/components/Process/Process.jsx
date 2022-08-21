import React from 'react';
import {
  StyledPocessRight,
  StyledProcess,
  StyledProcessDesc,
  StyledProcessHeading,
  StyledProcessLeft,
} from './Process.style';
import TEXTS from '../../../../shared/texts/texts';
import QuoteCard from '../../../../components/atoms/QuoteCard';
import { HOME_PAGE_QUOTES } from '../../../../shared/constants/quotes';
import Button from '../../../../components/atoms/Button';
import { motion } from 'framer-motion';

const ProcessRightMotion = motion(StyledPocessRight);

const variants = {
  offScreen: { opacity: 0 },
  onScreen: { opacity: 1 },
};

const Process = () => {
  return (
    <StyledProcess>
      <StyledProcessLeft>
        <StyledProcessHeading>
          {TEXTS.homePage.process.heading}
        </StyledProcessHeading>
        <StyledProcessDesc>{TEXTS.homePage.process.desc}</StyledProcessDesc>
        <Button
          bg={'primary'}
          text={TEXTS.homePage.process.buttonText}
          path={'/about'}
        />
      </StyledProcessLeft>
      <ProcessRightMotion
        initial='offScreen'
        whileInView='onScreen'
        viewport={{ once: true, amount: 0.8 }}
      >
        {HOME_PAGE_QUOTES.map((quote, index) => (
          <QuoteCard
            variants={variants}
            key={quote.id}
            quote={quote}
            number={index + 1}
            line={index !== HOME_PAGE_QUOTES.length - 1}
          />
        ))}
      </ProcessRightMotion>
    </StyledProcess>
  );
};

export default Process;
