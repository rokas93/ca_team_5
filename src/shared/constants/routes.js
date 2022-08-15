// import React from 'react';
import React from 'react';
import { uid } from 'uid';
import TEXTS from '../texts/texts';
const HomePage = React.lazy(() => import('../../pages/HomePage'));
const ServicesPage = React.lazy(() => import('../../pages/ServicesPage'));
const AboutPage = React.lazy(() => import('../../pages/AboutPage'));
const ServicePage = React.lazy(() => import('../../pages/ServicePage'));

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
  {
    id: uid(),
    path: '/services',
    element: <ServicesPage />,
    text: `${TEXTS.navigation.services}`,
  },
  { id: uid(), path: '/', element: '', text: `${TEXTS.navigation.blog}` },
  { id: uid(), path: '/', element: '', text: `${TEXTS.navigation.contact}` },
  { id: uid(), path: '/services/:id', element: <ServicePage />, text: '' },
];

export default ROUTES;
