import React from 'react';
import {
  StyledAbilities,
  StyledAbilitiesHeading,
  StyledAbilitiesSubHeading,
  StyledAbilitiesWrapper,
} from './Abilities.style';
import TEXTS from '../../../../shared/texts/texts';
import SERVICES from '../../../../data/services';
import Card from '../../../../components/atoms/Card/Card';
import ArrowButton from '../../../../components/atoms/ArrowButton';
import shuffleArray from '../../../../shared/func/shuffleArray';
import ROUTES from '../../../../shared/constants/routes';
import { motion } from 'framer-motion';

const AbilitiesWrapperMotion = motion(StyledAbilitiesWrapper);

const variants = {
  offScreen: { opacity: 0, scale: 0.5 },
  onScreen: { opacity: 1, scale: 1 },
};

const Abilities = () => {
  const services = shuffleArray(SERVICES);

  return (
    <StyledAbilities>
      <StyledAbilitiesSubHeading>
        {TEXTS.homePage.abilities.subHeading}
      </StyledAbilitiesSubHeading>
      <StyledAbilitiesHeading>
        {TEXTS.homePage.abilities.heading}
      </StyledAbilitiesHeading>
      <AbilitiesWrapperMotion
        initial='offScreen'
        whileInView='onScreen'
        viewport={{ once: true, amount: 0.8 }}
      >
        {services.slice(0, 8).map((service, index) => (
          <Card
            variants={variants}
            key={service.id}
            logo={service.logo}
            text={service.text}
            slug={service.slug}
            index={index}
          />
        ))}
      </AbilitiesWrapperMotion>
      <ArrowButton
        path={ROUTES[2].path}
        text={TEXTS.homePage.abilities.buttonText}
      />
    </StyledAbilities>
  );
};

export default Abilities;
