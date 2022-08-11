import React from 'react';
import {
  StyledCallToAction,
  StyledCallToActionBgOne,
  StyledCallToActionBgTwo,
  StyledCallToActionBorder,
  StyledCallToActionContainer,
  StyledCallToActionHeading,
  TestButton,
} from './CallToAction.styled';
import TEXTS from '../../../shared/texts/texts';

const CallToAction = () => {
  return (
    <StyledCallToAction>
      <StyledCallToActionBgOne></StyledCallToActionBgOne>
      <StyledCallToActionBgTwo></StyledCallToActionBgTwo>
      <StyledCallToActionContainer>
        <StyledCallToActionBorder>
          <StyledCallToActionHeading>
            {TEXTS.cta.heading}
          </StyledCallToActionHeading>
          <TestButton>Placeholder</TestButton>
        </StyledCallToActionBorder>
      </StyledCallToActionContainer>
    </StyledCallToAction>
  );
};

export default CallToAction;
