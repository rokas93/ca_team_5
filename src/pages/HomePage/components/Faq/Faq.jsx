import { useState } from 'react';
import StyledContainer from '../../../../assets/styles/StyledContainer';
import { StyledFaq, StyledFaqHeading } from './Faq.style';
import TEXTS from '../../../../shared/texts/texts';
import FaqCard from '../FaqCard';
import FAQS from '../../../../shared/constants/faq';

const Faq = () => {
  const [activeId, setActiveId] = useState(null);

  const handleIsActiveChange = (id) => {
    if (id === activeId) {
      return setActiveId(false);
    }

    return setActiveId(id);
  };

  return (
    <StyledContainer>
      <StyledFaq>
        <StyledFaqHeading>{TEXTS.homePage.faq.heading}</StyledFaqHeading>

        {FAQS.map((faq) => (
          <FaqCard
            key={faq.id}
            question={faq.question}
            answer={faq.answer}
            isActive={faq.id === activeId}
            action={() => handleIsActiveChange(faq.id)}
          />
        ))}
      </StyledFaq>
    </StyledContainer>
  );
};

export default Faq;
