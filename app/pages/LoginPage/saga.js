import { takeLatest, call, put, select } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import request from 'utils/request';
import api from 'utils/api';
import routes from 'utils/routes';
import { makeSelectLogin, makeSelectPassword } from './selectors';
import { loginSuccessAction } from './actions';
import { LOGIN_REQUEST } from './constants';

export function* login() {
  const payload = {
    login: yield select(makeSelectLogin()),
    password: yield select(makeSelectPassword()),
  };

  try {
    const user = yield call(request, api(payload.login));
    yield put(loginSuccessAction(user));
    yield put(push(routes.feed));
  } catch (error) {
    console.log('error', error);
  }
}

// Individual exports for testing
export default function* loginPageSaga() {
  yield takeLatest(LOGIN_REQUEST, login);
}
