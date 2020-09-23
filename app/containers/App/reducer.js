/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { LOGIN, REGISTER } from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  isAuthenticated: false,
  user: {},
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOGIN:
        draft.isAuthenticated = true;
        draft.error = false;
        draft.user = action.user;
        break;

      case REGISTER:
        break;
    }
  });

export default appReducer;
