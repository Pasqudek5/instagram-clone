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

import NotFoundPage from 'pages/NotFoundPage/Loadable';
import LoginPage from 'pages/LoginPage/Loadable';
import RegisterPage from 'pages/RegisterPage/Loadable';

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
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/register" component={RegisterPage} />
      <Route path="" component={NotFoundPage} />
    </Switch>
    <GlobalStyle />
  </AppWrapper>
);

export default App;
