import TEXTS from '../texts/texts';
import { uid } from 'uid';

import { CheckIcon } from '../../assets/icons';

const CRITERIA = [
  {
    id: uid(),
    title: `${TEXTS.servicesPage.howWorks.list.text1}`,
    icon: <CheckIcon />,
  },
  {
    id: uid(),
    title: `${TEXTS.servicesPage.howWorks.list.text2}`,
    icon: <CheckIcon />,
  },
  {
    id: uid(),
    title: `${TEXTS.servicesPage.howWorks.list.text3}`,
    icon: <CheckIcon />,
  },
];

export default CRITERIA;
