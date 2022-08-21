import { useState } from 'react';
import { StyledFaq, StyledFaqHeading } from './Faq.style';
import TEXTS from '../../../../shared/texts/texts';
import FaqCard from '../FaqCard';
import FAQS from '../../../../shared/constants/faq';
import { motion } from 'framer-motion';

const FaqMotion = motion(StyledFaq);

const variants = {
  left: {
    offScreen: { opacity: 0, x: '-200px' },
    onScreen: { opacity: 1, x: '0px' },
  },
  right: {
    offScreen: { opacity: 0, x: '200px' },
    onScreen: { opacity: 1, x: '0px' },
  },
};

const Faq = () => {
  const [activeId, setActiveId] = useState(null);

  const handleIsActiveChange = (id) => {
    if (id === activeId) {
      return setActiveId(false);
    }

    return setActiveId(id);
  };

  return (
    <FaqMotion
      initial='offScreen'
      whileInView='onScreen'
      viewport={{ once: true, amount: 0.5 }}
    >
      <StyledFaqHeading>{TEXTS.homePage.faq.heading}</StyledFaqHeading>

      {FAQS.map((faq, index) => (
        <FaqCard
          key={faq.id}
          variants={index % 2 === 0 ? variants.left : variants.right}
          index={index}
          question={faq.question}
          answer={faq.answer}
          isActive={faq.id === activeId}
          action={() => handleIsActiveChange(faq.id)}
        />
      ))}
    </FaqMotion>
  );
};

export default Faq;
