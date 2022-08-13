import { uid } from 'uid';
import TEXTS from '../texts/texts';

const FAQS = [
  {
    id: uid(),
    question: `${TEXTS.homePage.faq.questions.faq1.question}`,
    answer: `${TEXTS.homePage.faq.questions.faq1.answer}`,
  },
  {
    id: uid(),
    question: `${TEXTS.homePage.faq.questions.faq2.question}`,
    answer: `${TEXTS.homePage.faq.questions.faq2.answer}`,
  },
  {
    id: uid(),
    question: `${TEXTS.homePage.faq.questions.faq3.question}`,
    answer: `${TEXTS.homePage.faq.questions.faq3.answer}`,
  },
  {
    id: uid(),
    question: `${TEXTS.homePage.faq.questions.faq4.question}`,
    answer: `${TEXTS.homePage.faq.questions.faq4.answer}`,
  },
  {
    id: uid(),
    question: `${TEXTS.homePage.faq.questions.faq5.question}`,
    answer: `${TEXTS.homePage.faq.questions.faq5.answer}`,
  },
];

export default FAQS;
