import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the feedPage state domain
 */

const selectFeedPageDomain = state => state.feedPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by FeedPage
 */

const makeSelectFeedPage = () =>
  createSelector(
    selectFeedPageDomain,
    substate => substate,
  );

export default makeSelectFeedPage;
export { selectFeedPageDomain };
