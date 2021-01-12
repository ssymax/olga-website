import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import Navigation from 'components/organisms/Navigation/Navigation';
import Footer from 'components/organisms/Footer/Footer';

const MainTemplate = ({ children }) => {
  return (
    <>
      <Helmet lang="pl">
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
        <meta
          name="description"
          content="Olga Łukasik psycholog, terapueta - online i w Olsztynie"
        />
        <meta name="author" content="Szymon Łukasik" />
        <meta name="copyright" content="Olga Łukasik" />
        <title> Psycholog Olsztyn - Olga Łukasik - terapeuta online</title>
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
};

export default MainTemplate;

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};
