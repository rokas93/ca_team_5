import React from 'react';
import {
  StyledServices,
  StyledServicesExpWrapper,
  StyledServicesHeading,
  StyledServicesLeft,
  StyledServicesRight,
  StyledServicesRightHeading,
} from './Services.style';
import TEXTS from '../../../../shared/texts/texts';
import ServiceCard from '../../../../components/atoms/ServiceCard';
import EXPERIANCES from '../../../../shared/constants/experiences';
import Form from '../../../../components/organisms/Form/Form';
import { HOME_PAGE_FORM } from '../../../../shared/constants/forms';
import ArrowButton from '../../../../components/atoms/ArrowButton';
import StyledContainer from '../../../../assets/styles/StyledContainer';

const Services = () => {
  return (
    <StyledContainer>
      <StyledServices>
        <StyledServicesLeft>
          <StyledServicesHeading>
            {TEXTS.homePage.services.heading}
          </StyledServicesHeading>
          <StyledServicesExpWrapper>
            {EXPERIANCES.map((experiance) => (
              <ServiceCard key={experiance.id} experiance={experiance} />
            ))}
            <ArrowButton path={'/'} text={TEXTS.homePage.services.button} />
          </StyledServicesExpWrapper>
        </StyledServicesLeft>

        <StyledServicesRight>
          <StyledServicesRightHeading>
            {TEXTS.homePage.services.formHeading}
          </StyledServicesRightHeading>

          <Form
            inputs={HOME_PAGE_FORM}
            buttonText={TEXTS.homePage.form.button}
          />
        </StyledServicesRight>
      </StyledServices>
    </StyledContainer>
  );
};

export default Services;
