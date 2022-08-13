import TEXTS from '../texts/texts';
import { uid } from 'uid';
import member1 from '../../assets/images/member-1.jpg';
import member2 from '../../assets/images/member-2.jpg';
import member3 from '../../assets/images/member-3.jpg';
import member4 from '../../assets/images/member-4.jpg';
import member5 from '../../assets/images/member-5.jpg';
import member6 from '../../assets/images/member-6.jpg';

export const MEMBERS = [
  {
    id: uid(),
    title: `${TEXTS.aboutPage.members.nr1.name}`,
    desc: `${TEXTS.aboutPage.members.nr1.process}`,
    image: `${member1}`,
  },
  {
    id: uid(),
    title: `${TEXTS.aboutPage.members.nr2.name}`,
    desc: `${TEXTS.aboutPage.members.nr2.process}`,
    image: `${member2}`,
  },
  {
    id: uid(),
    title: `${TEXTS.aboutPage.members.nr3.name}`,
    desc: `${TEXTS.aboutPage.members.nr3.process}`,
    image: `${member3}`,
  },
  {
    id: uid(),
    title: `${TEXTS.aboutPage.members.nr4.name}`,
    desc: `${TEXTS.aboutPage.members.nr4.process}`,
    image: `${member4}`,
  },
  {
    id: uid(),
    title: `${TEXTS.aboutPage.members.nr5.name}`,
    desc: `${TEXTS.aboutPage.members.nr5.process}`,
    image: `${member5}`,
  },
  {
    id: uid(),
    title: `${TEXTS.aboutPage.members.nr6.name}`,
    desc: `${TEXTS.aboutPage.members.nr6.process}`,
    image: `${member6}`,
  },
];
