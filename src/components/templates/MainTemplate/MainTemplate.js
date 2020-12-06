import React from 'react';
import Helmet from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../../assets/styles/GlobalStyle';
import { theme } from '../../../assets/styles/theme';
import Navigation from '../../Navigation/Navigation';

const MainTemplate = ({ children }) => {
  return (
    <>
      <Helmet lang="pl">
        <meta charSet="utf-8" />
        <title>My Title</title>
        <link href="../../../assets/styles/vendors/normalize.css" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Caladea:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
      </Helmet>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Navigation />
        {children}
      </ThemeProvider>
    </>
  );
};

export default MainTemplate;
