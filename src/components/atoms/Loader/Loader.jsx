import React from 'react';
import { motion } from 'framer-motion';
import { StyledLoaderDiv, StyledLoader } from './Loader.style.jsx';
import StyledContainer from '../../../assets/styles/StyledContainer';

const Loader = () => {
  const containerVariants = {
    start: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    end: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const circleVariants = {
    start: {
      y: '0%',
    },
    end: {
      y: '100%',
    },
  };
  const circleTransition = {
    repeat: Infinity,
    repeatType: 'reverse',
    duration: 0.3,
    ease: 'easeInOut',
  };

  return (
    <StyledContainer>
      <StyledLoaderDiv>
        <StyledLoader>
          <motion.div
            className='loader-container'
            variants={containerVariants}
            initial='start'
            animate='end'
          >
            <motion.span
              variants={circleVariants}
              transition={circleTransition}
            ></motion.span>
            <motion.span
              variants={circleVariants}
              transition={circleTransition}
            ></motion.span>
            <motion.span
              variants={circleVariants}
              transition={circleTransition}
            ></motion.span>
          </motion.div>
        </StyledLoader>
      </StyledLoaderDiv>
    </StyledContainer>
  );
};

export default Loader;
