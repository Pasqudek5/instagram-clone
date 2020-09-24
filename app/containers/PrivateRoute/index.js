/**
 *
 * PrivateRoute
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Route, Redirect } from 'react-router-dom';

import { makeSelectIsAuthenticated } from 'containers/App/selectors';
import routes from 'utils/routes';

export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={compProps =>
      isAuthenticated ? (
        <Component {...compProps} />
      ) : (
        <Redirect to={routes.auth.login} />
      )
    }
  />
);

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.elementType.isRequired,
};

const mapStateToProps = createStructuredSelector({
  isAuthenticated: makeSelectIsAuthenticated(),
});

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(PrivateRoute);
