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

import { makeSelectTheme } from './selectors';

export const ThemeProvider = ({ theme, children }) => (
  <Provider theme={theme}>{React.Children.only(children)}</Provider>
);

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

const mapDispatchToProps = dispatch => ({});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(ThemeProvider);
