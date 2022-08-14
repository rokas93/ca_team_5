import React from 'react';
import {
  StyledHowWorksBottom,
  StyledHowWorksBottomHeading,
  StyledHowWorksBottomLeft,
  StyledHowWorksBottomRight,
  StyledHowWorksBottomText,
} from './HowWorksBottom.style';

import howWorksBg3 from '../../../../assets/images/how-works-bg-3.jpg';
import howWorksBg4 from '../../../../assets/images/how-works-bg-4.jpg';
import TEXTS from '../../../../shared/texts/texts';
import Button from '../../../../components/atoms/Button';

const HowWorksBottom = () => {
  return (
    <StyledHowWorksBottom>
      <StyledHowWorksBottomLeft>
        <img src={howWorksBg3} alt='howWorksBg3' />
        <img src={howWorksBg4} alt='howWorksBg4' />
      </StyledHowWorksBottomLeft>
      <StyledHowWorksBottomRight>
        <StyledHowWorksBottomHeading>
          {TEXTS.servicesPage.howWorks.heading2}
        </StyledHowWorksBottomHeading>
        <StyledHowWorksBottomText>
          {TEXTS.servicesPage.howWorks.text}
        </StyledHowWorksBottomText>
        <Button bg={'primary'} text={TEXTS.servicesPage.howWorks.buttonText} />
      </StyledHowWorksBottomRight>
    </StyledHowWorksBottom>
  );
};

export default HowWorksBottom;
