import TEXTS from '../texts/texts';
import { uid } from 'uid';

const HOME_PAGE_STATS = [
  {
    id: uid(),
    title: `${TEXTS.homePage.experiences.experience1.title}`,
    desc: `${TEXTS.homePage.experiences.experience1.desc}`,
  },
  {
    id: uid(),
    title: `${TEXTS.homePage.experiences.experience2.title}`,
    desc: `${TEXTS.homePage.experiences.experience2.desc}`,
  },
  {
    id: uid(),
    title: `${TEXTS.homePage.experiences.experience3.title}`,
    desc: `${TEXTS.homePage.experiences.experience3.desc}`,
  },
  {
    id: uid(),
    title: `${TEXTS.homePage.experiences.experience4.title}`,
    desc: `${TEXTS.homePage.experiences.experience4.desc}`,
  },
];

export default HOME_PAGE_STATS;
