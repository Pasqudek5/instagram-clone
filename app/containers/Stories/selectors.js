import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the stories state domain
 */

const selectStoriesDomain = state => state.stories || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Stories
 */

const makeSelectStories = () =>
  createSelector(
    selectStoriesDomain,
    substate => substate,
  );

export default makeSelectStories;
export { selectStoriesDomain };
