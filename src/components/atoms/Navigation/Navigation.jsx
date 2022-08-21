import React from 'react';
import { StyleNavigation, StyleNavigationList } from './Navigation.styled';
import { Link } from 'react-router-dom';
import ROUTES from '../../../shared/constants/routes';

const Navigation = () => {
  return (
    <StyleNavigation>
      <StyleNavigationList>
        {ROUTES.filter((route) => route.nav).map((route) => (
          <li key={route.id}>
            <Link to={route.path}>{route.text}</Link>
          </li>
        ))}
      </StyleNavigationList>
    </StyleNavigation>
  );
};

export default Navigation;
