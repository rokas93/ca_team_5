// import React from 'react';
import React from 'react';
import { uid } from 'uid';
import AboutPage from '../../pages/AboutPage';
import TEXTS from '../texts/texts';
const HomePage = React.lazy(() => import('../../pages/HomePage'));

const ROUTES = [
  {
    id: uid(),
    path: '/',
    element: <HomePage />,
    text: `${TEXTS.navigation.home}`,
  },
  {
    id: uid(),
    path: '/about',
    element: <AboutPage />,
    text: `${TEXTS.navigation.aboutus}`,
  },
  { id: uid(), path: '/', element: '', text: `${TEXTS.navigation.services}` },
  { id: uid(), path: '/', element: '', text: `${TEXTS.navigation.blog}` },
  { id: uid(), path: '/', element: '', text: `${TEXTS.navigation.contact}` },
];

export default ROUTES;
