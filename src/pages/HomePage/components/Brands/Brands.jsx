import React from 'react';
import {
  StyledBrands,
  StyledBrandsHeading,
  StyledBrandsWrapper,
} from './Brands.style';
import TEXTS from '../../../../shared/texts/texts';
import BRANDS from '../../../../shared/constants/brands';
import { motion } from 'framer-motion';

const BrandsWrapperMotion = motion(StyledBrandsWrapper);

const variants = {
  offScreen: { opacity: 0, scale: 1.5 },
  onScreen: { opacity: 1, scale: 1 },
};

const Brands = () => {
  return (
    <StyledBrands>
      <StyledBrandsHeading>{TEXTS.homePage.brands.heading}</StyledBrandsHeading>
      <BrandsWrapperMotion
        initial='offScreen'
        whileInView='onScreen'
        viewport={{ once: true, amount: 0.4 }}
      >
        {BRANDS.map((brand, index) => (
          <motion.img
            variants={variants}
            transition={{ delay: index / 10 }}
            key={brand.id}
            src={brand.img}
            alt={brand.alt}
          />
        ))}
      </BrandsWrapperMotion>
    </StyledBrands>
  );
};

export default Brands;
