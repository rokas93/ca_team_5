import React from 'react';
import {
  StyledCallToAction,
  StyledCallToActionBgOne,
  StyledCallToActionBgTwo,
  StyledCallToActionBorder,
  StyledCallToActionContainer,
  StyledCallToActionHeading,
} from './CallToAction.styled';
import TEXTS from '../../../shared/texts/texts';
import Button from '../../atoms/Button';

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
          <Button text={TEXTS.button.contact} bg='black' />
        </StyledCallToActionBorder>
      </StyledCallToActionContainer>
    </StyledCallToAction>
  );
};

export default CallToAction;
