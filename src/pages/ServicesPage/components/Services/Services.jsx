import React from 'react';
import {
  StyledServices,
  StyledServicesDesc,
  StyledServicesHeading,
  StyledServicesHighlighted,
} from './Services.style';
import serviceBg from '../../../../assets/images/service-bg.jpg';
import TEXTS from '../../../../shared/texts/texts';
import ArrowButton from '../../../../components/atoms/ArrowButton';
import SERVICES from '../../../../shared/constants/services';
import Card from '../../../../components/atoms/Card';

const Services = () => {
  return (
    <StyledServices>
      <StyledServicesHighlighted>
        <img src={serviceBg} alt='serviceBg.jpg' />
        <StyledServicesHeading>
          {TEXTS.servicesPage.services.title}
        </StyledServicesHeading>
        <StyledServicesDesc>
          {TEXTS.servicesPage.services.desc}
        </StyledServicesDesc>
        <ArrowButton path={'/'} text={TEXTS.servicesPage.services.buttonText} />
      </StyledServicesHighlighted>
      {SERVICES.slice(0, 6).map((service) => (
        <Card
          key={service.id}
          text={service.text}
          logo={service.logo}
          id={service.id}
        />
      ))}
    </StyledServices>
  );
};

export default Services;
