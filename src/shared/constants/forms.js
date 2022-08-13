import { uid } from 'uid';
import TEXTS from '../texts/texts';

export const HOME_PAGE_FORM = [
  {
    id: uid(),
    placeholder: `${TEXTS.homePage.form.placeholder.location}`,
    type: 'text',
  },
  {
    id: uid(),
    placeholder: `${TEXTS.homePage.form.placeholder.location}`,
    type: 'text',
  },
  {
    id: uid(),
    placeholder: `${TEXTS.homePage.form.placeholder.location}`,
    type: 'text',
  },
  {
    id: uid(),
    placeholder: `${TEXTS.homePage.form.placeholder.number}`,
    type: 'text',
  },
];

export const CONTACT_PAGE_FORM = [
  {
    id: uid(),
    placeholder: ``,
    type: 'text',
  },
  {
    id: uid(),
    placeholder: ``,
    type: 'text',
  },
  {
    id: uid(),
    placeholder: ``,
    type: 'text',
  },
  {
    id: uid(),
    placeholder: ``,
    type: 'text',
  },
];
