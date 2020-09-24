/*
 *
 * LoginPage actions
 *
 */

import {
  LOGIN_REQUEST,
  LOGIN_INPUT_VALUE_CHANGE,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from './constants';

export const changeInputValueAction = (name, value) => ({
  type: LOGIN_INPUT_VALUE_CHANGE,
  name,
  value,
});

export const loginAction = () => ({
  type: LOGIN_REQUEST,
});

export const loginSuccessAction = user => ({
  type: LOGIN_SUCCESS,
  user,
});

export const loginErrorAction = error => ({
  type: LOGIN_ERROR,
  error,
});
