/*
 *
 * ThemeProvider reducer
 *
 */
import produce from 'immer';
import { CHANGE_MODE } from './constants';
import base, { DEFAULT_MODE } from '../../themes';

export const initialState = {
  mode: DEFAULT_MODE,
  ...base,
};

/* eslint-disable default-case, no-param-reassign */
const themeProviderReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_MODE:
        draft.mode = state.mode;
        break;
    }
  });

export default themeProviderReducer;
