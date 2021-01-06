import React from 'react';
import Helmet from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import Navigation from 'components/organisms/Navigation/Navigation';
import Footer from 'components/organisms/Footer/Footer';

const MainTemplate = ({ children }) => (
  <>
    <Helmet lang="pl">
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
      <title>Olga Łukasik Psycholog</title>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Caladea:ital,wght@0,400;0,700;1,400;1,700&display=swap"
        rel="stylesheet"
      />
    </Helmet>

    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Navigation />
      {children}
      <Footer />
    </ThemeProvider>
  </>
);

export default MainTemplate;
