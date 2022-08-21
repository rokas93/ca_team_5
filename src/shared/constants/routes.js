// import React from 'react';
import React from 'react';
import { uid } from 'uid';
import TEXTS from '../texts/texts';
const HomePage = React.lazy(() => import('../../pages/HomePage'));
const ServicesPage = React.lazy(() => import('../../pages/ServicesPage'));
const AboutPage = React.lazy(() => import('../../pages/AboutPage'));
const BlogPage = React.lazy(() => import('../../pages/BlogPage'));
const ServicePage = React.lazy(() => import('../../pages/ServicePage'));
const BlogSinglePage = React.lazy(() => import('../../pages/BlogSinglePage'));
const ContactPage = React.lazy(() => import('../../pages/ContactPage'));

const ROUTES = [
  {
    id: uid(),
    path: '/',
    element: <HomePage />,
    text: `${TEXTS.navigation.home}`,
    nav: true,
  },
  {
    id: uid(),
    path: '/about',
    element: <AboutPage />,
    text: `${TEXTS.navigation.aboutus}`,
    nav: true,
  },
  {
    id: uid(),
    path: '/services',
    element: <ServicesPage />,
    text: `${TEXTS.navigation.services}`,
    nav: true,
  },
  {
    id: uid(),
    path: '/blog',
    element: <BlogPage />,
    text: `${TEXTS.navigation.blog}`,
    nav: true,
  },
  {
    id: uid(),
    path: '/contact',
    element: <ContactPage />,
    text: `${TEXTS.navigation.contact}`,
    nav: true,
  },
  {
    id: uid(),
    path: '/services/:slug',
    element: <ServicePage />,
    text: '',
    nav: false,
  },
  {
    id: uid(),
    path: '/blog/:id',
    element: <BlogSinglePage />,
    text: '',
    nav: false,
  },
];

export default ROUTES;
