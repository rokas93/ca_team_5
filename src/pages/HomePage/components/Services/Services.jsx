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
import ROUTES from '../../../../shared/constants/routes';
import { motion } from 'framer-motion';

const ServicesLeftMotion = motion(StyledServicesLeft);
const ServicesRightMotion = motion(StyledServicesRight);
const ServicesMotion = motion(StyledServices);

const variants = {
  left: {
    offScreen: { y: '100px', opacity: 0 },
    onScreen: { y: '0px', opacity: 1, transition: { delay: 0.3 } },
  },
  right: {
    offScreen: { y: '-100px', opacity: 0 },
    onScreen: { y: '0px', opacity: 1, transition: { delay: 0.3 } },
  },
};

const Services = () => {
  return (
    <ServicesMotion
      initial='offScreen'
      whileInView='onScreen'
      viewport={{ once: true, amount: 0.4 }}
    >
      <ServicesLeftMotion variants={variants.left}>
        <StyledServicesHeading>
          {TEXTS.homePage.services.heading}
        </StyledServicesHeading>
        <StyledServicesExpWrapper>
          {EXPERIANCES.map((experiance) => (
            <ServiceCard key={experiance.id} experiance={experiance} />
          ))}
          <ArrowButton
            path={ROUTES[1].path}
            text={TEXTS.homePage.services.button}
          />
        </StyledServicesExpWrapper>
      </ServicesLeftMotion>

      <ServicesRightMotion variants={variants.right}>
        <StyledServicesRightHeading>
          {TEXTS.homePage.services.formHeading}
        </StyledServicesRightHeading>

        <Form
          inputs={HOME_PAGE_FORM}
          buttonText={TEXTS.homePage.form.button}
          fill={'light'}
        />
      </ServicesRightMotion>
    </ServicesMotion>
  );
};

export default Services;
