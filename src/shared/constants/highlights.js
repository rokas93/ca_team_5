import { uid } from 'uid';
import TEXTS from '../texts/texts';
import image1 from '../../assets/images/steps-img.jpg';
import image2 from '../../assets/images/cta-bg-2.jpg';

const HIGHLIGHTS = [
  {
    id: uid(),
    img: `${image1}`,
    title: `${TEXTS.aboutPage.highlights.titles.firstTitle}`,
    desc: `${TEXTS.aboutPage.highlights.desc}`,
    color: '#F85B29E5',
  },
  {
    id: uid(),
    img: `${image2}`,
    title: `${TEXTS.aboutPage.highlights.titles.secondTitle}`,
    desc: `${TEXTS.aboutPage.highlights.desc}`,
    color: '#000000E5',
  },
  {
    id: uid(),
    img: `${image2}`,
    title: `${TEXTS.aboutPage.highlights.titles.thirdTitle}`,
    desc: `${TEXTS.aboutPage.highlights.desc}`,
    color: '#7443CAE5',
  },
];

export default HIGHLIGHTS;
