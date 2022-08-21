import React from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const Main = ({ children }) => {
  const { pathname } = useLocation();

  return (
    <motion.main
      key={pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.main>
  );
};

export default Main;
