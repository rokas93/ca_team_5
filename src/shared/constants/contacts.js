import { uid } from 'uid';
import CONTACTS_DATA from '../../data/contacts';
import TEXTS from '../texts/texts';

const CONTACTS = [
  {
    id: uid(),
    label: `${TEXTS.contactPage.labels.address}`,
    text: `${CONTACTS_DATA.address}`,
  },
  {
    id: uid(),
    label: `${TEXTS.contactPage.labels.details}`,
    text: `${CONTACTS_DATA.details}`,
  },
  {
    id: uid(),
    label: `${TEXTS.contactPage.labels.hours}`,
    text: `${CONTACTS_DATA.hours}`,
  },
];

export default CONTACTS;
