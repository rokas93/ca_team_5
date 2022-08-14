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

export const ABOUT_PAGE_QUOTES = [
  {
    id: uid(),
    title: `${TEXTS.homePage.process.firstProcess.title}`,
    desc: `${TEXTS.aboutPage.steps.quotes.firstDesc}`,
  },
  {
    id: uid(),
    title: `${TEXTS.homePage.process.secondProcess.title}`,
    desc: `${TEXTS.aboutPage.steps.quotes.secondDesc}`,
  },
  {
    id: uid(),
    title: `${TEXTS.homePage.process.thirdProcess.title}`,
    desc: `${TEXTS.aboutPage.steps.quotes.thirdDesc}`,
  },
];
