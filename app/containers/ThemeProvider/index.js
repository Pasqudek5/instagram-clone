/**
 *
 * ThemeProvider
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { compose } from 'redux';
import { ThemeProvider as Provider } from 'styled-components';

import { useInjectReducer } from 'utils/injectReducer';
import reducer from './reducer';
import { makeSelectTheme } from './selectors';

const key = 'theme';

export const ThemeProvider = ({
  theme,
  /* dispatch, */
  children,
}) => {
  useInjectReducer({ key, reducer });

  return <Provider theme={theme}>{React.Children.only(children)}</Provider>;
};

ThemeProvider.propTypes = {
  theme: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired,
};

const mapStateToProps = createSelector(
  makeSelectTheme(),
  theme => ({
    theme,
  }),
);

const mapDispatchToProps = dispatch => ({
  dispatch,
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(ThemeProvider);
