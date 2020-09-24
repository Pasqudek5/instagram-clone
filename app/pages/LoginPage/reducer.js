/*
 *
 * LoginPage reducer
 *
 */
import produce from 'immer';
import { LOGIN_INPUT_VALUE_CHANGE } from './constants';

export const initialState = {
  login: '',
  password: '',
};

/* eslint-disable default-case, no-param-reassign */
const loginPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOGIN_INPUT_VALUE_CHANGE:
        draft[action.name] = action.value;
    }
  });

export default loginPageReducer;
