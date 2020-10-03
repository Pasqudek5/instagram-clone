/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';

import PrivateRoute from 'containers/PrivateRoute';

import Navigation from 'components/Navigation';
import FeedPage from 'pages/FeedPage/Loadable';
import LoginPage from 'pages/LoginPage/Loadable';
import RegisterPage from 'pages/RegisterPage/Loadable';
import NotFoundPage from 'pages/NotFoundPage/Loadable';

import routes from 'utils/routes';
import { makeSelectIsAuthenticated } from './selectors';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  //max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  //padding: 0 16px;
  flex-direction: column;
`;

const App = ({ isAuthenticated }) => (
  <React.Fragment>
    <Helmet titleTemplate="%s - Instagram" defaultTitle="Instagram">
      <meta name="description" content="A React.js Boilerplate application" />
    </Helmet>

    {isAuthenticated ? <Navigation /> : <Navigation />}

    <AppWrapper>
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

App.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = createStructuredSelector({
  isAuthenticated: makeSelectIsAuthenticated(),
});

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(App);
