import TEXTS from '../texts/texts';
import serviceImgOne from '../../assets/images/service-img-1.png';
import serviceImgTwo from '../../assets/images/service-img-2.png';
import serviceImgThree from '../../assets/images/service-img-3.png';
import { uid } from 'uid';

const EXPERIANCES = [
  {
    id: uid(),
    title: `${TEXTS.homePage.services.conventient.title}`,
    desc: `${TEXTS.homePage.services.conventient.desc}`,
    aboutDesc: `${TEXTS.aboutPage.features.desc}`,
    icon: `${serviceImgOne}`,
  },
  {
    id: uid(),
    title: `${TEXTS.homePage.services.expert.title}`,
    desc: `${TEXTS.homePage.services.expert.desc}`,
    aboutDesc: `${TEXTS.aboutPage.features.desc}`,
    icon: `${serviceImgTwo}`,
  },
  {
    id: uid(),
    title: `${TEXTS.homePage.services.pricing.title}`,
    desc: `${TEXTS.homePage.services.pricing.desc}`,
    aboutDesc: `${TEXTS.aboutPage.features.desc}`,
    icon: `${serviceImgThree}`,
  },
];

export default EXPERIANCES;
