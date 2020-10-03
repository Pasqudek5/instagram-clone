/*
 *
 * ThemeProvider reducer
 *
 */
import produce from 'immer';
import styles from 'themes';
import { CHANGE_MODE, DARK_MODE, LIGHT_MODE } from './constants';

export const initialState = {
  mode: DARK_MODE,
  ...styles,
};

/* eslint-disable default-case, no-param-reassign */
const themeProviderReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_MODE:
        draft.mode = draft.mode === LIGHT_MODE ? DARK_MODE : LIGHT_MODE;
        break;
    }
  });

export default themeProviderReducer;
