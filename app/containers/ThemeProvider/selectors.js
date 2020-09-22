import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the theme state domain
 */

const selectTheme = state => state.theme || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ThemeProvider
 */
const makeSelectTheme = () =>
  createSelector(
    selectTheme,
    themeState => themeState,
  );

const makeSelectThemeMode = () =>
  createSelector(
    selectTheme,
    themeState => themeState.mode,
  );

const makeSelectThemePalette = () =>
  createSelector(
    selectTheme,
    themeState => themeState.palette,
  );

const makeSelectThemeSizes = () =>
  createSelector(
    selectTheme,
    themeState => themeState.sizes,
  );

const makeSelectThemeSpacing = () =>
  createSelector(
    selectTheme,
    themeState => themeState.spacing,
  );

const makeSelectThemeRadius = () =>
  createSelector(
    selectTheme,
    themeState => themeState.radius,
  );

export {
  makeSelectTheme,
  makeSelectThemeMode,
  makeSelectThemePalette,
  makeSelectThemeSizes,
  makeSelectThemeSpacing,
  makeSelectThemeRadius,
};
