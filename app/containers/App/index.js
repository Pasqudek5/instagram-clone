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
import PrivateRoute from 'containers/PrivateRoute';

import FeedPage from 'pages/FeedPage/Loadable';
import LoginPage from 'pages/LoginPage/Loadable';
import RegisterPage from 'pages/RegisterPage';
import NotFoundPage from 'pages/NotFoundPage/Loadable';

import routes from 'utils/routes';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  //max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  //padding: 0 16px;
  flex-direction: column;
`;

const App = () => (
  <AppWrapper>
    <Helmet titleTemplate="%s - Instagram" defaultTitle="Instagram">
      <meta name="description" content="A React.js Boilerplate application" />
    </Helmet>
    <Switch>
      <PrivateRoute exact path={routes.feed} component={FeedPage} />
      <Route path={routes.auth.login} component={LoginPage} />
      <Route path={routes.auth.register} component={RegisterPage} />
      <Route path={routes.notFound} component={NotFoundPage} />
    </Switch>
    <GlobalStyle />
  </AppWrapper>
);

export default App;
