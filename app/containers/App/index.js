/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled, { css } from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import theme from 'styled-theming';

import PrivateRoute from 'containers/PrivateRoute';
import { LIGHT_MODE, DARK_MODE } from 'containers/ThemeProvider/constants';
import { Light, Dark } from 'themes';

import Navigation from 'components/Navigation';
import FeedPage from 'pages/FeedPage/Loadable';
import LoginPage from 'pages/LoginPage/Loadable';
import RegisterPage from 'pages/RegisterPage/Loadable';
import NotFoundPage from 'pages/NotFoundPage/Loadable';
import Drawer from 'components/Drawer/Loadable';

import routes from 'utils/routes';
import useMediaQuery from 'hooks/useMediaQuery';
import { makeSelectIsAuthenticated } from './selectors';

import GlobalStyle from '../../global-styles';

console.log({ Light });

const AppWrapperTheme = theme('mode', {
  [LIGHT_MODE]: css`
    background-color: ${Light.background.body};
  `,
  [DARK_MODE]: css`
    background-color: ${Dark.background.body};
  `,
});

const AppWrapper = styled.main`
  ${AppWrapperTheme};
  margin: ${({ theme }) => theme.space['6']} ${({ theme }) => theme.space['0']};
  display: flex;
  min-height: 110vh;
`;

const App = ({ isAuthenticated }) => {
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  return (
    <React.Fragment>
      <Helmet titleTemplate="%s - Instagram" defaultTitle="Instagram">
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>

      {/* {isAuthenticated && <Navigation />} */}
      {/* {isDesktop && isAuthenticated && <Drawer />} */}

      <Navigation />

      <AppWrapper>
        {isDesktop && <Drawer />}
        <Switch>
          <Route exact path={routes.feed} component={FeedPage} />
          <Route exact path={routes.auth.login} component={LoginPage} />
          <Route exact path={routes.auth.register} component={RegisterPage} />
          <Route path={routes.notFound} component={NotFoundPage} />
        </Switch>

        <GlobalStyle />
      </AppWrapper>
    </React.Fragment>
  );
};

App.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = createStructuredSelector({
  isAuthenticated: makeSelectIsAuthenticated(),
});

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(App);
