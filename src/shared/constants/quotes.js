import { uid } from 'uid';
import TEXTS from '../texts/texts';

export const HOME_PAGE_QUOTES = [
  {
    id: uid(),
    title: `${TEXTS.homePage.process.firstProcess.title}`,
    desc: `${TEXTS.homePage.process.firstProcess.desc}`,
  },
  {
    id: uid(),
    title: `${TEXTS.homePage.process.secondProcess.title}`,
    desc: `${TEXTS.homePage.process.secondProcess.desc}`,
  },
  {
    id: uid(),
    title: `${TEXTS.homePage.process.thirdProcess.title}`,
    desc: `${TEXTS.homePage.process.thirdProcess.desc}`,
  },
];

export const ABOUTUS_PAGE_QUOTES = [
  { id: uid(), title: ``, desc: `` },
  { id: uid(), title: ``, desc: `` },
  { id: uid(), title: ``, desc: `` },
];
