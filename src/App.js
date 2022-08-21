import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ROUTES from './shared/constants/routes';
import './App.css';
import Header from './components/organisms/Header/Header';
import Footer from './components/organisms/Footer';

import { ThemeProvider } from 'styled-components';
import { theme } from './assets/styles/StyledGuide';
import ScrollToTop from './components/atoms/ScrollToTop';
import Loader from './components/atoms/Loader/Loader';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Suspense fallback={<Loader />}>
          <Routes>
            {ROUTES.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
